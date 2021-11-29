# friday

We label the days of week from 0 - Sunday to 6 - Saturday. 

```
0   1   2   3   4   5   6
Sun Mon Tue Web Thu Fri Sat
```

For each month, we only interested in starting day of week and ending day of week. Then we could carry this month end as the start of next month, and so on.

```
end = (start + day) % 7

start = end
```

For month with Friday 13th, start = 0 (Sunday) and days in the month >= 13

```
Sun Mon Tue Web Thu Fri Sat
---
  1   2   3   4   5   6   7
  8   9  10  11  12  13  14
...
```
