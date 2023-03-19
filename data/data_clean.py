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

# set zip code as string
df_snap['Zip Code'] = df_snap['Zip Code'].astype('string')

# if zip code is less than 5 characters long, add zeroes to the start
# code from https://stackoverflow.com/questions/33243763/pandas-add-leading-0-to-string-values-so-all-values-are-equal-len
df_snap['Zip Code'] = df_snap['Zip Code'].apply(lambda x: str(x).zfill(5))

# isolate columns with no end date (continued SNAP program)
df_snap = df_snap[df_snap['End Date'].isnull()]

# obtain necessary columns
df_snap = df_snap[['Store Name', 'Store Type', 'Street Number', 'Street Name',
                   'Additional Address', 'City', 'State', 'Zip Code',
                   'County', 'Latitude', 'Longitude']]

# remove whitespaces
df_snap = df_snap.replace(r"^ +| +$", r"", regex=True)

# set new index
df_snap = df_snap.set_index('Store Name')

# export to csv
df_snap.to_csv('data/finaloutput.csv')