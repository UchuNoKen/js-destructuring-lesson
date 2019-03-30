// Mixed Destructuring ----------------------------------------------------
//  - when you have a complex object with several deeply nested objects and arrays,
//    you can use a combination of object and array destructuring to target certain
//    parts of the complex structure:

const person = {
  name: "Joe Schmoe",
  age: 25,
  location: {
    country: "USA",
    city: "Twin Peaks",
    coordinates: [49.2827, -123.1207]
  }
};

// Use a mix of object and array destructuring
// Assign 5 variables: name, country, city, lat, lng

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng]
  }
} = person;

console.log(
  `${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})), ${age} years old.`
);
