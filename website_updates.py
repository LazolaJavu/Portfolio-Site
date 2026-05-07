# read the python package version from the file
from datetime import datetime
import jinja2
# years and months from 01 November 2021 to today
start_date = datetime(2021, 11, 1)
end_date = datetime.now()
delta = end_date - start_date
years = delta.days // 365
months = (delta.days % 365) // 30
years_experience = f"{years} years, {months} months"
print(f"Years of experience: {years_experience}")

# render the datees in the index.html file in the same directory
template_loader = jinja2.FileSystemLoader(searchpath="./")
template_env = jinja2.Environment(loader=template_loader)
template = template_env.get_template("index.html")
output = template.render(years_experience=years_experience)
with open("index.html", "w") as f:
    f.write(output)
    



