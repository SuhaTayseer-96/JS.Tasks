
// let x = 250 ;
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

//Solution
// let x = 250 ;
// console log.(0.025 * x)

// // or 
// // let zakah = window.prompt()
// // console.log (0.025 * zakah + JOD)

// //...........................................................

// // Correct the syntax error
// //  [ 1,7  9  45, ]

// //  ["Str" "alex","moh"

// //  'the','fox' 'over' lazy, 'dog',  ]

// //Solution
// // Correct the syntax error
// [ 1, 7, 9, 45];

// ["Str", "Alex","moh"];

// ['the','fox', 'over', 'lazy', 'dog'];

//...........................................................

// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

//Solution
// var fruits=["Tomato","Banana","Watermelon"]
// console.log(fruits.indexOf("Banana")); //[1]
// console.log(fruits.indexOf("Tomato")); //[0]
//...........................................................

// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)


//Solution

// let favfood = ["Fruits","Veg"];
// let favsport = ["Tennis" ,"Running","Cycling"];
// let favmovies = ["A Beautiful Mind" ,"Cast Away"];


// console.log(favfood)
// console.log(favsport)
// console.log(favmovies)

// //............................................................
// Create a Variable to return the first element in an array 
// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"

// //Solution

// let firstOfArray = [1,4,5];
// let firstOfArray = ["t","u","g","x"];
// console.log(firstOfArray[0])  
// console.log(firstOfArray[0]) 


// //....................................................

// // Create a Variable to return the lastOfArray element in an array 

// // Ex: lastOfArray([1,4,5]) => 5
// // Ex: lastOfArray(["t","u","g","x"]) => "x"


// //Solution

// let lastOfArray= [1,4,5];
// let lastOfArray1 = ["t","u","g","x"];
// console.log(lastOfArray[lastOfArray.length-1])
// console.log(lastOfArray1[lastOfArray1.length-1])


// //Explain :  "Arraylength-1: reference the last element of an array
// //.........................................................

// // Using console make this array to be like this one (push, unshift, shift, pop)

// // var array = [0,5,7,9]
// // => [1,3,4,6,8,9,10]


// //Solution
// var array = [0,5,7,9]
// array.splice(0,3,1,3,4,6,8)
// array.push(10)
// console.log(array);

// //.........................................................

// // Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// // var array2 = [5,9,-7,3.5]


// //Solution + explain

// var array2 = [5, 9, -7, 3.5];
// array2.push(4);         // [5, 9, -7, 3.5, 4]
// array2.unshift(2);      // [2, 5, 9, -7, 3.5]
// array2.shift();        // removed fst ele .. "5"
// array2.pop();          // removedd last ele .. "3.5"
// console.log(array2)    // returned to the [5, 9, -7, 3.5]
// //.........................................................


// // Write a JavaScript program to sort the items of an array.
// // Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // Sample Output : -4,-3,1,2,3,5,6,7,8

// //Solution
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// console.log(arr1.sort())
