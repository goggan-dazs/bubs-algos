let string = "odec";
let indices = [1, 2, 0, 3];
function wordScramble(string, inputArr) {
     let stringArr = string.split(""); //creat a new array
     for (let i = 0; i<inputArr.length; i++) {
          for(let j = 0; j < inputArr.length; j++) {
               if (inputArr[j] > inputArr[j + 1]) {
                    [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]] // swapping it for numbers
                    [stringArr[j], stringArr[j+1]] = [stringArr[j+1], stringArr[j]] //it's for the return // for letter
               
               
               
               
               }
          }
          
     return stringArr.join('')
}

}
console.log(wordScramble(string, indices)) 
//strig and indices for input