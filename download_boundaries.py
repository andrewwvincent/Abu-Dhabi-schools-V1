import urllib.request
import json

# Download GADM data for both ADM1 and ADM2 so they align properly
urls = {
    'boundaries/uae_adm1_gadm.geojson': 'https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_ARE_1.json',
    'boundaries/uae_adm2_gadm.geojson': 'https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_ARE_2.json'
}

for filename, url in urls.items():
    print(f"Downloading {filename}...")
    try:
        urllib.request.urlretrieve(url, filename)
        print(f"✓ Successfully downloaded {filename}")
    except Exception as e:
        print(f"✗ Failed to download {filename}: {e}")

print("\nDone!")
