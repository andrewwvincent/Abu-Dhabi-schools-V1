import json

with open('boundaries/uae_adm1_gadm.geojson', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total features: {len(data['features'])}")
print("\nEmirates:")
for f in data['features']:
    print(f"  - {f['properties']['NAME_1']}")
