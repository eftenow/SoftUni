import re

site = input()
site_reg = r"www.[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[a-z]+)+"

while True:
    if site:
        valid_sites = re.finditer(site_reg, site)
        for valid_site in valid_sites:
            print(valid_site.group())
        site = input()
    else:
        break
