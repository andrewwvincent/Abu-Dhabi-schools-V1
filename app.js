// Initialize map centered on UAE
const map = L.map('map').setView([24.0, 54.0], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Custom icons for school types
const privateIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const charterIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Layer groups
let schoolMarkers = L.layerGroup().addTo(map);
let boundaryLayer = null;
let emiratesBoundaryLayer = null;
let schoolPinsVisible = true;

// Data storage
let currentBoundaryData = null;
let allMarkers = [];

// Statistics
let privateCount = 0;
let charterCount = 0;

// Add school markers
function addSchoolMarkers(schools = schoolsData) {
    schoolMarkers.clearLayers();
    allMarkers = [];
    privateCount = 0;
    charterCount = 0;

    schools.forEach(school => {
        const icon = school.school_type === 'Private' ? privateIcon : charterIcon;
        if (school.school_type === 'Private') privateCount++;
        else charterCount++;

        const popupContent = `
            <div class="info-panel">
                <h3>${school.name}</h3>
                <div class="field"><span class="label">Type:</span> <span class="value">${school.school_type}</span></div>
                <div class="field"><span class="label">Curriculum:</span> <span class="value">${school.curriculum_type}</span></div>
                <div class="field"><span class="label">Address:</span> <span class="value">${school.address}</span></div>
                <div class="field"><span class="label">Coordinates:</span> <span class="value">${school.lat.toFixed(6)}, ${school.lon.toFixed(6)}</span></div>
            </div>
        `;

        const marker = L.marker([school.lat, school.lon], { icon: icon })
            .bindPopup(popupContent);
        
        marker.schoolData = school;
        schoolMarkers.addLayer(marker);
        allMarkers.push(marker);
    });

    updateStatistics();
}

// Update statistics display
function updateStatistics() {
    document.getElementById('total-schools').textContent = schoolsData.length;
    document.getElementById('private-count').textContent = privateCount;
    document.getElementById('charter-count').textContent = charterCount;
}

// Load and display boundaries
async function loadBoundaries(type) {
    // Remove existing boundary layer
    if (boundaryLayer) {
        map.removeLayer(boundaryLayer);
        boundaryLayer = null;
    }
    
    // Remove emirates layer if switching away from municipalities
    if (type !== 'municipalities' && emiratesBoundaryLayer) {
        map.removeLayer(emiratesBoundaryLayer);
        emiratesBoundaryLayer = null;
    }

    if (type === 'none') {
        currentBoundaryData = null;
        document.getElementById('region-filter-container').style.display = 'none';
        document.getElementById('visible-schools-stat').style.display = 'none';
        addSchoolMarkers(schoolsData);
        return;
    }

    const boundaryFiles = {
        'emirates': 'boundaries/uae_adm1_gadm.geojson',
        'municipalities': 'boundaries/uae_adm2_gadm.geojson'
    };

    const file = boundaryFiles[type];
    if (!file) return;

    try {
        const response = await fetch(file);
        const data = await response.json();
        currentBoundaryData = data;

        // Style for boundaries
        const boundaryStyle = {
            color: '#667eea',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.1,
            fillColor: '#667eea'
        };

        const highlightStyle = {
            weight: 3,
            color: '#764ba2',
            fillOpacity: 0.2
        };

        // Create boundary layer
        boundaryLayer = L.geoJSON(data, {
            style: boundaryStyle,
            onEachFeature: (feature, layer) => {
                const props = feature.properties;
                // Support both geoBoundaries and GADM formats
                const regionName = props.shapeName || props.NAME_2 || props.NAME_1 || 'Unknown';
                const emirate = props.NAME_1 || props.shapeName || '';
                const regionType = props.TYPE_2 || props.shapeType || 'Region';
                
                // Popup content with English and Arabic
                let popupContent = `<div style="font-size: 14px;"><strong>${regionName}</strong>`;
                if (props.NL_NAME_2 || props.NL_NAME_1) {
                    popupContent += ` <span style="color: #888; font-size: 12px;">(${props.NL_NAME_2 || props.NL_NAME_1 || ''})</span>`;
                }
                popupContent += `<br>`;
                if (emirate && emirate !== regionName) {
                    popupContent += `<strong>Emirate:</strong> ${emirate}<br>`;
                }
                popupContent += `<strong>Type:</strong> ${regionType}</div>`;
                
                layer.bindPopup(popupContent);

                // Hover effects
                layer.on({
                    mouseover: (e) => {
                        e.target.setStyle(highlightStyle);
                        showRegionInfo(regionName, regionType);
                    },
                    mouseout: (e) => {
                        boundaryLayer.resetStyle(e.target);
                        hideRegionInfo();
                    },
                    click: (e) => {
                        map.fitBounds(e.target.getBounds());
                    }
                });
            }
        }).addTo(map);

        // Fit map to boundaries
        map.fitBounds(boundaryLayer.getBounds());

        // If showing municipalities, also load and display Emirates boundaries as background
        if (type === 'municipalities') {
            await loadEmiratesBoundaries();
        }
        
        // Populate region filter
        populateRegionFilter(data);

    } catch (error) {
        console.error('Error loading boundaries:', error);
        alert('Failed to load boundary data');
    }
}

// Populate region filter dropdown
function populateRegionFilter(data) {
    const filterContainer = document.getElementById('region-filter-container');
    const filterSelect = document.getElementById('region-filter');
    
    filterSelect.innerHTML = '<option value="all">All Regions</option>';
    
    // Group regions by emirate for better organization
    const regionsByEmirate = {};
    
    data.features.forEach(feature => {
        const props = feature.properties;
        const regionName = props.shapeName || props.NAME_2 || props.NAME_1 || 'Unknown';
        const emirate = props.NAME_1 || props.shapeName || 'Other';
        
        if (!regionsByEmirate[emirate]) {
            regionsByEmirate[emirate] = [];
        }
        regionsByEmirate[emirate].push(regionName);
    });
    
    // Add options grouped by emirate
    Object.keys(regionsByEmirate).sort().forEach(emirate => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = emirate;
        
        regionsByEmirate[emirate].sort().forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            optgroup.appendChild(option);
        });
        
        filterSelect.appendChild(optgroup);
    });
    
    filterContainer.style.display = 'block';
}

