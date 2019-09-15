import datetime as dt
import matplotlib.pyplot as plt
from matplotlib import style
import pandas as pd
import pandas_datareader.data as web
style.use('ggplot')
matplotlib inline
end=dt.datetime.now()
start = dt.datetime(end.year-1,end.month,end.day)
df = web.DataReader('TSLA','yahoo',start,end)
df.to_csv('TSLA.csv')
df = pd.read_csv('TSLA.csv',parse_dates=True,index_col=0)
#df.head()
df.head()
df[['High','Low','Open','Close']].plot()
