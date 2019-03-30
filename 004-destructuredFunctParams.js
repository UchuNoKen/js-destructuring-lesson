// Function Parameter Destructuring ----------------------------------------------------
//  - destructured parameters cannot be omitted

// Ex.
//  - destructure the 'student' object and assigned extracted values to local variables of
//    the function

const student = {
  name: "John Doe",
  age: 16,
  scores: {
    math: 74,
    english: 63,
    science: 85
  }
};

// without destructuring
function displaySummary(student) {
  console.log("Hello, " + student.name);
  console.log("Your Math score is " + (student.scores.math || 0));
  console.log("Your English score is " + (student.scores.english || 0));
  console.log("Your Science score is " + (student.scores.science || 0));
}

// with destructuring
function displaySummary({ name, scores: { math = 0, english = 0, science = 0 } }) {
  console.log("Hello, " + name);
  console.log("Your Math score is " + math);
  console.log("Your English score is " + english);
  console.log("Your Science score is " + science);
}

displaySummary(student);

// Assign fallback object literal as default value for the student object and the nested
// scores object in case they are not supplied
// This will avoid the error
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } = {} } = {}) {
  // ...
}

// call without the student object as argument
displaySummary();

// Hello, undefined
// Your Math score is 0
// Your English score is 0
// Your Science score is 0
