// A simple calculator using Java script

var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum,sub,mul,div,mod;

sum = num1 + num2;
document.write("Addition =" + sum + "<br>"); 

sub = num1 - num2;
document.write("Subtraction = " + sub + "<br>");

mul = num1 * num2;
document.write("multification = " + mul + "<br>");

div = num1 / num2;
document.write("Division = " + div + "<br>");

mod = num1 % num2;
document.write("modulus = " + mod);
