// ✅ Solution 1: Using Built-in Methods

function reverseString1(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString1("hello"))


// ✅ Solution 2: Using Loop

function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseString2("hello"));


// ✅ Solution 3: Reverse user input

let input = prompt("Enter a string")

let reversedInput = input.split("").reverse().join("");

// console.log("Reversed String:", reversedInput);
