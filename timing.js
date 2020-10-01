// Approach #1

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Approach #2

function addUpTo(n) {
    return n * (n + 1) / 2
}

let time1 = performance.now()
addUpTo(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)