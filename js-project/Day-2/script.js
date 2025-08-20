//1. Enter electricity unit and calculate amount to pay
//For first 50 units, Rs: 1/unit
//For next 100 units, 2/unit
//For next 100 units, 3/ units
//For units above 250, 4/units      
//For all bills above 150 units additional surcharge of 20%  of total bill amount is added.

let unit = 200;
let rate = 0;

if(unit <= 50){
    amount = unit *1;
}else if(unit <= 150){
    amount = (50 * 1) + (unit - 50) * 2;
}else if(unit <=250){
    amount = (50 * 1) + (100 *2 )+ (unit - 150) * 3;
}else{
    amount = (50 * 1) + (100 *2 )+(150 * 3) + (unit - 250) * 4;
}

if(amount > 150){
    amount = amount * 0.2;
}

console.log("Unit Consume: ", unit);
console.log("Total amount : ", amount);

document.write("<h4>1.Unit Consume: ", unit + "</h4>");
document.write('<h4>1.Total amount: ', amount + '</h4>');

//2. Write a JAVASCRIPT Program to print season according user input using switch case. (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)

let month = 5;

switch(true){
    case (month >=1 && month <=4):
        console.log("1.Winter");
        document.write("<h4>1.Season : Winter </h4>");
        break;
    case (month >=5 && month <=8):
        console.log("2.Summer");
        document.write("<h4>2.Season : Summer </h4>");
        break;
    case (month >=9 && month <=12):
        console.log("3.Moonson");
        document.write("<h4>3.Season : Moonson </h4>");
        break;
    default:
        console.log("Invalid season");
        document.write("<h4>4.Invalid season </h4>");
}

//3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if. (I = PRN/100) Principal Amount (P)
//Interest Rate 
//No. of Years (N)
//(if 3>N<=5 then R is 3 | if 5>N<=8 then R is 5 | if 8>N<=12 then R is 12 | else R is 15)

let p = 7000;
let n = 10;
let r = 0;

if(n > 3 && n<=5){
    r = 3;
}else if( n <5 && n <= 8){
    r = 5;
}else if(n > 8 && n<= 12){
    r = 12;
}else{
    r = 15;
}

let intrest = (p * n * r ) /100;
console.log("Total Intrest is: Rs.", intrest);
document.write('<h4>Total Intrest is: Rs.', intrest)

//4. Write a JAVASCRIPT Program to check Voting Eligibility.
 
let age = 45;

if(age > 18){
    console.log("You are aligible for Voting...");
    document.write('<h4> You are aligible for Voting...</h4>');
}else{
    console.log("You are not aligible for the voting..");
    document.write('<h4> You are not aligible for the voting..</h4>');
}

//5.Write a JAVASCRIPT Program to Classify Age Group.

let ageGroup = 5;

if(ageGroup < 0){
    console.log("Invalid age :Age cannot be Nagative");
    document.write('<h4> Invalid age :Age cannot be Nagative'+'</h4>');
}else if(ageGroup < 13){
    console.log("CHild");
    document.write('<h4>Age Group : Child'+'</h4>');
}else if(ageGroup < 18){
    console.log("Teeneger");
    document.write('<h4>Age Group : Teeneger'+'</h4>');
}else if(ageGroup < 60){
    console.log("Adult");
    document.write('<h4>Age Group : Adult'+'</h4>');
}else{
    console.log("Seniour Sitizen");
     document.write('<h4>Age Group : Seniour Sitizen'+'</h4>');
}
