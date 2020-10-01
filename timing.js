// Approach #1

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    // Because this is in a loop, this has 'n' additions and 'n' assignments
    return total
}

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Approach #2

function addUpTo(n) {
    // Only 3 operations here
    return n * (n + 1) / 2
}

let time1 = performance.now()
addUpTo(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Counting Function

function countUpAndDown(n) {
    console.log("Going up!")
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log("At the top! \nGoing down...")
    for (let j = n - 1; j >= 0; j--) {
        console.log(j)
    }
    console.log("Back down. Bye!")
}

