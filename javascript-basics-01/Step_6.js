function divideAndShowRemainder() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
        var quotient = Math.floor(num1 / num2);
        var remainder = num1 % num2;  
        alert("The quotient of " + num1 + " divided by " + num2 + " is " + quotient + " with a remainder of " + remainder);
    } 