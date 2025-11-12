import csv
import json

def parse_abudhabi_csv(filename, school_type):
    """Parse Abu Dhabi school CSV files."""
    schools = []
    
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                # Skip rows with missing coordinates
                if not row.get('latitude') or not row.get('longitude'):
                    continue
                
                lat = float(row['latitude'])
                lon = float(row['longitude'])
                
                # Get tuition fee (0 for Charter and Public schools)
                tuition_fee = 0
                if school_type == 'Private' and row.get('SCH_AVERAGE_TUITION_FEE'):
                    try:
                        tuition_fee = float(row['SCH_AVERAGE_TUITION_FEE'])
                    except (ValueError, TypeError):
                        tuition_fee = 0
                
                school = {
                    'name': row.get('SCH_NAME_EN', 'Unknown School'),
                    'school_type': school_type,
                    'curriculum_type': row.get('SCH_CURRICULUM_EN', 'N/A'),
                    'address': row.get('SCH_COMMUNITY', 'N/A'),
                    'lat': lat,
                    'lon': lon,
                    'tuition_fee': tuition_fee,
                    'enrollment': None,
                    'gender': row.get('SCH_GENDER_EN', 'N/A'),
                    'region': row.get('SCH_REGION_EN', 'N/A'),
                    'district': row.get('SCH_DISTRICT_EN', 'N/A'),
                    'phone': row.get('SCH_PHONE', 'N/A'),
                    'email': row.get('SCH_EMAIL_ADDRESS', 'N/A'),
                    'emirate': 'Abu Dhabi'
                }
                schools.append(school)
            except (ValueError, KeyError) as e:
                print(f"Skipping row in {filename}: {e}")
                continue
    
    return schools

def parse_dubai_csv(filename):
    """Parse Dubai private schools CSV file."""
    schools = []
    
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                # Skip rows with missing coordinates
                if not row.get('Latitude') or not row.get('Longitude'):
                    continue
                
                lat = float(row['Latitude'])
                lon = float(row['Longitude'])
                
                # Get tuition fee
                tuition_fee = 0
                if row.get('Average Tuition'):
                    try:
                        tuition_fee = float(row['Average Tuition'])
                    except (ValueError, TypeError):
                        tuition_fee = 0
                
                # Get enrollment
                enrollment = None
                if row.get('2023/24 Enrollments'):
                    try:
                        enrollment = int(row['2023/24 Enrollments'])
                    except (ValueError, TypeError):
                        enrollment = None
                
                school = {
                    'name': row.get('School Name', 'Unknown School'),
                    'school_type': 'Private',
                    'curriculum_type': row.get('Curriculum', 'N/A'),
                    'address': 'N/A',
                    'lat': lat,
                    'lon': lon,
                    'tuition_fee': tuition_fee,
                    'enrollment': enrollment,
                    'gender': 'N/A',
                    'region': 'Dubai',
                    'district': 'N/A',
                    'phone': 'N/A',
                    'email': 'N/A',
                    'emirate': 'Dubai',
                    'grades': row.get('Grades', 'N/A'),
                    'year_established': row.get('Year Established in Dubai', 'N/A')
                }
                schools.append(school)
            except (ValueError, KeyError) as e:
                print(f"Skipping row in {filename}: {e}")
                continue
    
    return schools

def main():
    all_schools = []
    
    # Parse Abu Dhabi Charter Schools
    print("Parsing Abu Dhabi Charter Schools...")
    charter_schools = parse_abudhabi_csv('education_CharterSchools.csv', 'Charter')
    all_schools.extend(charter_schools)
    print(f"  Found {len(charter_schools)} charter schools")
    
    # Parse Abu Dhabi Public Schools
    print("Parsing Abu Dhabi Public Schools...")
    public_schools = parse_abudhabi_csv('education_layer13_PublicSchools.csv', 'Public')
    all_schools.extend(public_schools)
    print(f"  Found {len(public_schools)} public schools")
    
    # Parse Abu Dhabi Private Schools
    print("Parsing Abu Dhabi Private Schools...")
    abudhabi_private = parse_abudhabi_csv('education_layer12_PrivateSchools.csv', 'Private')
    all_schools.extend(abudhabi_private)
    print(f"  Found {len(abudhabi_private)} Abu Dhabi private schools")
    
    # Parse Dubai Private Schools
    print("Parsing Dubai Private Schools...")
    dubai_private = parse_dubai_csv('Dubai_private_schools.csv')
    all_schools.extend(dubai_private)
    print(f"  Found {len(dubai_private)} Dubai private schools")
    
    print(f"\nTotal schools: {len(all_schools)}")
    
    # Write to JavaScript file
    with open('schools-data.js', 'w', encoding='utf-8') as f:
        f.write('const schoolsData = ')
        json.dump(all_schools, f, indent=2, ensure_ascii=False)
        f.write(';\n')
    
    print(f"Successfully wrote {len(all_schools)} schools to schools-data.js")
    
    # Print summary statistics
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total schools: {len(all_schools)}")
    
    # Count by type
    by_type = {}
    for school in all_schools:
        school_type = school['school_type']
        by_type[school_type] = by_type.get(school_type, 0) + 1
    
    print("\nSchools by type:")
    for school_type, count in sorted(by_type.items()):
        print(f"  {school_type}: {count}")
    
    # Count by emirate
    by_emirate = {}
    for school in all_schools:
        emirate = school['emirate']
        by_emirate[emirate] = by_emirate.get(emirate, 0) + 1
    
    print("\nSchools by emirate:")
    for emirate, count in sorted(by_emirate.items()):
        print(f"  {emirate}: {count}")
    
    # Tuition statistics
    schools_with_fees = [s for s in all_schools if s['tuition_fee'] and s['tuition_fee'] > 0]
    if schools_with_fees:
        avg_tuition = sum(s['tuition_fee'] for s in schools_with_fees) / len(schools_with_fees)
        max_tuition = max(s['tuition_fee'] for s in schools_with_fees)
        min_tuition = min(s['tuition_fee'] for s in schools_with_fees)
        print(f"\nTuition fee statistics ({len(schools_with_fees)} schools):")
        print(f"  Average: AED {avg_tuition:,.0f}")
        print(f"  Range: AED {min_tuition:,.0f} - AED {max_tuition:,.0f}")
    
    # Enrollment statistics
    schools_with_enrollment = [s for s in all_schools if s['enrollment'] is not None]
    if schools_with_enrollment:
        total_enrollment = sum(s['enrollment'] for s in schools_with_enrollment)
        avg_enrollment = total_enrollment / len(schools_with_enrollment)
        print(f"\nEnrollment statistics ({len(schools_with_enrollment)} schools):")
        print(f"  Total students: {total_enrollment:,}")
        print(f"  Average per school: {avg_enrollment:,.0f}")

if __name__ == '__main__':
    main()
