// Write a program that takes an integer and outputs the string representation of numbers from 1 to n (the input integer).

// For multiples of 3 it should output “Fizz” instead of the number. For the multiples of 5 output “Buzz” For numbers that are multiples of both 3 and 5 output “FizzBuzz”




function fizzBuzz(num) {
    let counter = 1; 
    
    while (counter < num) {
        if (counter % 3 === 0 && counter % 5 === 0){
            console.log("FizzBuzz");
        } else if (counter % 3 === 0){
            console.log("Fizz");
        } else if (counter % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(counter);
        }
        counter ++;
    }
}

console.log(fizzBuzz(16));