//print a&b value or 1 incrise
// sazim ="hasan"
// console.log(sazim);
// let a=5;
// let b=2;
// console.log("a=",a,"&b=",b);
// a++;//a++ significa(মানে) 1 value add(5+1=6)
// console.log("a=",a,);//6
/*Artimetic Operatrs
let a=5;
let b=2;
console.log("a=",a,"&b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
a++;
console.log("a+b=",a+b);
console.log("a**b=",a**b*a**b);*/

/* let name={
// a:5,
// b:2,
// c:5,
// age:7,
// };
// console.log("a+b+c=",a+b+c);*/
/*let name = {
    a: 5,
    b: 2,
    c: 5,
    d:10,
    age: 7,
  };
  
  console.log("a+b+c+d=",name.a + name.b + name.c+ name.d);*/
  /*unary Operator
  let a = 5;
  let b = 2;
  console.log("a=",a,"& b=",b);
  console.log("a++=",a++);
  console.log("--a=",--a);
  console.log("a =",a);*/
/*assignment operators
  let a=5;
  let b=5;
 a +=4;//a=a+4
 b -=3;//b=b-3
 a **=4;//a=a**4
 b **=4;//b=b**4
console.log(a);
console.log(b);*/
/*comparison operators
 let a=5;
 let b=2;
let c=5;
console.log("5==3",a==b);//false
console.log("5==5",a==c)//true
console.log("5!=5",a != c);//false*/
/*comparison operators
let a=5;//number
let b=4;
let c="5";//string
console.log("a==c",a==c);//true
console.log( "a===c",a===c);//false
console.log( "a!==c",a!==c); //true*/
/*comparison operators
let a=5;
let b=5;
console.log("5 >= 5",a>=b);//true
console.log("5 <= 5",a<=b);//true*/

/*logical operators
let a=6;
let b=5;
let cond1 =a > b ;
let cond2 =a != b;
console.log(" cond1 && cond2 =", cond1 && cond2);//true
console.log(" cond1 && cond2 =", a > b && a != b );//true
console.log(" cond1 || cond2 =", a < b || a == b);//false
console.log(" cond1 || cond2 =", a > b || a != b);//false
console.log(" !(6>5) =", !(a===6));//false*/
 /*conditional Statements
let mode="dark";
 let color;
if (mode==="dark"){
  color ="black";
}
if (mode ==="lite"){
  color ="white";

}
console.log(color);*/

/*conditional Statements
let age =16;
if ( age >= 18){
  console.log("vote");
} else{
  console.log("not vote");
}*/

/*even 
let num = 10;

if (num % 2 === 0){
console.log(num,"even");
} else{
  console.log(num,"odd");
}
/ odd
let num = 11;

if (num % 2 === 0){
console.log(num," is even");
} else{
  console.log(num,"is odd");
}
/*syntax -> rules- alert  
  function sayhello(){
    alert("yes")
  }
/*conditional statements
let mode ="sazim";
let color;
if (mode ==="dark"){
  color="black";
}else if( mode==="blue")
{ 
  color="blue";
}else if( mode==="pink")
{ color="pink";
}else if(mode==="sazim"){
  color="white";
}else {
  color= "green";
}
console.log(color);
if (mode ==="dark") {
console.log (mode);
} */

/*terany operator //< thats main symbol is -?,:>
let age =23;
let result1 = age>=18 ?"female adlt" : "female not adult";
 result2 = age>=22 ?"male adlt" : "male not adult";
 result3 = age>=25?"homo" : "homo is varital"
myvariable = 30;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(myvariable);
*/
// let sayhello=prompt("hello");
// console.log(sayhello);

/*function sayhello(){
  alert("yes")
}
let name=prompt("hello");// that's uses for take input from user
 console.log(name);*/
 // chack 5 dia divided hoy kina
 /*let number = prompt("Enter a number");
 number = Number(number); // Convert the input to a number
 
 if (number === 0) {
     console.log("Error");
 } else if (number % 5 === 0) {
     console.log(number, "is a multiple of 5");
 } else {
     console.log(number, "is not a multiple of 5");
 }*/
/*let score=75;
let  grade;
if (score >=80 && score <= 100){
  grade ="A+";
}
 else if (score >=50 && score<=79){
  grade ="A";
}
else if (score >=30 && score>=50){
  grade ="A";
}
else if (score >=30 && score>=40){
  grade ="B";
}
 console.log (grade); */
/*  input and condition
let score=prompt("enter your score (0-100)");
let  grade;
if (score >=80 && score <= 100){
  grade ="A+";
}
 else if (score >=50 && score<=79){
  grade ="A";
}
else if (score >=40 && score<=50){
  grade ="A";
}
else if (score >=30 && score <=40){
  grade ="B";
}
else if(score >=100){
  grade="not right value plese put the < 100 ";
}
 console.log (grade);*/
