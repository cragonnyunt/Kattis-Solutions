# artichoke

To solve in brute-force way, we need to calculate decline between each point and its subsequent points, and selecting the max decline from every point. But this is too brute force way and may result in time-limit exceeded. 

```
k - need to calculate between prices

1 - [2,3,4,5,6,7,8,9,10]
2 - [3,4,5,6,7,8,9,10]
3 - [4,5,6,7,8,9,10]
4 - [5,6,7,8,9,10]
5 - [6,7,8,9,10]
6 - [7,8,9,10]
7 - [8,9,10]
8 - [9,10]
9 - [10]
10 - []
```

Instead, we only select local max (prevMax) in solution, to mark previously maximum price from current point. We replace prevMax when we found a new price has higher value than is. Meanwhile, for each price being lower than prevMax, we need to calculate decline between its own price and prevMax, and replace maxDecline if necessary.

```
k - need to calculate between prices

1 - []
2 - [1]
3 - []
4 - []
5 - [4]
6 - [4]
7 - [4]
8 - [4]
9 - []
10 - [9]
```
