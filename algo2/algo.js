// Task 1
function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }


// Task 2

const age = parseInt(prompt("Enter your age: "));


let price;
switch (true) {
  case age <= 12:
    price = 10;
    break;
  case age >= 13 && age <= 17:
    price = 15;
    break;
  case age >= 18:
    price = 20;
    break;
  default:
    alert("Invalid age!");
    price = null;
}


if (price !== null) {
  alert(`The price of the movie ticket is $${price}.`);
}

// Task 3
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(5)); 
console.log(fibonacci(8)); 
console.log(fibonacci(13)); 

// Task 4
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / power(base, -exponent);
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3)); 
console.log(power(3, 4)); 
console.log(power(4, -2));