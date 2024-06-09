//1

function tellFortune(numChildren, partnerName,geoLocation, jobTitle ){
    let fortune = "You will be a" + jobTitle + "in" + geoLocation + ", and married to" + partnerName + "with" + numChildren + "kids";

    console.log(fortune);
}


//2

function calDogAge(puppyAge){
    let dogAge = puppyAge * 7;
    console.log ("Your doggie is" + dogAge +years old in dog years);
}


//3

function greet(name) {
    const message = `Hello ${name}!`;
}


//4

function double(cat) {
    return 2 * cat;
}

function double(y) {
    return 2 * y;
}

function double(x) {
    return 2 * 'x';
}

//5

// func double1(x {
//     return 2 * x ;
// }

function double1(x) {
    return 2 * x ;
}


// functiondouble2 x)
//   return 2 * x;
//   }
function double2(x){
  return 2 * x;
}

// function (x) double3 {
//     return 2 * x;

function double3(x) {
    return 2 * x;
}

//6

function cube(a){
    console.log(a**3)
}


//7

function multiply(x,y){
    return x*y;
}

//8
function canIGetADrivingLicense(age) {
    if (age>=20){
        return "yes you can";
}
else {
    const x = 20 - age;
    return "please come back after X years to get one";
}
}

//9
function sameLength(str1, str2) {
    return str1.length === str2.length;
}


//10

function largerNum(no1, no2) {
    return Math.max(no1, no2);
}

//11
function smallerNum(no1, no2, no3){
    return Math.min(no1, no2, no3);
}

//12
function shorterString(str1, str2, str3, str4, str5) {
    const strings = [str1, str2, str3, str4, str5];
        let shortest = strings[0];
        for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    
    return shortest;
}

//13
longerString(["air","school","car","github"]);
function longerString(x){
    const strings = [x];
    let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    
    return longest;
}


//14

function isEven(num) {
    return num % 2 === 0;
}


//15
function isOdd(num) {
    return num % 2 !== 0;
}

//16
function positive(num) {
    return Math.abs(num);
}

//17

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

//18
average (num1, num2, num3, num4, num5);
function average(x) {
    return [x] / 5;
}

//19

function randomNumber() {
    return Math.random();
}

//20
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}