//loops in js
/*for (let i =1;i <=100000;i++){
  console.log("sazims best is mouli alissa");//5 time pront  
}
for (let i =1;i>=100;i++){
  console.log("sazims best is mouli alissa");
}*/
/*
//for loops
let sum = 0;
let input = prompt("Enter your number: ");
let num = parseInt(input);

for (let i = 1; i <= num; i++) {
    sum=sum + i;
} 
console.log("Sum =", sum);
console.log("Loop has ended");}/*
*/
/*
//infinite loop (thats donot use use in code ,because thats eat very space )
for( let i=1; i<=5;i++){
  console.log("i=",i);
}*/
/*//while loop
  let i=1;
  while(i<=10){
    console.log("apna college",i +=1);
    i++;
  }*/
/* //Do while loop
 let i=20;
 do{
  console.log("apna college");
  i++;
 }
 while (i>=10);
  */
 
 /*//for-of-loop

 let str = "my university is ugv";
let size = 0;

for (let char of str) {
    if (char !== ' ') {
        console.log("char=", char); // iterator -> character
        size++;
    }
}
console.log("string size (excluding spaces)=", size);
 */
//for in loop
import {mojo} from "//resources/mojo/mojo/public/js/bindings.js";
export const PointSpec = {
    $: {}
};
export const PointFSpec = {
    $: {}
};
export const Point3FSpec = {
    $: {}
};
export const SizeSpec = {
    $: {}
};
export const SizeFSpec = {
    $: {}
};
export const RectSpec = {
    $: {}
};
export const RectFSpec = {
    $: {}
};
export const InsetsSpec = {
    $: {}
};
export const InsetsFSpec = {
    $: {}
};
export const Vector2dSpec = {
    $: {}
};
export const Vector2dFSpec = {
    $: {}
};
export const Vector3dFSpec = {
    $: {}
};
export const QuaternionSpec = {
    $: {}
};
export const QuadFSpec = {
    $: {}
};
mojo.internal.Struct(PointSpec.$, "Point", [mojo.internal.StructField("x", 0, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Int32, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(PointFSpec.$, "PointF", [mojo.internal.StructField("x", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Float, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(Point3FSpec.$, "Point3F", [mojo.internal.StructField("x", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("z", 8, 0, mojo.internal.Float, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(SizeSpec.$, "Size", [mojo.internal.StructField("width", 0, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("height", 4, 0, mojo.internal.Int32, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(SizeFSpec.$, "SizeF", [mojo.internal.StructField("width", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("height", 4, 0, mojo.internal.Float, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(RectSpec.$, "Rect", [mojo.internal.StructField("x", 0, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("width", 8, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("height", 12, 0, mojo.internal.Int32, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(RectFSpec.$, "RectF", [mojo.internal.StructField("x", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("width", 8, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("height", 12, 0, mojo.internal.Float, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(InsetsSpec.$, "Insets", [mojo.internal.StructField("top", 0, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("left", 4, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("bottom", 8, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("right", 12, 0, mojo.internal.Int32, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(InsetsFSpec.$, "InsetsF", [mojo.internal.StructField("top", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("left", 4, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("bottom", 8, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("right", 12, 0, mojo.internal.Float, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(Vector2dSpec.$, "Vector2d", [mojo.internal.StructField("x", 0, 0, mojo.internal.Int32, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Int32, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(Vector2dFSpec.$, "Vector2dF", [mojo.internal.StructField("x", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Float, 0, false, 0)], [[0, 16]]);
mojo.internal.Struct(Vector3dFSpec.$, "Vector3dF", [mojo.internal.StructField("x", 0, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("y", 4, 0, mojo.internal.Float, 0, false, 0), mojo.internal.StructField("z", 8, 0, mojo.internal.Float, 0, false, 0)], [[0, 24]]);
mojo.internal.Struct(QuaternionSpec.$, "Quaternion", [mojo.internal.StructField("x", 0, 0, mojo.internal.Double, 0, false, 0), mojo.internal.StructField("y", 8, 0, mojo.internal.Double, 0, false, 0), mojo.internal.StructField("z", 16, 0, mojo.internal.Double, 0, false, 0), mojo.internal.StructField("w", 24, 0, mojo.internal.Double, 0, false, 0)], [[0, 40]]);
mojo.internal.Struct(QuadFSpec.$, "QuadF", [mojo.internal.StructField("p1", 0, 0, PointFSpec.$, null, false, 0), mojo.internal.StructField("p2", 8, 0, PointFSpec.$, null, false, 0), mojo.internal.StructField("p3", 16, 0, PointFSpec.$, null, false, 0), mojo.internal.StructField("p4", 24, 0, PointFSpec.$, null, false, 0)], [[0, 40]]);


