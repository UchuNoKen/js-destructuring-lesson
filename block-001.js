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

// Using basic object destructuring:
//  - use an object literal on the left-hand side of an assignment expression

const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // "Joe", "Schmoe", "USA"

// Values were assigned to three variables using the value from their corresponding
// object keys on the 'student' object.
// Variables are created if they do not exist

// Using destructuring in variable assignment:
//  - enclose in parentheses since it is an assignment expression

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
