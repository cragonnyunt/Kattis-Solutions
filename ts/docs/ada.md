# ada

We solved the problem by recursively reducing input array into difference between elements.

```
3       6       9       12      15  
    3       3       3       3
```

We can stop finding the difference when all of the differences are the same. 

```
9       25      49
    16      24
        8
```

To calculate, the next value add the last values of the result differences + the last element of the sequence. 
