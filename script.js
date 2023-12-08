function mul(f1, s1) {
  // Multiply the first input by 2
  let multipliedResult = f1 * 2;

  // Add the second input to the multiplied result
  let finalResult = multipliedResult + parseInt(s1, 10);

  return finalResult;
}

let f1 = prompt("Enter the first input");
let s1 = prompt("Enter the second input");

alert("The final result is: " + mul(Number(f1), s1));
