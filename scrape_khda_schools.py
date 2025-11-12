"""
KHDA Dubai Schools Scraper
Extracts school information and tuition fees from KHDA website
"""

import requests
from bs4 import BeautifulSoup
import csv
import time
import re
from urllib.parse import urljoin

# Base URL
BASE_URL = "https://web.khda.gov.ae"
SCHOOLS_URL = "https://web.khda.gov.ae/en/Education-Directory/Schools"

def get_school_listings():
    """Get all school listings from the main page"""
    print("Fetching school listings...")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(SCHOOLS_URL, headers=headers, timeout=30)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        schools = []
        
        # Find all school links - they contain "School-Details?Id="
        school_links = soup.find_all('a', href=re.compile(r'School-Details\?Id='))
        
        print(f"Found {len(school_links)} school links")
        
        # Extract unique school URLs and names
        seen_ids = set()
        exclude_texts = ['More details about this school', 'Academic Calendar', 'Fees Fact Sheet', 'Summary Report', '']
        
        for link in school_links:
            href = link.get('href')
            school_name = link.get_text(strip=True)
            
            # Skip excluded link texts
            if school_name in exclude_texts:
                continue
            
            if href and 'School-Details?Id=' in href:
                # Extract school ID to avoid duplicates
                match = re.search(r'Id=(\d+)', href)
                if match:
                    school_id = match.group(1)
                    if school_id not in seen_ids and school_name:
                        seen_ids.add(school_id)
                        full_url = urljoin(BASE_URL, href)
                        
                        schools.append({
                            'id': school_id,
                            'name': school_name,
                            'url': full_url
                        })
                        print(f"  Added: {school_name} (ID: {school_id})")
        
        print(f"Found {len(schools)} unique schools")
        return schools
        
    except Exception as e:
        print(f"Error fetching school listings: {e}")
        return []

