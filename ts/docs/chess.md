# chess

Fist map input chess position into array position `(x, y)` as follow.
`x` is column position, `y` is row position

```
| y-x | 0 | 1 | 2 | 3 | 4 | ... | 7 |
|-----|---|---|---|---|---|-----|---|
| 0   |   |   |   |   |   |     |   |
| 1   |   |   |   |   |   |     |   |
| 2   |   |   |   |   |   |     |   |
| 3   |   |   |   |   |   |     |   |
| 4   |   |   |   |   |   |     |   |
| ... |   |   |   |   |   |     |   |
| 7   |   |   |   |   |   |     |   |
```

`x+y` sums for every cells,

```
|     | 0   | 1   | 2   | 3   | 4   | ... | 7   |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0   | 0   | 1   | 2   | 3   | 4   | ... | 7   |
| 1   | 1   | 2   | 3   | 4   | 5   | ... | 8   |
| 2   | 2   | 3   | 4   | 5   | 6   | ... | 9   |
| 3   | 3   | 4   | 5   | 6   | 7   | ... | 10  |
| 4   | 4   | 5   | 6   | 7   | 8   | ... | 11  |
| ... | ... | ... | ... | ... | ... | ... | ... |
| 7   | 7   | 8   | 9   | 10  | 11  | ... | 14  |
```

We can see that cells of even sum are reachable each other, and cells of odd sum are the same, too. If the sum (`x + y`) of the two cells are not the same (even or odd), they are not reachable.

To check if the cells are in the diagonal, their absolute `x` difference and `y` difference must be the same. 

If above two methods are not still satisfied, the two cells must be reachable by one cell in between them. Find all the diagonal cells of the input two cell, intersect them and use the first one.
