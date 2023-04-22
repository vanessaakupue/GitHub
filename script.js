console.log("hello world!");

// Variables- for storing data temporarily in your code

let num = 2 + 2
// let, variable, value.
console.log(num)
console.log(num + 2000)

//  when defining a string ie things that are not numbers use quotation

let firstName = "Vanessa"
let lastName = "Akupue"
let age = 23
const DOB = "13th August 2000"

console.log(firstName, lastName, age, DOB )

// Data types

// if else statements

let num1 = 91;
let num2 = 11;



if(num1%2 === 0 && num2%2 === 0) {
    console.log("They are even numbers");
}
else if (num1%2 === 0 && num2%2 !== 0 ) {
    console.log("num1 is even and num2 is odd");
} 
else if (num1%2 !== 0 && num2%2 === 0 ){
    console.log("num1 is odd and num2 is even");
}
else if (num1%2 !== 0 && num2%2 !== 0 ) {
    console.log("They are odd numbers");
}
console.log("Thank you for coming to my lesson!");

// how to use a ternary operator in place of if else statements ?:

let num5 = 22
let result 

result = num5%5 === 0 ? "divisible by 5" : "not divisible by 5"
console.log(result);

// switch cases - for writing multiple cases

let activity = "Running"

switch (activity) {
    case "Dumbell":
        console.log("50kg Monday");
        break;
    case "Ropes":
        console.log("50 skips Tuesday");
        break;
    case "Threadmill":
        console.log("12,3,30 Wednesday");
        break;
    case "Squats":
        console.log("500 squats Thursday");
        break;
    case "Core":
        console.log("100 sit ups Friday");
        break;
    default:
        console.log("Not your cup of tea, pls follow the timetable");
        break;
}

// using template literal
// you can use it to automatically fill in the value of variables. check below.

let breakfast = "pap and akara"
let lunch = "kimchibap"
let dinner = "nothing"

console.log(`I ate ${breakfast} for breakfast,
${lunch} for lunch and ${dinner} for dinner.`);

// the backtick can place a sentence on another line by just typing the sentence on another line. ckeck above.

// loops

// while loop - checks for the condition before executing the block of code
// it needs initialization, condition and increment or decrement

let i = 10; //initialization

while (i >= 1)  //condition
{ 
    console.log("Lol dfkm" , i );
    i--; //increment or decrement
}

let j = 0;

while (j > -5) {
    console.log("vanessa" , j );
    j--;
}
// when you pass a condition, you have to check if you keep increasing it or decreasing it, will it be infinity or will it have an ending

// do while loop - it runs the code first then it checks the condition to know if it'll keep running

let q = 10;

do {
    console.log("Welcome" , q );
    q--;
} while (q > 0);
// when you pass a condition, you have to check if you keep increasing it or decreasing it, will it be infinity or will it have an ending?

// for loop - helps to write the codes on one line using two ;

for (let a = 0; a <= 5; a++) {
    console.log("A is increasing by" , a );
}


// nested loop - not necessarily a type- you can run a loop inside of another loop.
for (let b = 9; b > 0; b--) {
    console.log("B is lesser now" , b );
    for (let d = 3; d >= 0; d--) {
        console.log("D is nested in B" , d );
    }
}


// for loop is used when you know the begining and ending of a condition
// while loop is used when you don't know the duration of the code, you just want it to stop when you say so  

// if you want to print out a block of numbers seperately

let number = 564782980;

while (number>0) {
    console.log(number%10);
    number = parseInt(number / 10);
    // console.log(number / 10);
}

// find the numbers divisible by 4

for (let p = 1; p < 30; p++) {

    if (p%4===0) {
        console.log(p, "is divisible by 4");
    }
}

// object 

// object literal

let input = "age" //when the user get to choose the variable to call

let student = {
    firstName: "Vanessa",
    lastName: "Akupue",
    age: 23,
    DOB: "13th august 2000",
    'reg no': "2017/246171"
}

