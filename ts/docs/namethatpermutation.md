# namethatpermutation

Consider for simple cases,

1. For permutation only with 1, all that permutation can be 1.

2. For k-th permutation, if k=0, the result is 1...n. If k=1, only last two would be swapped from k=0 result.

3. Lets consider any `n` and `k` values.

Lets suppose we got the initial permutation list, [1...n]

From the example,

<table>
    <thead>
        <tr>
            <th>k</th>
            <th colspan=4>Permutation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td rowspan=6>1</td>
            <td rowspan=2>2</td>
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>1</td>
            <td>4</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2</td>
            <td rowspan=2>3</td>
            <td>2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>4</td>
            <td rowspan=2>4</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>5</td>
            <td>3</td>
            <td>2</td>
        </tr>
        <tr>
            <td>6</td>
            <td rowspan=6>2</td>
            <td rowspan=2>1</td>
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>7</td>
            <td>4</td>
            <td>3</td>
        </tr>
        <tr>
            <td>8</td>
            <td rowspan=2>3</td>
            <td>1</td>
            <td>4</td>
        </tr>
        <tr>
            <td>9</td>
            <td>4</td>
            <td>1</td>
        </tr>
        <tr>
            <td>10</td>
            <td rowspan=2>4</td>
            <td>1</td>
            <td>3</td>
        </tr>
        <tr>
            <td>11</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>12</td>
            <td rowspan=6>3</td>
            <td rowspan=2>1</td>
            <td>2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>13</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>14</td>
            <td rowspan=2>2</td>
            <td>1</td>
            <td>4</td>
        </tr>
        <tr>
            <td>15</td>
            <td>4</td>
            <td>1</td>
        </tr>
        <tr>
            <td>16</td>
            <td rowspan=2>4</td>
            <td>2</td>
            <td>1</td>
        </tr>
        <tr>
            <td>17</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>18</td>
            <td rowspan=6>4</td>
            <td rowspan=2>1</td>
            <td>3</td>
            <td>2</td>
        </tr>
        <tr>
            <td>19</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>20</td>
            <td rowspan=2>2</td>
            <td>1</td>
            <td>3</td>
        </tr>
        <tr>
            <td>21</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>22</td>
            <td rowspan=2>3</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>23</td>
            <td>2</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

Since `0 <= k <= n!-1`, `k` should be

```
k = multiplier x (n-1)! + remainder

Note: remainder must be less than (n-1)!
```

The multiplier will be the index from the permutation list, that is going to be printed out first.

Since the number is already printed, it should be removed from the permutation list, to prevent repeated being printed.

For the next index, the remainder should be

```
remainder = new_multiplier x (n-2)! + new_remainder
```

The next number index from list is `new_multiplier`. We can recursively calculate and print out all numbers from initial permutation list. 
