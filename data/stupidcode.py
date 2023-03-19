import pandas as pd

df_final = pd.read_csv('data/finaloutput.csv')

print(df_final['Store Type'].value_counts())