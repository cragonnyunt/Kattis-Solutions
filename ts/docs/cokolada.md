# cokolada

Since the bars from factory are in size of power of 2, each sample can be constructed by its `1`s position in binary form.

```
6 = 110
  = 4 + 2

7 = 111
  = 4 + 2 + 1

5 = 101
  = 4 + 1

44 = 101100
   = 32 + 8 + 4
```

When the sample size is the power of 2, no breaks are needed and the bar size is exactly the same as the sample size.

For other sizes, the required number of breaks are as long as the index of 1 exists from the left (i.e. the last index of `1` + 1). And the bar size is the smallest power of 2 larger than the sample size.
