// Iteration 1: Names and Input

hacker1 = "Antoine"
hacker2 = "Steph"

console.log(`The driver’s name is ${hacker1}`)
console.log(`The navigator’s name is ${hacker2}`)

// Iteration 2: Conditionals

function longerName() {
    if (hacker1.length > hacker2.length){
      return (`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker2.length > hacker1.length){
      return (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else {
      return (`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }
  
  longerName()

// Iteration 3: Loops

// 3.1

let hacker1UpperCase = hacker1.split("").join(" ")
console.log(hacker1UpperCase.toUpperCase())

// 3.2

let hacker2Reverse = hacker2.split("").reverse().join("")
console.log(hacker2Reverse)

// 3.3

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver’s name goes first.")
}
else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}