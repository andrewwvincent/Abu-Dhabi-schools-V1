# ADEK Schools Interactive Map - UAE

An interactive web-based map visualization of private and charter schools in the United Arab Emirates, with detailed geographic boundary overlays.

## Features

### 📍 School Data
- **195 schools** mapped across the UAE
- **Private schools** (blue markers) and **Charter schools** (orange markers)
- Detailed information popups for each school:
  - School name
  - Type (Private/Charter)
  - Curriculum
  - Full address
  - GPS coordinates

### 🗺️ Geographic Boundaries

#### Level 1: UAE Emirates (7)
- Abu Dhabi
- Dubai
- Sharjah
- Ajman
- Umm Al Quwain
- Ras Al Khaimah
- Fujairah

#### Level 2: Municipalities & Regions (195)
Detailed administrative divisions including:
- **Abu Dhabi**: 3 regions (Abu Dhabi City, Al Ain, Al Gharbia)
- **Dubai**: 9 sectors
- **Sharjah**: 74 neighborhoods and districts
- **Ajman**: 44 neighborhoods
- **Ras Al Khaimah**: 61 districts
- **Fujairah**: 3 regions
- **Umm Al Quwain**: 1 region

### 🎛️ Interactive Controls
- **Boundary selector**: Toggle between Emirates and detailed municipalities
- **Region filter**: Filter schools by specific region (grouped by emirate)
- **Hover effects**: Highlight regions on mouseover
- **Click to zoom**: Click any boundary to zoom to that region
- **Statistics panel**: Real-time counts of schools displayed
- **Reset view**: Return to full UAE view

## Getting Started

### Prerequisites
- Python 3.x (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Running Locally

1. **Navigate to the project directory:**
   ```bash
   cd "c:\Users\andre\OneDrive\Documents\Trilogy-Andrew-Desktop\UAE\Mapping Tool"
   ```

2. **Start the local server:**
   ```bash
   python -m http.server 8000
   ```

3. **Open in browser:**
   - Navigate to: http://localhost:8000
   - The map will load automatically

### Why a Local Server?
The map uses `fetch()` to load GeoJSON boundary files, which requires a web server due to browser CORS (Cross-Origin Resource Sharing) security policies. Opening `index.html` directly in a browser will not work.

## File Structure

```
Mapping Tool/
├── index.html                          # Main HTML file
├── app.js                              # Application logic
├── schools-data.js                     # School data (auto-generated)
├── parse_csv.py                        # CSV to JS converter
├── download_boundaries.py              # Boundary data downloader
├── inspect_boundaries.py               # Boundary data inspector
├── ADEK - Private and Charter Schools.csv  # Source data
├── boundaries/
│   ├── uae_emirates_adm1.geojson      # Emirates boundaries (real data)
│   ├── uae_adm2_gadm.geojson          # Municipalities (195 regions)
│   ├── uae_emirates_simple.geojson    # Old placeholder
│   └── abu_dhabi_regions_simple.geojson # Old placeholder
├── README.md                           # This file
└── BOUNDARY_DATA_SOURCES.md           # Data sources documentation
```

## Data Sources

### School Data
- **Source**: ADEK (Abu Dhabi Department of Education and Knowledge)
- **File**: `ADEK - Private and Charter Schools.csv`
- **Schools**: 195 (as of data collection date)
- **Fields**: Name, Type, Curriculum, Address, Coordinates

### Boundary Data

#### Emirates (ADM1)
- **Source**: geoBoundaries (https://www.geoboundaries.org/)
- **File**: `uae_emirates_adm1.geojson`
- **Features**: 7 emirates with accurate polygons
- **License**: Open Data Commons Open Database License

#### Municipalities (ADM2)
- **Source**: GADM (Global Administrative Areas) v4.1
- **File**: `uae_adm2_gadm.geojson`
- **Features**: 195 detailed administrative regions
- **License**: Free for academic and non-commercial use
- **URL**: https://gadm.org/

## Technologies Used

- **Leaflet.js** v1.9.4 - Interactive mapping library
- **OpenStreetMap** - Base map tiles
- **GeoJSON** - Geographic data format
- **Vanilla JavaScript** - No frameworks, pure JS
- **Python** - Data processing and local server

## Deployment to GitHub Pages

To host this map on GitHub Pages:

1. **Create a GitHub repository**
2. **Push all files to the repository**
3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch (usually `main`)
   - Select root folder
   - Save

4. **Access your map:**
   - URL will be: `https://[username].github.io/[repository-name]/`

**Note**: GitHub Pages automatically serves files over HTTPS, so the CORS issue won't occur.

## Customization

### Adding More Schools
1. Update `ADEK - Private and Charter Schools.csv`
2. Run: `python parse_csv.py`
3. Refresh the browser

### Changing Map Style
Edit the `style` section in `index.html` or modify the Leaflet tile layer in `app.js`:
```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // Change this URL to use different map styles
})
```

### Adding New Boundary Types
1. Download GeoJSON file (see `BOUNDARY_DATA_SOURCES.md`)
2. Place in `boundaries/` folder
3. Update `boundaryFiles` object in `app.js`
4. Add option to HTML select dropdown

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Initial load**: ~2-3 seconds (depends on connection)
- **Boundary rendering**: Instant for Emirates, ~1 second for 195 municipalities
- **School markers**: 195 markers render instantly
- **File sizes**:
  - Emirates GeoJSON: ~1.5 MB
  - Municipalities GeoJSON: ~8 MB
  - Schools data: ~50 KB

## Future Enhancements

Potential features to add:
- [ ] Search functionality for schools
- [ ] Filter by curriculum type
- [ ] Heatmap view of school density
- [ ] Distance calculator between schools
- [ ] Export filtered data to CSV
- [ ] Print-friendly map view
- [ ] School comparison tool
- [ ] Demographic overlays (population density, etc.)
- [ ] Transit routes to schools
- [ ] Catchment area analysis

## Troubleshooting

### Map doesn't load
- Ensure Python server is running
- Check browser console for errors (F12)
- Verify all files are in correct locations

### Boundaries don't appear
- Check that GeoJSON files exist in `boundaries/` folder
- Verify files are valid JSON (use https://geojson.io/)
- Check browser console for fetch errors

### Schools missing
- Verify `schools-data.js` exists
- Run `python parse_csv.py` to regenerate
- Check CSV file has correct format

## License

- **Code**: MIT License (free to use and modify)
- **School Data**: ADEK - check with source for usage rights
- **Boundary Data**: See individual data source licenses in `BOUNDARY_DATA_SOURCES.md`

## Credits

- **Map Library**: Leaflet.js
- **Base Maps**: OpenStreetMap contributors
- **Boundary Data**: geoBoundaries & GADM
- **School Data**: ADEK

## Contact

For questions or issues, please refer to the project repository or contact the maintainer.

---

**Last Updated**: November 2025
**Version**: 2.0
