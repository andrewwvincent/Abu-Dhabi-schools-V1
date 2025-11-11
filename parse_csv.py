import csv
import json

schools = []

with open('ADEK - Private and Charter Schools.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Get the column names from the first row
        if 'Lat, Lon' in row and row['Lat, Lon']:
            lat_lon = row['Lat, Lon'].split(',')
            if len(lat_lon) == 2:
                try:
                    schools.append({
                        'name': row.get('name', '').strip(),
                        'school_type': row.get('school_type', '').strip(),
                        'curriculum_type': row.get('curriculum_type', '').strip(),
                        'address': row.get('Address', '').strip(),
                        'lat': float(lat_lon[0].strip()),
                        'lon': float(lat_lon[1].strip())
                    })
                except ValueError:
                    continue

with open('schools-data.js', 'w', encoding='utf-8') as f:
    f.write('const schoolsData = ')
    f.write(json.dumps(schools, indent=2, ensure_ascii=False))
    f.write(';')

print(f"Successfully parsed {len(schools)} schools")
