function fibonacci(n, memo={}) {
    if (memo[n] !== undefined) return memo[n]
    if (n < 1) return 0
    if (n <= 2) return 1
    const res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    memo[n] = res
    return res
}

fibonacci(3)