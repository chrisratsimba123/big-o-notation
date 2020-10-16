// Approach #1

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i
//     }
    // Because this is in a loop, this has 'n' additions and 'n' assignments
//     return total
// }

// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Approach #2

// function addUpTo(n) {
//     // Only 3 operations here
//     return n * (n + 1) / 2
// }

// let time1 = performance.now()
// addUpTo(1000000000)
// let time2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

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

// Because this is a nested loop, this is an example of O(n^2)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i,j)
        }
    }
}

// printAllPairs(5)

// Example of O(n) - linear
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

// Example of O(1) - constant as the loop's runtime will be the same if n > 5
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5,n); i++) {
        console.log(i)
    }
}

// Example of O(1) in terms of spatial complexity, as regardless of how big or less n is, there will only be 2 variable assignments in this algorithm
function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// Example of O(n) in terms of spatial complexity, as the new array gets bigger depending on n itself
function double(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(2 * arr[i])
    }
    return newArray
}

