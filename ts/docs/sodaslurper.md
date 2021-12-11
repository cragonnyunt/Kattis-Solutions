# sodaslurper

First, combine the bottles Tim already had, and the empty bottle he found on street. (total `b`)

The needed empty bottles for recycling (`c`)

If `b < c`, he got no drink.

As long as `b >= c`, he exchange for one soda, then get the new empty bottle.

Let the total sodas, `s`

```ts
s = 0
while(b >= c) {
    b -= c - 1;
    s++;
}
```

From example input 1, 9 + 0 = 9 bottle, 3 recycled

```
b -= c - 1
9 -= 3 - 1
9 -= 2
```

By segmenting 9 / 2, we got the sodas counts, (bracket are considered count 1)

```
2 + 2 + 2 + (2 + 1)
```

From input 2,

```
1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + (1 + 1)
```

From above result, we can first remove the `c` from `b` to make soda count 1, then we divide the difference with `c - 1` to get other soda counts.

If we rewrite the above algorithm,

```ts
s = 1 + (b - c) / (c - 1)
```

By simplifying the expression,

```ts
s = (b - 1) / (c - 1)
```
