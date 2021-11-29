# lektira

From the sample input 3,

```
anakonda
```

First, get the sub string by setting the offset 2 from the right (since we need to split the string by at least 2 positions)

```
anakon
```

Then, the lexicographically smallest word is `a`.

Since there are two `a`s, we need to find which makes the word lexicographically smallest by splitting substrings and reverse them.

```
a
ana
```

Splitting from first `a` index got more smallest word.

```
a,nakonda
```

We shall reverse the string `a`, and recursively input the remaining string `nakonda` from the start by lowering offset 1, and finally combine them all.
