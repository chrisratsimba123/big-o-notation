function charCount(str) {
    // Return an object with keys that are alphanumeric characters in the string; values are the counts for each letter
    let result = {}
    // Loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // If the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++
        } 
        // If the char is a number/letter AND is not in object, and it to object and set value to 1
        else {
            result[char] = 1
        }
    }
        // If char is something else (space, period, etc.) don't do anything
    // Return object at end
    return result
}

charCount("christopher")