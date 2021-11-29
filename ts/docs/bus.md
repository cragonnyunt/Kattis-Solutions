# bus

_Note: `half of a passenger` mean a person, we can't chop a person to leave the bus, by saying `no one was hurt during the trip`_

Lets n be the number of passengers arrived at k and k is the bus stops.

```
k   k-1     k-2     k-3     ... 5  4  3 2 1
n   n/2-1   n/4-3   n/8-7   ... 31 15 7 3 1
```

From above sequence, the passengers are `n/2^(x-1)-2^(x-1)` when the bus stops are `k-x`.

When x = 0, the passengers are 
```
n/2^-1 - 2^-1 = 2n -1
```
