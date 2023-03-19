"""
    zip_data_clean.py aims to clean the files provided in the below link
    (https://simplemaps.com/data/us-zips) such that the output csv contains
    three columns: zip code, lat, and lng.

"""

import pandas as pd
import numpy as np

# import file
df_zip = pd.read_csv('data/simplemaps_uszips_basicv1/uszips.csv')

# isolate three columns
df_zip = df_zip[['zip', 'lat', 'lng', 'state_name']]

# set type of zip code column as string
df_zip['zip'] = df_zip['zip'].astype('string')

# if zip code is less than 5 characters long, add zeroes to the start
# code from https://stackoverflow.com/questions/33243763/pandas-add-leading-0-to-string-values-so-all-values-are-equal-len
df_zip['zip'] = df_zip['zip'].apply(lambda x: str(x).zfill(5))

# set new index
df_zip = df_zip.set_index('zip')

# export to csv
df_zip.to_csv('data/zipoutput.csv')