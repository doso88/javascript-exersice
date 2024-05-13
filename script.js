// javascript exercise
var a = 10;
a +=12;
console.log (a);

var b = 25;
b -=15;
console.log(b);

var c = 625;
c /=25;
console.log(c);

var d = 33;
d *=12;
console.log(d);

var e = 11%3;
console.log(e);

var f = "my name is \"irakli\" and sirname is \"gafrindashvili\"";
console.log(f);

var g = 'my name is "irakli" and sirname is "gafrindashvili"';
console.log(g);

var myString = "FirstLine\n\SecondLine\nThirdline";
console.log(myString);

var herString = "my wife\tis pregnant";
console.log(herString);

var string = "first string " + "second string";
console.log(string);

var strang = "first string ";
strang+= "second string";
console.log(strang);

var myName = "irakli";
var str = "my name is " + myName + " gafrindashvili";
console.log(str);

var adj = "hard";
var sentense = "understanding javascript is a little bit ";
sentense+=adj;
console.log(sentense);

var noun = "sparrow";
console.log(noun.length);

var verb = "walking";
console.log(verb[3]);

var word = "hospitality";
console.log(word[word.length-1]);

var car ="mitsubishi";
console.log(car[car.length-4]);

var myArray = ["irakli", 23];
console.log(myArray);

var ourArray = [["bulls", 23], ["white sox", 45]];
console.log(ourArray);

var array = [50,60,70];
var myData = array[0];
console.log(myData);

var partChange = [15,25,72,87];
partChange[2]=105;
console.log(partChange);

var boxArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], [13,14,15]]];
var piece = boxArray[3][0][2];
console.log(piece);

var cube = ["pig", "pigeon",];
cube.push("piglet", 5);
console.log(cube);
cube.pop();
console.log(cube);
cube.shift();
console.log(cube);
cube.unshift("lion", 5, "tiger");
console.log(cube);

var car = {
    model: "BMW",
    year: 2005,
    series: "E350"
};
 var carSentence = `i have ${car.model} ${car.series} which was produced in ${car.year}`;
 console.log(carSentence);

let hour = 15
if (hour >=6 && hour <= 12) {
    console.log("good morning")
}
else if (hour >=12 && hour<=18) {
    console.log("good afternoon")
}
else{
console.log("good evening")};
//-------------------------

for (let index = 0; index <= 50; index +=5) {
    console.log(index)
};
//-------------------------

let nums = [10, 15, 25, 75, 27, 345, 88];
let sum = 0;
for (let index = 0; index < nums.length; index++) {
     sum = sum + nums[index]; 
};
console.log(sum);


let person = [
    {name:"john",
     age:25,
     adress:"Las-Vegas"
    },
    {name:"lucas",
     age:35,
     adress:"New-York"
    },
    {name:"kate",
     age:27,
     adress:"Los-Angeles"
    }
];
console.log(`My name is ${person[0].name}, i am ${person[0].age} years old and i am from ${person[0].adress}`);

if (person[1].age <19) {
    console.log("I am a teenager")
} else {
    console.log("I am an adult")
};


let numbers = [5, 7, 9, 12, 18, 27, 35, 45, 127]
for (let i = 0; i< numbers.length; i++) {
    if (numbers[i] < 10 ){
        console.log("this is one digit number")
    } else if (numbers[i] > 10 && numbers[i] <100) {
        console.log("this is two digit number")
    } else {
        console.log("this is three digit number")
    }
};

for (let i = 0; i< numbers.length; i++) {
    console.log(numbers[i])
};

for (let i = 6; i>=0; i--) {
    console.log(numbers[i])
};


const colors = ["red", "green", "blue", "yellow", "brown", "white", "black", "purple"];
const upperCaseColors = [];
const lowerCaseColors = [];
for (let i = 0; i < colors.length; i++) {
    const element = colors[i]
    if (element.length>4) {
        upperCaseColors.push(element.toLocaleUpperCase())
    } else {
        lowerCaseColors.push(element)
    }
    
};
console.log(upperCaseColors, lowerCaseColors);
let slice = colors.slice(2,6);
console.log(slice);

const date = new Date(). getDay();

switch (date) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday")  ;
        break;         
    default: 
        console.log("Invalid date");
        break;
};


const hours = new Date (). getHours();
const minutes = new Date(). getMinutes();
console.log(hours, minutes);



// homework 15
for (let index = 0; index < 100; index++) {
    console.log (index); 
};

let i = 0;
while (i < 50) {
    console.log(i);
    i++;
};

const sirNames = ["Brown", "Miller", "Collins", "Hemsworth"];
sirNames.push("Barret", "Smith");
console.log(sirNames);
sirNames.unshift("Atkinson", "Holland", "Cage");
console.log(sirNames);
sirNames.pop();
sirNames.shift()
console.log(sirNames);

const tenThousand = [];
for (let i = 0; i < 10000; i++) {
    tenThousand.push(i*i);
};
console.log(tenThousand);

const arrayNumbers = [5, 25, 175, 222, 354, 684, 400];
let arraySum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    arraySum = arraySum + arrayNumbers[i]
};
console.log(arraySum);

let singleNum = 25;
if (singleNum % 2 === 0) {
    console.log("false")
} else {
    console.log("true")
}


let human = " MY NAME IS NICOLAS CAGE"
let lowerCaseHuman;
lowerCaseHuman = (human.toLowerCase());
console.log(lowerCaseHuman);

const digitArrey = [ 3, 5, 8, 13, 25, 28, 35, 54, 66, 69, 72, 82, 85, 99];
const oddDigit = [];
const evenDigit = [];
for (let i = 0; i < digitArrey.length; i++) {
    if (digitArrey[i] % 2 == 0) {
        evenDigit.push(digitArrey[i])
    } else {
        oddDigit.push(digitArrey[i])
    }
};
console.log(evenDigit, oddDigit);
let arreyReverse = digitArrey.reverse();
console.log(arreyReverse);



// homework 16
/* 1 */
const getNumber = (number) =>{
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
};
const nine = getNumber(9);
console.log(nine);


/* 2 */
const getCurrencySymbolFromCode = (currency) => {
    if (currency = "USD") {
        return "$"
    }else{
        
    }
};
const a_dollar = getCurrencySymbolFromCode ("USD");
console.log(a_dollar,);


/* 3 */ 
const getUpperCaseString = (text) => {
    return (text.toLocaleUpperCase())
};

const upperCaseText = getUpperCaseString (" my name is joe");
console.log(upperCaseText);


/* 4 */
const differencePercent = (a,b) => {
    let diff = a - b ;
    let perc = (diff*100)/a;
    return perc;
};

const answer = differencePercent (50,30);
console.log(answer);

/* 5 */

const nums_Arrey = [5, 14, 25, 31, 44, 47, 53, 75, 82, 93, 98];

const filterEvenNums = nums_Arrey.filter((numb) => numb % 2 === 0);
console.log(filterEvenNums)

/* 6 */
    
