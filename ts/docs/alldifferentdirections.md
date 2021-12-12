# alldifferentdirections

From each person direction input, calculate the final point by

1) Mark the starting point `x`, `y`, and initial direction is `0` degree

2) `start` or `turn` add the degree.

3) `walk` moves `x` via `cos x distance` and `y` via `sin x distance` (Need to convert degree to radian)

4) When all instructions are finished, we get the final point for each person.

Get the average point, from all final point, by averaging `x` and `y` of points.

The worst distance is the max distance between average point and each person final points.
