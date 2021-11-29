# completingthesquare

First we need to determine which point is the right angle of the three points. By Pythagorean theorem, the distance square of hypotenuse (opposite side of right angle) is equal to the sum of the squares of others. 

Lets, say there are three points, `A`, `B` and `C`. And `A` is the right angle point.

Then, the mid point `M` is between `B` and `C`, thus.

```ts
M = {
    x: (B.x + C.x) / 2,
    y: (B.y + C.y) / 2
}
```

The fourth point (`pt`) is the distance from `M` with addition to `M` and `A` distance. (i.e `M` + (`M` - `A`) and 2`M` - `A`)

```ts
pt = {
    x: 2 * M.x - A.x,
    y: 2 * M.y - A.y
}
```

By substituting original values in `M`

```ts
pt = {
    x: B.x + C.x - A.x,
    y: B.y + C.y - A.y
}
```
