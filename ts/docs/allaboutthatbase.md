# allaboutthatbase

_Recommended: See [aliennumbers](aliennumbers.md) before to understand about base conversion_

The main idea of the solution is to convert every number in the expression, lets say, in `X op Y = Z`, convert X, Y, and Z in any bases to base-10, and validate the result, for every bases. If no suitable bases are found, output `invalid` for the expression and if there are any valid bases, output them in ascending order.

First generate the mapping for each bases, and their respective digits in an array, which makes easier to re-use for repetitive input. _Note: base 1 only has `1` symbol, and base 36 is described as base `0`_

```ts
[
    '1' => ['1'],
    '2' => ['0','1'],
    '3' => ['0','1','2'],
    ...
    'z' => ['0','1'...,'y'],
    '0' => ['0','1'...,'z'],
]
```

To search correct bases for the expression, we need to find the minimum bases that might be the start of the search, that is the `max digit of all expression X, Y, Z` + 1. If the max digit is `1` and there is no `0`, we need to start searching from base-1 instead of base-2.

From now, we just need to loop through minimum base we found, to the maximum base 36. For each base n, we need to convert the number to base 10, assuming it is in the base-n. While other bases can use positional value for evaluation just like the solution in [aliennumbers](aliennumbers.md), base-1 is an exception, it use the length of string as the result.

_Note: for division, we found that using condition `Z = X / Y` did not get accepted and we don't want to use Math.floor or Math.ceil, we turn the expression to `Z * X = Y`._

Finally, we got the bases that validate the expression, if empty, no bases can solve this and output `invalid`.
