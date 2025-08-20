//1.Write a JavaScript program to find the area of a triangle.

const a = 3;
const b = 4;
const c = 5;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s-a)*(s-b)*(s-c));
document.write('<h2>' + "1)Area of triangle : " + area + '</h2>');

console.log("Area of triangle : "+ area);

//2.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

//1.celsius into fahrenheit
document.write('<h2>' + "2) Convert temperatures to and from Celsius, Fahrenheit" + '</h2>');
const celsius1 = 200;
const fahrenheit1 = (celsius1*1.8)+32;
console.log(celsius1+ " °c =" + fahrenheit1 + " °f ");
document.write('<h4>' + " Celsius into fahrenheit : " + celsius1+ " °c = " + fahrenheit1 + " °f "+'</h4>');

//2.fahrenheit into celsius 
const fahrenheit2 = 85;
const celsius2 = (fahrenheit2 - 32) * 0.55;
console.log(fahrenheit2+ " °f =" + celsius2 + " °c ");
document.write('<h4>' + " fahrenheit into celsius: " + fahrenheit2+ " °f = " + celsius2 + " °c "+ '</h4>');

//3.Write a JavaScript program to find the area of a rectangel.

var  l1 = 20;
var b1 = 38;
var ractangleArea = (l1 * b1);
console.log("Area of Ractagle is: " + ractangleArea);
document.write('<h2>'+ "3) Area of Rectangle : " + ractangleArea + '</h2>')

//4.Write a JavaScript program to find the area of a circle.

var radius = 23;
var circleArea = 3.14 * radius * radius;
console.log("Area of Circle is: " + circleArea);
document.write('<h2>'+ "4) Area of Circle is: " + circleArea  + '</h2>')

//5.Write a JavaScript program to calculate given formulas
//1) a² – b² = (a-b)(a+b)

var a1 = 10;
var b1 = 12;
var c1 = 23;
document.write('<h2>'+ "5) Formula: "+ '</h2>')

var formula1 = (a1 - b1)* (a1 + b1);
console.log("a² – b² = " + formula1);
document.write('<h3>' + "1.  a² – b² :  " + formula1 + '</h3>' )

//2)(a-b)² = a² – 2ab + b² 
var formula2 = (a1 * a1) - (2 * a1 * b1) + (b1 * b1);
console.log("(a-b)² = " + formula2 );
document.write('<h3>' + "2. (a-b)² :  " + formula2 + '</h3>' )


//3)(a+b+c)² = a²+b²+c²+2ab+2ac+2bc 
var formula3 = (a1 * a1) + (b1 * b1) + (c1 * c1) + 2*(a1 * b1) + 2*(a1 * c1)+ 2*(b1 * c1);
console.log("(a+b+c)² = " + formula3);
document.write('<h3>' + "2. (a+b+c)² :  " + formula3 + '</h3>' )

//4) (a-b-c)² = a²+b²+c²-2ab-2ac+2bc
var formula4 = (a1 * a1) + (b1 * b1) + (c1 * c1) - 2*(a1 * b1) - 2*(a1 * c1)+ 2*(b1 * c1);
console.log("(a+b+c)² = " + formula4);
document.write('<h3>' + "4. (a-b-c)² :  " + formula4 + '</h3>' )

//5)(a-b)³ = a³- 3a²b + 3ab² – b³ 
var formula5 = (a1 * a1 *a1) - 3*(a1 * a1 * b1) + 3*(a1 * b1 * b1) - (b1 * b1 * b1);
console.log("(a-b)³= " + formula5);
document.write('<h3>' + "5. (a-b)³ :  " + formula5 + '</h3>' )