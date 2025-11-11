# Recent Changes & Fixes

## November 11, 2025 - Version 2.1

### Fixed Issues

1. **Toggle Pins Button Logic** ✅
   - Fixed inverted button text (was showing "Hide Pins" when pins were hidden)
   - Button now correctly shows "Hide Pins" when pins are visible
   - Button shows "Show Pins" when pins are hidden
   - Active state styling matches visibility state

2. **Boundary Alignment** ✅
   - Replaced mixed boundary sources with consistent GADM data
   - **Before**: Emirates from geoBoundaries + Municipalities from GADM (misaligned)
   - **After**: Both levels from GADM 4.1 (perfectly aligned)
   - Emirates boundaries now properly overlay municipalities with no gaps or overlaps

### New Features

1. **English-First Labels** 🌍
   - All boundary popups show English names prominently
   - Arabic names displayed in smaller gray text beside English
   - Format: `RegionName (العربية)`
   - Emirate name shown for sub-emirate regions

2. **Toggle School Pins** 📍
   - New "Hide Pins" / "Show Pins" button in Display Options
   - Allows viewing boundaries without school markers cluttering the view
   - Useful for analyzing geographic boundaries alone
   - Button state persists during map interactions

3. **Emirates Overlay on Municipalities** 🗺️
   - When viewing detailed municipalities (195 regions), Emirates boundaries appear as thick black borders
   - Helps maintain geographic context when zoomed into detailed regions
   - Emirates layer is non-interactive (doesn't capture clicks)
   - Automatically appears/disappears when switching boundary types

### Data Sources Updated

- **Emirates (ADM1)**: Now using GADM 4.1 instead of geoBoundaries
- **Municipalities (ADM2)**: Continues using GADM 4.1
- Both files downloaded from: https://geodata.ucdavis.edu/gadm/gadm4.1/

### File Changes

**Modified Files:**
- `app.js` - Fixed toggle logic, updated boundary sources, added Emirates overlay
- `index.html` - Updated button initial text
- `download_boundaries.py` - Added ADM1 GADM download

**New Files:**
- `boundaries/uae_adm1_gadm.geojson` - GADM Emirates boundaries (replaces geoBoundaries version)
- `check_adm1.py` - Utility script to inspect boundary data

**Deprecated Files** (kept for reference):
- `boundaries/uae_emirates_adm1.geojson` - Old geoBoundaries version
- `boundaries/uae_emirates_simple.geojson` - Original placeholder
- `boundaries/abu_dhabi_regions_simple.geojson` - Original placeholder

### Technical Details

**Boundary Alignment Fix:**
The misalignment was caused by using boundary data from two different sources:
- geoBoundaries uses different simplification algorithms and coordinate precision
- GADM provides consistent boundaries across all administrative levels
- Solution: Use GADM for both ADM1 and ADM2 levels

**Toggle Button Logic:**
```javascript
// Corrected logic
if (schoolPinsVisible) {
    map.addLayer(schoolMarkers);
    toggleBtn.textContent = 'Hide Pins';  // Show "Hide" when visible
} else {
    map.removeLayer(schoolMarkers);
    toggleBtn.textContent = 'Show Pins';  // Show "Show" when hidden
}
```

### Testing Checklist

- [x] Toggle pins button shows correct text
- [x] Toggle pins button hides/shows markers correctly
- [x] Emirates boundaries align with municipalities
- [x] English labels appear on all boundaries
- [x] Arabic text displays correctly
- [x] Emirates overlay appears only for municipalities view
- [x] Emirates overlay is non-interactive
- [x] All 7 emirates load correctly
- [x] All 195 municipalities load correctly

### Known Limitations

1. **File Size**: GADM files are larger than geoBoundaries (better detail but slower load)
   - ADM1: ~400 KB
   - ADM2: ~8 MB
   
2. **Mobile Performance**: May be slower on mobile devices due to rendering 195 detailed polygons

3. **Browser Compatibility**: Tested on Chrome, Firefox, Edge, Safari (latest versions)

### Future Enhancements

- [ ] Add loading spinner for boundary data
- [ ] Cache boundary data in browser localStorage
- [ ] Add option to simplify boundaries for faster rendering
- [ ] Add search functionality for regions
- [ ] Add print-friendly view

---

**Version**: 2.1  
**Last Updated**: November 11, 2025  
**Status**: Production Ready ✅
