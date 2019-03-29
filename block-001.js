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
