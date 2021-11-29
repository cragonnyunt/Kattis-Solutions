# ACM

We are only interested the problems that are finally solved. Therefore, we reversed the input and loop.

```ts
solutions.reverse().forEach(solution => {
```

If the solution is accepted, we increase the time by the input and increase solution count, and mark the problem as solved.

```ts
if (solution.solved) {
  resolved.push(solution.problem)
  problemsSolved++
  totalTime += solution.time
}
```

If the solution is not accepted, but the problem has already been in the resolved list, we can increase the penalty time.

```ts
} else if (resolved.includes(solution.problem)) {
  totalTime += 20
}
```
