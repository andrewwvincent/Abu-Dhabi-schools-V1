// Initialize map centered on UAE
const map = L.map('map').setView([24.0, 54.0], 7);

// Define tile layers for different languages
const tileLayers = {
    english: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }),
    arabic: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    })
};

// Add default English tile layer
let currentTileLayer = tileLayers.english.addTo(map);

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

const publicIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
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
let publicCount = 0;

// Add school markers
function addSchoolMarkers(schools = schoolsData) {
    schoolMarkers.clearLayers();
    allMarkers = [];
    privateCount = 0;
    charterCount = 0;
    publicCount = 0;

    schools.forEach(school => {
        let icon;
        if (school.school_type === 'Private') {
            icon = privateIcon;
            privateCount++;
        } else if (school.school_type === 'Public') {
            icon = publicIcon;
            publicCount++;
        } else {
            icon = charterIcon;
            charterCount++;
        }

        // Format tuition fee
        let tuitionDisplay = 'N/A';
        if (school.tuition_fee !== undefined && school.tuition_fee !== null) {
            if (school.tuition_fee === 0) {
                tuitionDisplay = 'Free';
            } else {
                tuitionDisplay = `AED ${school.tuition_fee.toLocaleString()}`;
            }
        }

        // Format enrollment
        let enrollmentDisplay = 'N/A';
        if (school.enrollment !== undefined && school.enrollment !== null) {
            enrollmentDisplay = school.enrollment.toLocaleString();
        }

        // Build popup fields dynamically
        let popupFields = `
            <div class="field"><span class="label">Type:</span> <span class="value">${school.school_type}</span></div>
            <div class="field"><span class="label">Curriculum:</span> <span class="value">${school.curriculum_type}</span></div>
            <div class="field"><span class="label">Avg. Tuition:</span> <span class="value">${tuitionDisplay}</span></div>
        `;

        // Add enrollment if available
        if (school.enrollment !== undefined && school.enrollment !== null) {
            popupFields += `<div class="field"><span class="label">Enrollment:</span> <span class="value">${enrollmentDisplay}</span></div>`;
        }

        // Add emirate
        if (school.emirate) {
            popupFields += `<div class="field"><span class="label">Emirate:</span> <span class="value">${school.emirate}</span></div>`;
        }

        popupFields += `
            <div class="field"><span class="label">Address:</span> <span class="value">${school.address}</span></div>
            <div class="field"><span class="label">Coordinates:</span> <span class="value">${school.lat.toFixed(6)}, ${school.lon.toFixed(6)}</span></div>
        `;

        const popupContent = `
            <div class="info-panel">
                <h3>${school.name}</h3>
                ${popupFields}
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
    document.getElementById('public-count').textContent = publicCount;
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
        'emirates': { file: 'Geographies/uae_adm1_gadm.geojson', type: 'geojson' },
        'municipalities': { file: 'Geographies/uae_adm2_gadm.geojson', type: 'geojson' },
        'dubai-communities': { file: 'Geographies/Community.kml', type: 'kml', dataType: 'polygon' },
        'dubai-sectors': { file: 'Geographies/Sectors.kml', type: 'kml', dataType: 'polygon' },
        'abudhabi-communities': { file: 'Geographies/abudhabi_Community_layer12.geojson', type: 'geojson' },
        'abudhabi-districts': { file: 'Geographies/abudhabi_District_layer13.geojson', type: 'geojson' },
        'abudhabi-municipalities': { file: 'Geographies/abudhabi_Municipality_layer14.geojson', type: 'geojson' }
    };

    const boundaryConfig = boundaryFiles[type];
    if (!boundaryConfig) return;

    try {
        let data;
        
        if (boundaryConfig.type === 'kml') {
            // Load KML file using Leaflet Omnivore
            await loadKMLBoundaries(boundaryConfig.file, type, boundaryConfig.dataType);
            return;
        } else {
            // Load GeoJSON file
            const response = await fetch(boundaryConfig.file);
            data = await response.json();
            currentBoundaryData = data;
        }

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
                
                // Support multiple formats: GADM, geoBoundaries, and Abu Dhabi ArcGIS
                let regionName, arabicName, emirate, regionType, additionalInfo;
                
                // Abu Dhabi Municipality
                if (props.NAMEENGLISH && type === 'abudhabi-municipalities') {
                    regionName = props.NAMEENGLISH;
                    arabicName = props.NAMEARABIC;
                    emirate = 'Abu Dhabi';
                    regionType = 'Municipality';
                }
                // Abu Dhabi District
                else if (props.NAMEENGLISH && type === 'abudhabi-districts') {
                    regionName = props.NAMEENGLISH;
                    arabicName = props.NAMEARABIC;
                    emirate = 'Abu Dhabi';
                    regionType = 'District';
                    additionalInfo = `District ID: ${props.DISTRICTID}`;
                }
                // Abu Dhabi Community
                else if (props.COMMUNITYNAMEENG && type === 'abudhabi-communities') {
                    regionName = props.COMMUNITYNAMEENG;
                    emirate = 'Abu Dhabi';
                    regionType = 'Community';
                    additionalInfo = `Community ID: ${props.COMMUNITYID}, District ID: ${props.DISTRICTID}`;
                }
                // GADM or geoBoundaries format
                else {
                    regionName = props.shapeName || props.NAME_2 || props.NAME_1 || 'Unknown';
                    emirate = props.NAME_1 || props.shapeName || '';
                    regionType = props.TYPE_2 || props.shapeType || 'Region';
                    arabicName = props.NL_NAME_2 || props.NL_NAME_1;
                }
                
                // Popup content with English and Arabic
                let popupContent = `<div style="font-size: 14px;"><strong>${regionName}</strong>`;
                if (arabicName) {
                    popupContent += ` <span style="color: #888; font-size: 12px;">(${arabicName})</span>`;
                }
                popupContent += `<br>`;
                if (emirate && emirate !== regionName) {
                    popupContent += `<strong>Emirate:</strong> ${emirate}<br>`;
                }
                popupContent += `<strong>Type:</strong> ${regionType}`;
                if (additionalInfo) {
                    popupContent += `<br><span style="font-size: 11px; color: #666;">${additionalInfo}</span>`;
                }
                popupContent += `</div>`;
                
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
        let regionName, emirate;
        
        // Abu Dhabi Municipality
        if (props.NAMEENGLISH && props.OBJECTID && !props.DISTRICTID) {
            regionName = props.NAMEENGLISH;
            emirate = 'Abu Dhabi';
        }
        // Abu Dhabi District
        else if (props.NAMEENGLISH && props.DISTRICTID && !props.COMMUNITYID) {
            regionName = props.NAMEENGLISH;
            emirate = 'Abu Dhabi';
        }
        // Abu Dhabi Community
        else if (props.COMMUNITYNAMEENG) {
            regionName = props.COMMUNITYNAMEENG;
            emirate = 'Abu Dhabi';
        }
        // Dubai Sectors (KML)
        else if (props.SEC_NUM) {
            regionName = `Sector ${props.SEC_NUM}`;
            emirate = 'Dubai';
        }
        // Dubai Communities (KML)
        else if (props.CNAME_E || props.name) {
            regionName = props.CNAME_E || props.name;
            emirate = 'Dubai';
        }
        // GADM/geoBoundaries format
        else {
            regionName = props.shapeName || props.NAME_2 || props.NAME_1 || 'Unknown';
            emirate = props.NAME_1 || props.shapeName || 'Unknown';
        }
        
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
        let name;
        
        // Abu Dhabi layers
        if (props.NAMEENGLISH && !props.COMMUNITYID) {
            name = props.NAMEENGLISH;
        }
        // Abu Dhabi Community
        else if (props.COMMUNITYNAMEENG) {
            name = props.COMMUNITYNAMEENG;
        }
        // Dubai Sectors (KML)
        else if (props.SEC_NUM) {
            name = `Sector ${props.SEC_NUM}`;
        }
        // Dubai Communities (KML)
        else if (props.CNAME_E || props.name) {
            name = props.CNAME_E || props.name;
        }
        // GADM/geoBoundaries format
        else {
            name = props.shapeName || props.NAME_2 || props.NAME_1;
        }
        
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

// Load KML boundaries
async function loadKMLBoundaries(kmlFile, type, dataType) {
    try {
        const isPointData = dataType === 'point';
        
        // Use Leaflet Omnivore to load KML
        const kmlLayer = omnivore.kml(kmlFile, null, L.geoJSON(null, {
            style: function(feature) {
                // Different styles for different types
                if (type === 'dubai-sectors') {
                    return {
                        weight: 2,
                        color: '#e74c3c',
                        fillOpacity: 0.1,
                        fillColor: '#e74c3c'
                    };
                } else {
                    return {
                        weight: 2,
                        color: '#667eea',
                        fillOpacity: 0.15
                    };
                }
            },
            pointToLayer: function(feature, latlng) {
                // For point data (entrances), use circle markers
                if (isPointData) {
                    return L.circleMarker(latlng, {
                        radius: 3,
                        fillColor: '#3498db',
                        color: '#2980b9',
                        weight: 1,
                        opacity: 0.8,
                        fillOpacity: 0.6
                    });
                }
            },
            onEachFeature: (feature, layer) => {
                const props = feature.properties;
                let popupContent = '<div style="font-size: 14px;">';
                
                // Handle different KML types
                if (type === 'dubai-communities') {
                    const communityName = props.CNAME_E || props.name || 'Unknown';
                    const communityNameAr = props.CNAME_A || '';
                    const communityNum = props.COMM_NUM || '';
                    
                    popupContent += `<strong>${communityName}</strong>`;
                    if (communityNameAr) {
                        popupContent += ` <span style="color: #888; font-size: 12px;">(${communityNameAr})</span>`;
                    }
                    popupContent += `<br>`;
                    if (communityNum) {
                        popupContent += `<strong>Community #:</strong> ${communityNum}<br>`;
                    }
                    popupContent += `<strong>Type:</strong> Dubai Community`;
                    
                } else if (type === 'dubai-sectors') {
                    const sectorNum = props.SEC_NUM || props.name || 'Unknown';
                    popupContent += `<strong>Sector ${sectorNum}</strong><br>`;
                    popupContent += `<strong>Type:</strong> Dubai Sector`;
                    
                } else if (type === 'dubai-entrances') {
                    const makani = props.MAKANI || 'N/A';
                    const communityName = props.COMM_NAM_1 || '';
                    const entranceId = props.ENTERANCEID || '';
                    
                    popupContent += `<strong>Building Entrance</strong><br>`;
                    if (makani !== 'N/A') {
                        popupContent += `<strong>Makani:</strong> ${makani}<br>`;
                    }
                    if (communityName) {
                        popupContent += `<strong>Community:</strong> ${communityName}<br>`;
                    }
                    if (entranceId) {
                        popupContent += `<strong>ID:</strong> ${entranceId}`;
                    }
                }
                
                popupContent += '</div>';
                layer.bindPopup(popupContent);
                
                // Hover effects (only for polygons)
                if (!isPointData && layer.setStyle) {
                    layer.on({
                        mouseover: (e) => {
                            e.target.setStyle({ weight: 4, fillOpacity: 0.3 });
                        },
                        mouseout: (e) => {
                            const baseStyle = type === 'dubai-sectors' ? 
                                { weight: 2, fillOpacity: 0.1 } : 
                                { weight: 2, fillOpacity: 0.15 };
                            e.target.setStyle(baseStyle);
                        },
                        click: (e) => {
                            if (e.target.getBounds) {
                                map.fitBounds(e.target.getBounds());
                            }
                        }
                    });
                }
            }
        }));
        
        kmlLayer.on('ready', function() {
            boundaryLayer = kmlLayer;
            
            // Only fit bounds for polygon data
            if (!isPointData) {
                map.fitBounds(kmlLayer.getBounds());
            }
            
            // Convert to GeoJSON for filtering
            currentBoundaryData = kmlLayer.toGeoJSON();
            
            // Only show filter for polygon data
            if (!isPointData) {
                populateRegionFilter(currentBoundaryData);
            } else {
                document.getElementById('region-filter-container').style.display = 'none';
            }
        });
        
        kmlLayer.addTo(map);
        
    } catch (error) {
        console.error('Error loading KML boundaries:', error);
        alert('Failed to load KML boundary data');
    }
}

// Load Emirates boundaries as background layer
async function loadEmiratesBoundaries() {
    try {
        const response = await fetch('Geographies/uae_adm1_gadm.geojson');
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

// Switch map language
function switchMapLanguage(language) {
    // Remove current tile layer
    if (currentTileLayer) {
        map.removeLayer(currentTileLayer);
    }
    
    // Add new tile layer
    currentTileLayer = tileLayers[language];
    currentTileLayer.addTo(map);
    
    // Ensure tile layer is at the back
    currentTileLayer.bringToBack();
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

document.getElementById('map-language').addEventListener('change', (e) => {
    switchMapLanguage(e.target.value);
});

// Initialize
addSchoolMarkers(schoolsData);
