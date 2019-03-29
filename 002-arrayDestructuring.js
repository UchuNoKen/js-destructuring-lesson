// Array Destructuring ----------------------------------------------------

const rgb = [255, 200, 0];

// *!* Using basic array destructuring:
//       - use an array literal on the left-hand side of an assignment expression
//       - variables are mapped to the corresponding item at the same index, so
//         position matters

const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0
