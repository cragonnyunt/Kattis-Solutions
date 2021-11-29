# busnumbers

First, we need to sort the bus numbers. Then get the differences between them. As long as consecutive `1` differences between them is more than 1, we skip all the numbers until there is different differences, or end of the bus numbers.

Lets, say (sorted) bus numbers are

```
138 139 141 142 143 174 175 180 181 182
```

The differences are
```
1 2 1 1 31 3 5 1 1
```

We evaluate by the following rules.

1. If the difference is not 1, we take the bus at the index.
2. If the difference is 1, but not at the end of differences and there are more `1s`, we take the bus at the index, (with `-` marking it is in reduced form) skip as long as the difference is 1. We can re-calculate the index by taking the last skipping index.
3. If the difference is 1, and at the end of differences and there are no more `1s`, we take the bus.
4. The last bus is taken, no matter what.

Finally the answer is.

```
138 139 141-143 174 175 180-182
```
