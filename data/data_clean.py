"""
    data_clean.py aims to clean the files provided in the below link
    (https://www.fns.usda.gov/snap/retailer-locator) such that the output
    csv is small enough to be uploaded to github (<100mb).

"""

import pandas as pd
import numpy as np

# import file
df_snap = pd.read_csv('data/snapdata.csv')

# replace empty spaces w/ NaN
df_snap = df_snap.replace(r'^\s*$', np.nan, regex=True)

# isolate columns with no end date (continued SNAP program)
df_snap = df_snap[df_snap['End Date'].isnull()]

# obtain necessary columns
df_snap = df_snap[['Store Name', 'Store Type', 'Street Number', 'Street Name',
                   'Additional Address', 'City', 'State', 'Zip Code',
                   'County', 'Latitude', 'Longitude']]

# export to csv
df_snap.to_csv('data/finaloutput.csv')