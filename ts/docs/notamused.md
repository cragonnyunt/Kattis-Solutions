# notamused

To get the customer time spent in the park, 

```
time = end - start
     = -start + end
```

The customer can enter and exit multiple times a day

```
total_time = time1 + time2 + ...
           = (-start1 + end1) + (-start2 + end2) + ...
```

`Enter` timestamp got negative and `Exit` timestamp got positive, and sum them all.
And multiply by the charge $0.1
