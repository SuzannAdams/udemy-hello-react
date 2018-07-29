// build a person with object literal notation
// use three property values consisting of a string, number and a boolean

let husband = {
    name: "Alex",
    age: 33,
    isGuitarist: true
};

// build an object with object literal notation
// use dot notation to add four properties and values

let cat = {};
cat.name = "Suki";
cat.age = 8;
cat.purrs = true;
cat.sex = "male";

// add properties and values to an object with bracket notation
// use a boolean, string and number

let soup = {};
soup['ingredients'] = "fish, tomatoes, celery, onion";
soup['yummy'] = true;
soup['portions'] = 6;

// review
// dot and bracket notation
// dot used more frequently for the use of typing
// bracket has more flexibility

let snowmen = {
    isSnow: true,
    color: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
};

// access all the properties with dot notation

snowmen.isSnow;
snowmen.color;
snowmen.madeOfSnowballs;
snowmen['firstName'];

// build a house object
// add 4 property values with dot notation with at least one value type of string, number and boolean
// add 3 property values with bracket notation with 3 property names that can only be added with bracket notation rather than dot notation

let house = {
    rooms: 4,
    hasKingBedroom: true,  
};

// Props in React
//      - How Components talk to each other
//      - a way to passing data from parent to child (top - bottom communication)
//      - Flow downward (react is said to have unidirectional data flow)
//      - immutable data (read only)  
