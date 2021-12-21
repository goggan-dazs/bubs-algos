// Given a string and an integer array indices of the same length. The strings will be shuffled such that the character at the i'n n'th position moves to indices[i] in the shuffled string. Return the shuffled string.



// string = “odce” 
//indices = [1, 2, 0, 3]
// Returns “code"

const restoreString = (string, indices) => {
    let result = '';

    for (let i = 0; i < indices.length; i++) {
        result += string[indices.indexOf(i)]
    }
    return result;
}
console.log(restoreString('sodce', [4, 1, 2, 0, 3 ]));