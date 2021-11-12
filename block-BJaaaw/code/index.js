// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Enter a Number"));
if( num % 2 === 0){
    alert("Number is Even");
}else{
    alert("Number is Odd");
}
   


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = Number(prompt("Enter first numbers"));
let numB = Number(prompt("Enter second number"));
if(numA > numB){
    alert(numA);
}else{
    alert(numB);
  }

// 3. Convert the above code using`?` terniary operator
let numA = Number(prompt("Enter first numbers"));
let numB = Number(prompt("Enter second number"));
numA > numB ?
 alert (numA)
 :
 alert (numB)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house_name = prompt("Enter house name");
if (house_name === "stark"){
  alert ("winter is coming");
} else if (house_name === "Lannister") {
  alert("A Lannister always pays his debt");
} else { alert("All men must die");}

// 5. Convert the above code using`?` terniary operator
let house_name = prompt("Enter house name");
house_name === "stark" ?
 alert ("winter is coming")
 :
 alert("A Lannister always pays his debt")


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month_name = prompt("Enter a Month");
switch(true) {
    case month_name == "1":
    alert(31);
    break;
      case month_name === "2":
    alert("28");
    break;
      case month_name === "3":
    alert("31");
    break;
      case month_name === "4":
    alert("30");
    break;
      case month_name === "5":
    alert("31");
    break;
      case month_name === "6":
    alert("30");
    break;
      case month_name === "7":
    alert("31");
    break;
      case month_name === "8":
    alert("31");
    break;
      case month_name === "9":
    alert("30");
    break;
      case month_name === "10":
    alert("31");
    break;
      case month_name === "11":
    alert("30");
    break;
     case month_name === "12":
    alert("31");
    break;
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter the salary amount"));
if (salary <= 20000){
    alert (salary - (salary * (10/100)));
} else if (salary <= 40000){
    alert (salary - (salary * (20/100)));
} else if (salary > 50000){
    alert (salary - (salary * (30/100)));
}  

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter your marks"));
if(marks > 100){
    alert ("Marks can't be greater than 100");
} else if( marks > 80 && marks < 100){
    alert ("Grade A");
} else if ( marks > 50 && marks < 80){
    alert ("Grade B");
} else if( marks > 30 && marks < 50){
    alert ("Grade C");
} else if (marks > 0){
    alert("Grade D");
}

// Switch method
let marks = Number(prompt("Enter your marks"));
switch (marks){
    case marks > 100:
    alert ("Grade A");
    break;
    case  marks > 80 && marks < 100:
     alert ("Grade A");
    break; 
    case marks > 50 && marks < 80:
     alert ("Grade B");
     break;
    case marks > 30 && marks < 50:
      alert ("Grade C");
      break;
     case marks > 0:
      alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
if (weather == "sunny"){
  alert("Wear a T-Shirt");
} else if(weather == "rainy"){
  alert("Don't forget to take your raincoat");
} else if(weather == "hot"){
  alert("Get a hanky");
} else if(weather == "freezing"){
  alert("Get your sweeter on");
} else {
  alert ("Not a valid input");
}
