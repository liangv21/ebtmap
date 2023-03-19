# Project Overview

Link: https://liangv21.github.io/ebtmap/

Finding a website that compiles all necessary information about SNAP and EBT - where you can use it, who to contact if you have questions, and more - is difficult. While the USDA Food and Nutrition Service offers a website for locating nearby stores that accept SNAP/EBT and another website for more general information about these resources per state, there has yet to be a tool that combines all available resources together, resulting in a difficult navigation system for invididuals reliant on this program. 

SnapMap aims to resolve this issue by collecting all of this data and putting it into a single map for easy navigation. Provided a zip code, we can showcase all locations within that particular zip code that accepts SNAP/EBT, as well as provide links and phone numbers to governmental resources in case they need further assistance. Beyond the fundamental information of store name and address, we wanted to improve upon the navigation system by providing a Google link to the location for easier navigation through the tool of the user's choice. 

Through SnapMap, we hope to assist low-income individuals with finding the best supermarkets and resources for their SNAP/EBT card, therefore resulting in significant savings, easier outreach to assistance, and general convenience.

This project utilized the Leaflet and d3 libraries for map creating and csv parsing, respectively, and primarily focused on HTML, CSS, JavaScript, and Python. Our data sources are listed below:

- https://www.fns.usda.gov/snap/state-directory#snap-state-list-popup-content
- https://www.fns.usda.gov/snap/retailer/historicaldata
- https://simplemaps.com/data/us-zips
