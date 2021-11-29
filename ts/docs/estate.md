# estate

Houses numbers and their prices can be described as 

```
Price    - 0 2 3 4 5 6 7 8 9 10 11 ...
House No - 0 1 2 3 4 5 6 7 8  9 10 ...
```

Houses can only be bought consecutively together. For example, house #1 can be brought its alone, or with #1 and #2, or #1,#2 and #3 so on. Therefore, only certain amount of coin can used to buy house #1.

```
#1          2
#1+#3       2+3=5
#1...#4     2+3+4=9
#1...#5     2+3+4+5=14
#1...#6     2+3+4+5+6=20
...
```

Mapped into price house relationship,

```
House 1  -   *     *       *              *                 *
---
Price    - 0 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 ...
House No - 0 1 2 3 4 5 6 7 8  9 10 11 12 13 14 15 16 17 18 19 20 ...
```

For house #2,

```
#2          3
#2+#3       3+4=7
#2...#4     3+4+5=12
#2...#5     3+4+5+6=18
#2...#6     3+4+5+6+7=25
...
```

Mapped into price house relationship, again

```
House 2  -     *       *            *                 *
---
Price    - 0 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 ...
House No - 0 1 2 3 4 5 6 7 8  9 10 11 12 13 14 15 16 17 18 19 20 ...
```

By combining House #1 and House #2,

```
House 2  -     *       *            *                 *
House 1  -   *     *       *              *                 *
---
Price    - 0 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 ...
House No - 0 1 2 3 4 5 6 7 8  9 10 11 12 13 14 15 16 17 18 19 20 ...
```

If we extend the houses,

```
...
House 11  -                                  *
House 10  -                               *
House 9   -                            *                                *
House 8   -                         *                             *
House 7   -                      *                          *
House 6   -                   *                       *
House 5   -                *                    *                       *
House 4   -             *                 *                    *
House 3   -          *              *                 *
House 2   -       *           *              *                 *
House 1   -    *        *           *              *                 *
---                                                             
Price     - 0 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 ...
House No  - 0 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 ...
```

For each price, the number of available options to buy houses are the total points for the price.
