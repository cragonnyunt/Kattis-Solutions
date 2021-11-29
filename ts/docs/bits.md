# bits

For every number we typed, the max number of 1 digits is recursively the maximum between of 1 digits of input and 1/10 of input and so on.

For example, the input is 9443201 and the function `get1s` is the number of 1 required to represent in base-2,

```
max(
    get1s(9443201), max(
        get1s(944320), max(
            get1s(94432), max(
                get1s(9443), max(
                    ...
                )
            )
        )
    )
)
```

Thus, we create a array to hold 250001 numbers (chosen the size as the optimal for time limit), and their 1 digits in base-2. Then, from 10 to the last of array, every cell is replaced by the maximum of its value and cell at their 1/10 index (to recursively calculate the max number of digits needed to store when typing one by one)

Finally, when input is less than the size of an array (250001 in the solution), output from the array. When the input is greater than that, we can recursively calculate by taking max between its 1 digits, and 1 digits of the 1/10 of the input. 
