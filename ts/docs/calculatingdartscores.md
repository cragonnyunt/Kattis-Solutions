# calculatingdartscores

First we prepare the combination of normal scores in each area, and the combination of multipliers for each 3 rings.

```ts
// the combination of multipliers for each 3 rings
[
    [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
    [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
    [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
    [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
    [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
    [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
    [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
    [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
    [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
]
```
```ts
// the combination of normal scores in each area
[
  [ 0, 0, 0 ],  [ 0, 0, 1 ],  [ 0, 0, 2 ],  [ 0, 0, 3 ],  [ 0, 0, 4 ],
  [ 0, 0, 5 ],  [ 0, 0, 6 ],  [ 0, 0, 7 ],  [ 0, 0, 8 ],  [ 0, 0, 9 ],
  [ 0, 0, 10 ], [ 0, 0, 11 ], [ 0, 0, 12 ], [ 0, 0, 13 ], [ 0, 0, 14 ],
  [ 0, 0, 15 ], [ 0, 0, 16 ], [ 0, 0, 17 ], [ 0, 0, 18 ], [ 0, 0, 19 ],
  [ 0, 0, 20 ], [ 0, 1, 0 ],  [ 0, 1, 1 ],  [ 0, 1, 2 ],  [ 0, 1, 3 ],
  ... 9161 more items
]
```

With each score and multiplier combination, we can calculate the final dart score, and store it in `darts` array. Indexes without calculated value are marked as `impossible`.