def get_school_details(school_url, school_name):
    """Get detailed information for a specific school"""
    print(f"  Fetching details for: {school_name}")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    details = {
        'curriculum': 'N/A',
        'rating': 'N/A',
        'location': 'N/A',
        'phone': 'N/A',
        'email': 'N/A',
        'website': 'N/A',
        'tuition_range': 'N/A',
        'min_tuition': None,
        'max_tuition': None
    }
    
    try:
        response = requests.get(school_url, headers=headers, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract rating
        rating_elem = soup.find(text=re.compile(r'Overall Rating'))
        if rating_elem:
            rating_parent = rating_elem.find_parent()
            if rating_parent:
                rating_text = rating_parent.get_text(strip=True)
                match = re.search(r'(Outstanding|Very good|Good|Acceptable|Weak)', rating_text, re.IGNORECASE)
                if match:
                    details['rating'] = match.group(1)
        
        # Extract curriculum
        curriculum_elem = soup.find(text=re.compile(r'Curriculum'))
        if curriculum_elem:
            curr_parent = curriculum_elem.find_parent()
            if curr_parent:
                next_elem = curr_parent.find_next_sibling()
                if next_elem:
                    details['curriculum'] = next_elem.get_text(strip=True)
        
        # Extract location/area
        location_elem = soup.find(text=re.compile(r'Location|Area'))
        if location_elem:
            loc_parent = location_elem.find_parent()
            if loc_parent:
                next_elem = loc_parent.find_next_sibling()
                if next_elem:
                    details['location'] = next_elem.get_text(strip=True)
        
        # Extract contact info
        phone_elem = soup.find(text=re.compile(r'Phone'))
        if phone_elem:
            phone_parent = phone_elem.find_parent()
            if phone_parent:
                next_elem = phone_parent.find_next_sibling()
                if next_elem:
                    details['phone'] = next_elem.get_text(strip=True)
        
        email_elem = soup.find(text=re.compile(r'Email'))
        if email_elem:
            email_parent = email_elem.find_parent()
            if email_parent:
                next_elem = email_parent.find_next_sibling()
                if next_elem:
                    details['email'] = next_elem.get_text(strip=True)
        
        # Extract tuition fees - look for fee tables or fee information
        # Try to find fee-related text
        fee_text = soup.get_text()
        
        # Look for AED amounts
        aed_matches = re.findall(r'AED\s*([\d,]+)', fee_text)
        if aed_matches:
            # Convert to numbers
            fees = []
            for match in aed_matches:
                try:
                    fee = int(match.replace(',', ''))
                    # Filter reasonable tuition amounts (between 5,000 and 150,000 AED)
                    if 5000 <= fee <= 150000:
                        fees.append(fee)
                except ValueError:
                    pass
            
            if fees:
                details['min_tuition'] = min(fees)
                details['max_tuition'] = max(fees)
                details['tuition_range'] = f"AED {details['min_tuition']:,} - AED {details['max_tuition']:,}"
        
        # Small delay to be respectful
        time.sleep(0.3)
        
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            print(f"    ⚠ School page not found (404)")
        else:
            print(f"    ⚠ HTTP Error: {e}")
    except requests.exceptions.Timeout:
        print(f"    ⚠ Request timeout")
    except requests.exceptions.RequestException as e:
        print(f"    ⚠ Request error: {e}")
    except KeyboardInterrupt:
        raise
    except Exception as e:
        print(f"    ⚠ Error: {e}")
    
    return details

def scrape_all_schools(output_file='dubai_khda_schools.csv', max_schools=None):
    """Main function to scrape all schools"""
    print("=" * 60)
    print("KHDA Dubai Schools Scraper")
    print("=" * 60)
    
    # Get all school listings
    schools = get_school_listings()
    
    if not schools:
        print("No schools found!")
        return
    
    # Limit if specified
    if max_schools:
        schools = schools[:max_schools]
        print(f"\nLimiting to first {max_schools} schools for testing")
    
    print(f"\nScraping details for {len(schools)} schools...")
    print("-" * 60)
    
    # Scrape each school
    all_data = []
    for i, school in enumerate(schools, 1):
        print(f"\n[{i}/{len(schools)}] {school['name']}")
        
        details = get_school_details(school['url'], school['name'])
        
        school_data = {
            'school_id': school['id'],
            'name': school['name'],
            'curriculum': details['curriculum'],
            'rating': details['rating'],
            'location': details['location'],
            'phone': details['phone'],
            'email': details['email'],
            'tuition_range': details['tuition_range'],
            'min_tuition': details['min_tuition'],
            'max_tuition': details['max_tuition'],
            'url': school['url']
        }
        
        all_data.append(school_data)
        
        # Log progress
        print(f"  ✓ Curriculum: {details['curriculum']}")
        print(f"  ✓ Rating: {details['rating']}")
        print(f"  ✓ Location: {details['location']}")
        print(f"  ✓ Tuition: {details['tuition_range']}")
    
    # Save to CSV
    print("\n" + "=" * 60)
    print(f"Saving {len(all_data)} schools to {output_file}...")
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['school_id', 'name', 'curriculum', 'rating', 'location', 
                     'phone', 'email', 'tuition_range', 'min_tuition', 'max_tuition', 'url']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_data)
    
    print(f"✓ Successfully saved {len(all_data)} schools!")
    
    # Print summary statistics
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total schools scraped: {len(all_data)}")
    
    schools_with_fees = [s for s in all_data if s['min_tuition'] is not None]
    if schools_with_fees:
        avg_min = sum(s['min_tuition'] for s in schools_with_fees) / len(schools_with_fees)
        avg_max = sum(s['max_tuition'] for s in schools_with_fees) / len(schools_with_fees)
        print(f"Schools with tuition data: {len(schools_with_fees)}")
        print(f"Average tuition range: AED {avg_min:,.0f} - AED {avg_max:,.0f}")
    
    # Count by rating
    ratings = {}
    for school in all_data:
        rating = school['rating']
        ratings[rating] = ratings.get(rating, 0) + 1
    
    print("\nSchools by rating:")
    for rating, count in sorted(ratings.items(), key=lambda x: x[1], reverse=True):
        print(f"  {rating}: {count}")

if __name__ == '__main__':
    # Test with first 10 schools
    # scrape_all_schools(output_file='dubai_khda_schools_test.csv', max_schools=10)
    
    # Scrape all schools
    scrape_all_schools(output_file='dubai_khda_schools.csv')