console.log(student);
console.log(student['reg no']);
console.log(student.DOB);
console.log(student[input]); //here you put the object first ie student, then youput in square brackets the variable that enables users to choose ie input.

// complex object- creating an object inside an object

let gadget = {
    type : 'laptop',
    brand : 'macbook',
    spec : {
        cpu : 'core i7',
        ram : '16gb',
        gen : '10th',
        storage : 'ssd 1terabyte',
        color : 'black'
    }
}

console.log(gadget.spec.gen);
console.log(gadget.spec.color.length); //.length property is used to count the number of the items
console.log(gadget.spec.size?.length); // '?' is used as an if. so if the property the ? is attached to doesn't exist it wont run the command and it wont produce an error message

//delete gadget.spec.gen; // delete property helps to delete and not print whatever property you attach to it
console.log(gadget);

for(let key in gadget) {
   // console.log(key);  // for calling only the keys in an object
    console.log(key, gadget[key]); // for calling both the key and the value
}

for(let key in gadget.spec) {
    console.log(key, gadget.spec[key]);
}

// functions
// you first define a function then you call it for it to work

function click(username, store) {
    return `Hello ${username}, welcome to ${store} website!`
}

let username = "Vanessa Akupue";
let store = "Fenty Beauty by Rihanna"

let popUp = click(username, store); // you have to store the function or functions in a string,
console.log(popUp); //then you call the string

// function expression

let housing = function(dup1, dup2, dup3) {
    return `The meeting of ${dup1}'s house and ${dup2}'s house, is happening at ${dup3}'s house. Thanks. `
}

let pam = housing;

let info = pam ("Ngozi", "Chibundo", "Onyi"); //you have to define the functions you called

console.log(info);
console.log(pam);

// when you assign the key of the function ie housing to another key ie pam, you have to change the value attached to the definition of the function ie *(chibundo etc).
// then you call the key to the defining of the functions ie info. 


// local variables and global variables

let oddNum = 3; // global variable

function myFunction(odd) {
    let str2 = 5; // local variable
    console.log(str2); // only works when called inside the function
    console.log(oddNum); // global variable prints everywhere. inside the function or outside the function
    return `${odd} is an odd number`  // you can change the name of the function as long as you change it in the return statement, it will work.
}

let str = myFunction(oddNum);

console.log(str);
//console.log(str2); // this prints undefined because it is a local variable

// you can pass multiple values and even a default value incase it doesnt have a value.

function add(x=1, y=2, z=3) {
    console.log(x,y,z);
    return `${x}, ${y} and ${z} are examples of numbers.`
}

let numbers = add();
console.log(numbers);

// arrow functions

// let house = function(dup1, dup2, dup3) {
//     return `The meeting of ${dup1}'s house and ${dup2}'s house, is happening at ${dup3}'s house. Thanks. `
// }

// let pos = housing;

// let way = pos ("Ngozi", "Chibundo", "Onyi"); //you have to define the functions you called

// console.log(way); 

// lets turn this above into an arrow function

let house = (dup1, dup2, dup3) => `The meeting of ${dup1}'s house and ${dup2}'s house, is happening at ${dup3}'s house. Thanks. ` // this is an arrow function
    
    let way = house ("Ngozi", "Chibundo", "Onyi"); //you have to define the functions you called
    
    console.log(way); 
    
// methods

let bread = {
    flour: '3kg',
    butter: '2 satchets',
    sugar: '3 cups',
    egg: 6,
    bakingPowd: '3 tbs',

    // compare: function(bread2){
    //     if (bread.egg > bread2.egg) {
    //         console.log(bread);
    //     } else {
    //         console.log(bread2);
    //     }
    // },
    // instead of doing the above you can use a this statement like below
    compare: function(other){
        if (this.egg > other.egg) {
            console.log(this.egg);
        } else {
            console.log(other.egg);
        }
    },

    baked: function() {
        console.log(this.butter); //using 'this'
    }
}
let bread2 = {
    flour: '5kg',
    butter: '3 satchets',
    sugar: '5 cups',
    egg: 9,
    bakingPowd: '5 tbs',

    baked: function() {
        console.log(this.egg); //using 'this'
    }
}

