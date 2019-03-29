// Array Destructuring ----------------------------------------------------

const rgb = [255, 200, 0];

// *!* Using basic array destructuring:
//       - use an array literal on the left-hand side of an assignment expression
//       - variables are mapped to the corresponding item at the same index, so
//         position matters

const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0

// Using default values:
//   - if number of items in array more than local variables
//      ... excess items are not mapped

//   - if number of local variables more than number of items
//      ... excess variables will be assigned value of undefined, unless
//          a default value is specified

const rgb = [200];

const [red = 255, green, blue = 255] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: undefined, B: 255

// red takes value of first index of 'rgb'
// green is undefined because there is only one value
// blue has a default value

// Skipping items:
// - using comma separation

const rgb = [200, 255, 100];

// skip first two items, assign only the third item
const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // Blue: 100

// Swapping Variables:
//  - avoid the additional variable

let width = 300;
let height = 400;
let landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
  // swap the variables
  [width, height] = [height, width];

  console.log(`${width} x ${height}`); // 400 x 300

  landscape = false;
}

// Nested Array Destructuring
//   - to do destructure nested arrays, the corresponding item must be an array

const color = ["#FF00FF", [255, 0, 255], "rgb(255, 0, 255)"];

// use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;

console.log(hex, red, green, blue); // #FF00FF 255 0 255

// Rest Items
//  -
