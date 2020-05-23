// function doctorize() {
//        return 'Dr. ${firstName}';
// }

// Anonymous function, a function w/o a name.
// function (firstName) {
//  return `Dr. ${firstName}`;
// }

// Function Expression, store a function as a value in a variable.
// const doctorize = function(firstName) {
//         return `Dr. ${firstName}`;
// };

// // Arrow Functions!
// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`;
// };

// Step 1 function declaration

// function inchToCm(inches) {
//         return inches * 2.45;
// }

// // Step 2 Making anonymous

// const inchToCm = function(inches) {
//     return inches * 2.45;
// }

// Step 3 now convert to arrow function with concise syntax.

/* eslint-disable */
// const inchToCm = (inches) => {
    //     return inches * 2.45;
    // };
    
    //const inchToCm = inches => inches * 2.45;
    
    //Example: Two-Argument arrow function. 
    
// function add(a, b = 3) {
//     const total = a + b
//     return total; 
// }

//const add = (a, b = 3) => a + b;

// Arrow functions with objects example!!!

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0,
//     }
// return baby;
// }

// const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});


// IFFE 
// Immediately Invoked Function Expression

// (function () {
//     console.log('running the anon function')
//     return 'you are cool';
// })();


//Methods!!!
//A function that lives inside of an object. 

const wes = {
      name: 'Wes Bos',

// Method
    sayHi: function () {
    console.log('Hey WES');
       return 'Hey Wes';
   },
    //Shorthand Method
    yellHi() {
    console.log('HEY WESSS');
     },
    //ArrowFunction Method
     whisperHi: () => {
    console.log('hii wess im a mouse');
    }
 }

//callback functions
//Type 1: click-callback

const button = document.querySelector('.clickMe');

// function handleClick () {
//     console.log('Grea CLICKING');
// }

// button.addEventListener('click', handleClick);

//Type 2: click-callback with anonymous function 

function handleClick () {
    console.log('Grea CLICKING');
}

button.addEventListener('click', function(){
    console.log('Nice Job');
});

//Timer callback

setTimeout(wes.yellHi, 1000)

//Timer callback w/ anonymous function 

setTimeout (function() {
    console.log('TIME TO EAT');
}, 1000); 