bread2.baked();
bread.baked();

bread.compare(bread2); // then you call the compare function

// arrays

let values = ["water", "shoes", "bags", "clothes", 4, 5, {lang: 'java'}];

console.log(values);
console.log(values.length);
console.log(values[3]);

values.push("cable"); //to add items to the end of the array
values[2] = "poochai"; //to add items to the array , it can also replace an item
values.pop(); //removes an item from the back
values.shift();//removes an item from the front
values.unshift(24);//adds an item to the front
values.splice(1,2, 34, 15);//removes items from within the array. the first num is the index num to remove, the second num is the number of items to remove. The remaining numbers are items you want to add.




console.log(values);

// for of and for in loops

let nums = [];

nums[0] = 1;
nums[1] = 2;
nums[20] = 21;

console.log(nums);

for(let x of nums) {
    console.log(x); //this returns the values one one
}

for(let n in nums){
    console.log(n); //this returns the keys eg 0,1,20
}

// destructuring an array

let counts = [0,1,2,3,4,5,6];
let [a,b,c,d,,f,g] = counts; //you can destructure an array, you can also leave an ommission by putting an extra comma ie a,,c;

console.log(f);

// swapping arrays

let h = 4;
let k = 6;

[h,k] = [k,h];

console.log(h,k);

// turning strings into arrays

let words = "My name is Vanessa Akupue aka FUM FUM FOR THE MONEY".split(' ');

//filtering an array
words.filter(w => w.length > 4)
    .forEach(w => {
        console.log(w);
    });


let [one,two,three, ...four] = words; //you can't use numbers to destructure an array
// ... means rest of the element
console.log(four);
//  foreach helps to print the arrays one one
 words.forEach( w => {

     console.log(w);
    // console.log(w, i, words); // i is index
    // console.log(w, 'poochai');
    // console.log(w*2);
});

let weed = [1,2,3,4,5,6];

let answer = weed.filter( x => x%2===0)
    .map(x => x*3)    // .map helps to change an array
    .reduce((x,y) => x-y);   // .reduce helps to reduce arrays into one value

    console.log(answer);

// set does not print repeated numbers

let wifi = new Set();

wifi.add("vee");
wifi.add("javascript");
wifi.add(175);
wifi.add(2);
wifi.add("vee");
wifi.add(2);

console.log(wifi);
console.log(wifi.has("Vee")); //helps to check if an array has a character or not.. returns true or false


wifi.forEach(value => {
    console.log(value);
});

//map ... every man must have a key

let map = new Map();

map.set("aquafina", "water");
map.set("indomie", "noodles");
map.set("loud", "narcotics");
map.set("AZ", "narcotics");
map.set("duchess", "clothes");
map.set("loud", "highness"); //the key cant be duplicated it will be updated, but if you change the value instead it will duplicate


console.log(map);
console.log(map.has("water"));
console.log(map.keys());

for (let [k,v] of map) {
    console.log(k, ":", v);
}

// using forEach you pass the value first before the key

map.forEach((v,k) => {
    console.log(k, " : ", v);
})

//recursion ... last in first out   

let wig = 5;
function mouse() {
    console.log("what's good?" , wig);
    wig++;
    if(wig<=10000)
       mouse(); // calling a function in itself makes it reach its max number of calls
}

mouse();

//factorial using recursion

function fact(n){
    if(n==0)
        return 1;
    else
        return n * fact(n-1);
}

let me = 3;   //range is till 170
let reply = fact(me);

console.log(reply);

// DOM manipulation 

// GetElementById

const fummie = document.getElementById("ID-name");
console.log(fummie);

// GetElementByClassName 

const fummie = document.getElementsByClassName("list");

//GetElementsByTagName

const fummie = document.getElementsByTagName("li");

//querySelector

const fummie = document.querySelector(div); // this selects the first div or first element that youve put in the bracket

//querySelectorAll

const fummie = document.querySelectorAll(div); // this selects all the divs in sight
