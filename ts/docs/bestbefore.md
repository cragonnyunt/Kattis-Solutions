# bestbefore

We first create custom Date class to validate the date and convert data to string.

Then, we sort the split input into three numbers and make permutation to guess the date. (Year goes min to max, month take higher value than day in the first round)

```
Day     Month   Year
---
max     mid     min
mid     max     min
max     min     mid
min     max     mid
mid     min     max
min     mid     max
```

We select the first valid date from the permutation. If not found, the date is illegal.
_Note: the ordering is important._