// Filter schools by region
function filterSchoolsByRegion(regionName) {
    if (regionName === 'all' || !currentBoundaryData) {
        addSchoolMarkers(schoolsData);
        document.getElementById('visible-schools-stat').style.display = 'none';
        return;
    }

    // Find the selected region feature
    const regionFeature = currentBoundaryData.features.find(f => {
        const props = f.properties;
        const name = props.shapeName || props.NAME_2 || props.NAME_1;
        return name === regionName;
    });

    if (!regionFeature) {
        addSchoolMarkers(schoolsData);
        return;
    }

    // Filter schools within the region bounds
    const bounds = L.geoJSON(regionFeature).getBounds();
    const filteredSchools = schoolsData.filter(school => 
        bounds.contains([school.lat, school.lon])
    );

    addSchoolMarkers(filteredSchools);
    
    // Update visible count
    document.getElementById('visible-schools-stat').style.display = 'flex';
    document.getElementById('visible-count').textContent = filteredSchools.length;

    // Zoom to region
    map.fitBounds(bounds);
}

// Show region info box
function showRegionInfo(name, type) {
    const infoBox = document.getElementById('region-info');
    document.getElementById('region-name').textContent = name;
    document.getElementById('region-details').textContent = `Type: ${type}`;
    infoBox.classList.add('show');
}

// Hide region info box
function hideRegionInfo() {
    document.getElementById('region-info').classList.remove('show');
}

// Load Emirates boundaries as background layer
async function loadEmiratesBoundaries() {
    try {
        const response = await fetch('boundaries/uae_adm1_gadm.geojson');
        const data = await response.json();
        
        // Style for Emirates boundaries (thicker black borders)
        const emiratesStyle = {
            color: '#000000',
            weight: 3,
            opacity: 0.8,
            fillOpacity: 0,
            fillColor: 'transparent'
        };
        
        emiratesBoundaryLayer = L.geoJSON(data, {
            style: emiratesStyle,
            interactive: false // Don't capture mouse events
        }).addTo(map);
        
        // Send to back so municipalities appear on top
        if (emiratesBoundaryLayer) {
            emiratesBoundaryLayer.bringToBack();
        }
    } catch (error) {
        console.error('Error loading Emirates boundaries:', error);
    }
}

// Toggle school pins visibility
function toggleSchoolPins() {
    schoolPinsVisible = !schoolPinsVisible;
    const toggleBtn = document.getElementById('toggle-schools');
    
    if (schoolPinsVisible) {
        map.addLayer(schoolMarkers);
        toggleBtn.classList.add('active');
        toggleBtn.textContent = 'Hide Pins';
    } else {
        map.removeLayer(schoolMarkers);
        toggleBtn.classList.remove('active');
        toggleBtn.textContent = 'Show Pins';
    }
}

// Reset map view
function resetView() {
    map.setView([24.0, 54.0], 7);
    document.getElementById('boundary-type').value = 'none';
    document.getElementById('region-filter').value = 'all';
    loadBoundaries('none');
}

// Event listeners
document.getElementById('boundary-type').addEventListener('change', (e) => {
    loadBoundaries(e.target.value);
});

document.getElementById('region-filter').addEventListener('change', (e) => {
    filterSchoolsByRegion(e.target.value);
});

document.getElementById('toggle-schools').addEventListener('click', toggleSchoolPins);

document.getElementById('reset-view').addEventListener('click', resetView);

// Initialize
addSchoolMarkers(schoolsData);
