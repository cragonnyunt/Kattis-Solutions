# kolone

Simulating the first input from example.

```
Time    Ants

0       CBA DEF <-- first encounter
1       CBD AEF
2       CDB EAF
3       DCE BFA
4       DEC FBA
5       DEF CBA <-- completely pass here
6       DEF CBA
```

From above simulation, we can see that time from (total length - 1) and forward, the two ants group completely pass through each other.

If we only takes ant group 1, and mark group 2 as (x) since we are not interested right now.

```
Time    Ants

0       CBA xxx
1       CBx Axx
2       CxB xAx
3       xCx BxA
4       xxC xBA
5       xxx CBA
6       xxx CBA
```

Each ant position in n second, its position is increased (moved to right) by the difference between elapsed second(s) and its position from right. But it is not bigger than the terminal position when the two ants group completely pass through each other.

For ant group 2,

```
Time    Ants

0       xxx DEF
1       xxD xEF
2       xDB ExF
3       DxE xFx
4       DEx Fxx
5       DEF xxx
6       DEF xxx
```

The same goes for group 2, but instead of not being bigger, it is not smaller than the terminal position, in group 2.
