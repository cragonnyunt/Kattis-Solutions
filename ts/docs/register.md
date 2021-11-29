# register

Eight integers store the number by positional value. Instead of storing by equal number, it stores by increasing prime numbers. 

```
Each value in register = number * previous register max value
```

We need to calculate from register v2 as the base register, thus the multipliers for all registers we can get is 

```
[ 1, 2, 6, 30, 210, 2310, 30030, 510510 ]
```

The maximum number the computer can store (from input 3) is `9699689`.

The number that can safely store = 9699689 - number stored in register
