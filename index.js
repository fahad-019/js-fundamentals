// primitive data types
var a=10; // number
var b='JavaScript'; // string
var c=true; // boolean
var d=null;  //null ( programmer has to define)
var e ; // undefined

console.log(a,b,c,d,e);
// to check which data type
console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e));

// string concatination '+'(adding multiple strings)

var a='access'; b=' education';
var c=a+b;
console.log(c);

// operators in js
// +, -, *, /,%
var a=5 , b=6;
var c=a*b;
console.log(c);

// Assigment operator
// =, +=, -=, *=, /=, %=
 var a=1, b=2, c=3, d=4, e=5;
 a+=10;
 b-=10;
 c*=10;
 d/=10;
 e%=10;
 console.log(a,b,c,d,e);

 //comparison operators in js
// <, >, <=, >=, !=, ==, ===

var a=56, b=88;
console.log(a<=b);

// logical operators in js
// &&, ||, !

 var a=34, b=23;
 console.log(!(a==b));
 console.log(a&&b);
 console.log(a<b || a<10);

 // Array's in js
 // its storage sequence of different data types

var array=[2,'HTML', true, null, undefined];
 console.log(array);
 console.log(array[1]);
console.log(array.length);
 console.log(array[6]);

 // objects in js
 // its storage of data in key value pairs

 var obj={name:"Fahad", Age: 25, p: "Mysore"}
 
 // 2 types to access object 
 // 1. [] bracket notation
 // 2. . dot notation

 console.log(obj.place);

 // function in js
 // syntax
//     function name(parameter){
//    conditions or statements
//    }

function sum(a,b){
    var c=a+b;
}

sum(10,20)  // calling or invoking the function
console.log(c);


 function calculator(a,b,c){
     switch(c){
case '+' : console.log(a+b);break;
case '-': console.log(a-b);break;
case '*': console.log(a*b);break;
case '/': console.log(a/b); break; 
default:console.log("nothing");
         }
        }
calculator(15,10,'*');

// printing array values using for loop

var arr1=[1,2,3,4,5,6];
for(var i=0;i<=arr1.length;i++)
{
    console.log(arr1[i]);
}

// helper methods of array in js

 var colors=['black','blue','red','green'];
 colors.push('white'); // adds white at end of an array ( last index)
 colors.unshift('pink'); // adds pink at beginning og array (0th index)
 colors.pop(); // removes last index element
 colors.shift(); // removes 0th index element
 console.log(colors);


 // slice and splice in array

 //slice is used to remove elements and to make a new array

 var fruits=['apple','banana','kiwi','grapes','watermelon'];
 console.log(fruits);
 var newFruits=fruits.slice(2,3);
 console.log(newFruits);

 // splice is used add new elements to array for desired index with and without removing the existing elements

 var brands=['samsung','OnePlus','Apple','oppo','vivo'];
 brands.splice(2,0,'Nokia','Motorola')
 console.log(brands);

 //objects

 var student1={ name: "Moahmmed Fahad",gender: "male", age: 25, hometown: "Mysore", qualification:{degree:"engineering",branch:"Electronics"}}
 console.log(student1);
 console.log(student1.hometown);
 console.log(student1.qualification.branch);

 //adding property to object

 student1.qualification.batch="2018";
 console.log(student1.qualification.batch);


 // array of objects

 var player=[{Name:"Virat Kohli",Role: "Batter",Team: "RCB",Country: "India"},
{Name: "David warner",Role:"Batter",Team:"Delhi Capitals",Country:"Australia"},
{Name:"Trent Boult", Role:"Bowler",Team:"Rajasthan Royals",Country:"New Zealand"},
{Name:"Liam Livinstone",Role:"All-rounder",Team:"Punjab Kings",Country:"England"},
{Name:"Rashid Khan",Role:"All-rounder",Team:"Gujrat Titans",Country:"Afghanistan"}];

// to print all details of a player
console.log(player[4]);

// to print only teams of all player

for(var i=0;i<=player.length;i++)
{
    console.log(player[i].Country);
}

// arrow function
const sum= (a,b) => a+b;
console.log(sum(100,150));

//forEach
const cities=['mysore','bangalore','mumbai','chennai','delhi'];
        cities.forEach((city)=>{console.log(city);}) // arrow function
        cities.forEach(function(city){
            console.log(city);
        })

    // array map
  const num=[10,20,30,40,50];
  const result=num.map(function(data){
      return data+10;
  })
  console.log(num);
  console.log(result);

      // array filter 

const num1 = [2, 4, 6, 8, 10, 12];
const res = num1.filter(function(data) {
  return data > 7;
})
console.log(num1);
console.log(res);

//reduce 
let arr=[1,5,6,3,2,6,3,4];
        const arr1=arr.reduce((a,b) =>{
            return a+b;
        })
        console.log(arr);
        console.log(arr1);

// find
 let arr2=[1,2,3,4,5,6,7,8,9];
 let get=arr2.find((data)=>{
     return data>5;
 })
 console.log(arr2);
 console.log(get);  

 // array destructing

 let greet=['Welcome','home'];
     const[a,b]=greet;
    console.log(a);
    console.log(b);

// object destructing

const person={
    firstName: 'Mohammed',
    lastName: 'Fahad',
    Age: 25
}
const{firstName,lastName,Age}=person;
        console.log(firstName,lastName,Age)

 // string literals
 
 
let firstN='Kane';
let lastN=' Williamson';
let text=`Century for ${firstN}${lastN}`;
console.log(text);


// this keyword 
// within normal function it points to local variable
// in arrow function or js code it points to global scope

var name='david';
        function whoisThis(){
            var name='Beckham';
            console.log(this.name);
        }
        whoisThis();

        // method

        let person1={
            name1:'starc',
            altName:function(){
              console.log('hello');
            console.log(this.name1);
            }
        }
       console.log(person1.altName());

//array concatination  and spread

let array1=[10,20,30,40];
let array2=[70,80,80,90];
array1.concat(array2);
console.log(array1.concat(array2)) // concat is for concatination
let array3=[10,...array1,...array2]; // ...array1 is for spread
console.log(array3);



























 



 

