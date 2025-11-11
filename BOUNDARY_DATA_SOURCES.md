# UAE Geographic Boundary Data Sources

## Official & Recommended Sources

### 1. **Humanitarian Data Exchange (HDX)** - RECOMMENDED ✅
**URL:** https://data.humdata.org/dataset/cod-ab-are
- **What:** Official UAE Administrative Boundaries (COD-AB)
- **Levels:** ADM0 (Country), ADM1 (Emirates - 7 features)
- **Formats:** Shapefile, GeoJSON, Geodatabase, XLSX
- **Source:** Federal Competitiveness and Statistics Centre, UAE Ministry of Cabinet Affairs
- **Updated:** December 2024
- **License:** Creative Commons Attribution for Intergovernmental Organisations
- **Downloads:** 5500+

**How to Download:**
1. Visit: https://data.humdata.org/dataset/cod-ab-are
2. Click on the format you want (recommend GeoJSON or SHP)
3. Download directly

### 2. **GADM (Global Administrative Areas)**
**URL:** https://gadm.org/download_country.html
- **What:** Global administrative boundaries database
- **Levels:** 
  - Level 0: Country boundary
  - Level 1: Emirates (7 emirates)
  - Level 2: Sub-emirate divisions (municipalities, regions)
- **Formats:** Shapefile, GeoPackage, GeoJSON, KMZ
- **Version:** 4.1 (latest)
- **License:** Free for academic/non-commercial use

**How to Download:**
1. Go to: https://gadm.org/download_country.html
2. Select "United Arab Emirates" from dropdown
3. Choose format (GeoJSON recommended)
4. Download Level 1 (Emirates) and Level 2 (Municipalities/Districts)

### 3. **geoBoundaries**
**URL:** https://www.geoboundaries.org/
- **What:** Open political administrative boundaries
- **Levels:** ADM0, ADM1, ADM2
- **Formats:** Shapefile, GeoJSON, TopoJSON
- **Version:** 6.0.0
- **License:** Open Data Commons Open Database License

**Direct Download:**
- ADM1: https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/gbOpen/ARE/ADM1/geoBoundaries-ARE-ADM1.geojson
- ADM2: https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/gbOpen/ARE/ADM2/geoBoundaries-ARE-ADM2.geojson

### 4. **Bayanat - UAE Open Data Portal**
**URL:** https://bayanat.ae/en/GeoData
- **What:** Official UAE government open data portal
- **Content:** Various geospatial datasets including administrative boundaries
- **Note:** May require registration

### 5. **Natural Earth Data**
**URL:** https://www.naturalearthdata.com/
- **What:** Public domain map dataset
- **Scale:** 1:10m, 1:50m, 1:110m
- **Good for:** Country-level and major administrative divisions
- **License:** Public domain

## Available Administrative Levels for UAE

### Level 0 (ADM0) - Country
- United Arab Emirates

### Level 1 (ADM1) - Emirates (7)
1. Abu Dhabi (أبو ظبي)
2. Dubai (دبي)
3. Sharjah (الشارقة)
4. Ajman (عجمان)
5. Umm Al Quwain (أم القيوين)
6. Ras Al Khaimah (رأس الخيمة)
7. Fujairah (الفجيرة)

### Level 2 (ADM2) - Municipalities/Regions
**Abu Dhabi Emirate (3 regions):**
- Abu Dhabi City (Municipality)
- Al Ain (Municipality)
- Al Dhafra (Western Region)

**Dubai Emirate:**
- Various communities/sectors (data availability varies)

**Other Emirates:**
- May have municipality or district-level divisions

### Level 3+ (ADM3/ADM4) - Neighborhoods/Communities
- Limited availability in free datasets
- May need commercial sources or local government portals

## Recommended Workflow

1. **Start with GADM Level 2** - Best coverage of municipalities
2. **Use HDX for Emirates** - Most official and up-to-date
3. **Check Bayanat** - For Abu Dhabi-specific detailed boundaries
4. **OpenStreetMap** - For neighborhood-level data (requires extraction)

## Converting Formats

If you download Shapefiles and need GeoJSON:
```bash
# Using ogr2ogr (part of GDAL)
ogr2ogr -f GeoJSON output.geojson input.shp

# Using Python
import geopandas as gpd
gdf = gpd.read_file('input.shp')
gdf.to_file('output.geojson', driver='GeoJSON')

# Online converter
https://mapshaper.org/
```

## Additional Boundary Types to Consider

1. **Statistical Areas** - Census/demographic boundaries
2. **Postal Codes** - Delivery zones
3. **School Districts** - Educational zones (if available)
4. **Healthcare Zones** - Medical service areas
5. **Police Districts** - Security jurisdictions
6. **Electoral Districts** - Voting areas (if applicable)
7. **Economic Zones** - Free zones, industrial areas
8. **Urban Planning Zones** - Land use classifications

## Next Steps

1. Download GADM Level 1 and Level 2 for UAE
2. Replace placeholder GeoJSON files in `/boundaries/` folder
3. Update the boundary selector in the app to include Level 2 (municipalities)
4. Consider adding more specific boundaries based on your analysis needs
