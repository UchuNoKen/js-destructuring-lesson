// Why Destructuring? --------------------------------------------------

// Domain...
//      The data of a student including scores in three subject is represented in
//      an object
//          - Math score
//          - English score
//          - Science score

// Problem...
//      We need to display some information based on this data

// Object Destructuring ----------------------------------------------------

const student = {
  firstname: "Joe",
  lastname: "Schmoe",
  age: 31,
  country: "USA",
  scores: {
    maths: 99,
    english: 100,
    science: 98
  }
};

// *!* Using basic object destructuring:
//       - use an object literal on the left-hand side of an assignment expression

const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // "Joe", "Schmoe", "USA"

// Values were assigned to three variables using the value from their corresponding
// object keys on the 'student' object.
// Variables are created if they do not exist

// Using destructuring in variable assignment:
//  - enclose in parentheses since it is an assignment expression and block
//    statements cannot appear on the left hand side of an assignment

let country = "Brazil";
let firstname = "Kent";
let lastname = "Clark";

const student = {
  firstname: "Vlad",
  lastname: "Empaluer",
  country: "Bromania"
};

// reassign firstname and lastname using destructuring
({ firstname, lastname } = student);

// country is unchanged
console.log(firstname, lastname, country); // Kent Clark Bromania

// Using default values:
//   - a way to assign a value to a variable of destructed object in order
//     to avoid undefined

const person = {
  name: "Joe Schmoe",
  country: "Mexico"
};

// Assign a default value of 31 to age if undefined
// since age key does not exist on person object
const { name, country, age = 31 } = person;

console.log(`${name} from ${country}, ${age} years old.`); // Joe Schmoe from Mexico, 31 years old.

// Using Different Variable Names
// - use syntax [object_key] : [variable_name] to assign to a variable
//   name that does not correspond to an object key

const person = {
  name: "Joe Schmoe",
  country: "Mexico"
};

// assign default value of 31 to years if age is undefined
const { name: fullname, country: place, age: years = 31 } = person;

// Joe Schmoe from Mexico, 31 years old.
console.log(`${fullname} from ${place}, ${years} years old.`);

// Nested Object Destructuring
//  - accessing nested objects

const student = {
  name: "Joe Schmoe",
  age: 16,
  scores: {
    math: 100,
    english: 99
  }
};

// using nested destructuring to extract math and science from scores
const {
  name,
  scores: { math, science = 50 }
} = student;
