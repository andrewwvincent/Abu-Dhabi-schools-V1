import json

# Inspect ADM2 data
with open('boundaries/uae_adm2_gadm.geojson', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total features: {len(data['features'])}")
print(f"\nType: {data['type']}")

# Get unique emirates
emirates = set()
regions_by_emirate = {}

for feature in data['features']:
    props = feature['properties']
    emirate = props.get('NAME_1', 'Unknown')
    region = props.get('NAME_2', 'Unknown')
    
    emirates.add(emirate)
    
    if emirate not in regions_by_emirate:
        regions_by_emirate[emirate] = []
    regions_by_emirate[emirate].append(region)

print(f"\nEmirates found: {len(emirates)}")
print("\nRegions by Emirate:")
for emirate in sorted(regions_by_emirate.keys()):
    print(f"\n{emirate} ({len(regions_by_emirate[emirate])} regions):")
    for region in sorted(regions_by_emirate[emirate]):
        print(f"  - {region}")

# Show sample properties
print("\n\nSample feature properties:")
if data['features']:
    print(json.dumps(data['features'][0]['properties'], indent=2))
