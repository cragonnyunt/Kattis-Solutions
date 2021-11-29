# anagramcounting

First consider the number anagrams possible from words with distinct letters.

```
a       ->  a       ->  1
ab      ->  a-b     ->  2
            b-a
abc     ->  a-b-c   ->  6
             \
              c-b
            b-a-c
             \
              c-a
            c-a-b
             \
              b-a
abcd    ->  a-b-c-d ->  24
               \
                d-c
              c-b-d
               \
                d-b
              d-b-c
               \
                c-b
            b-a-c-d
               \
                d-c
              c...
              d...
            c...
            d...
```

With each n letter added, there is n places to insert the letter * previous (n-1) anagrams. So we can calculate.

[n] ->  ... ->  n!

The formula of permutation with repetition is

```
n! / n1!n2!...nk!
```

For any repeating set of n1 to nk elements count.

The output for this problem can be quite large (up to 101!), so we need to use `bigint` to calculate factorial numbers. 

