
// 1. Creating Objects
let drBart = { title: "Dr. Bart", shirtColor: "blue", isProfessor: true };
let ada = { height: 23, name: "Ada Bart" };
let cisc275 = {
    id: "CISC275",
    seats: 80,
    online: false,
    labs: ["20", "21", "22"],
};
let emptyObject = {};

// 2. Accessing Object Properties
console.log(drBart.shirtColor); // Output: "blue"
console.log(ada.height); // Output: 23
console.log(cisc275.labs); // Output: ['20', '21', '22']

// 3. Updating Objects Immutably
const myPhone = { brand: "Samsung", model: "Galaxy", batteryLeft: 97 };
const usedPhone = { ...myPhone, batteryLeft: 48 };
console.log(usedPhone.batteryLeft); // Output: 48

// 4. Nested Data (Updating Nested Arrays)
const student = { name: "Ada", grades: [100, 99, 78, 97] };
const studentWithNewGrade = {
    ...student,
    grades: [...student.grades, 100], // Add a new grade to the array
};
console.log(studentWithNewGrade.grades); // Output: [100, 99, 78, 97, 100]

// 5. Interfaces (Defining Object Structure)
interface Dog {
    name: string;
    age: number;
    breed: "Corgi" | "Chihuahua" | "Mutt";
    fuzzy: boolean;
}

// 6. Creating Objects Using Interfaces
const adaDog: Dog = { name: "Ada Bart", breed: "Corgi", age: 4, fuzzy: true };
console.log(adaDog.name); // Output: "Ada Bart"

// 7. Records (Key-Value Pairs)
const courseLookup: Record<string, string> = {
    CISC108: "Introduction to Computer Science",
    CISC210: "Systems Programming",
    CISC220: "Data Structures",
    CISC275: "Introduction to Software Engineering",
};
console.log(courseLookup["CISC275"]); // Output: "Introduction to Software Engineering"

// 8. Destructuring (Unpacking Object Properties)
const { name, breed } = adaDog;
console.log(name); // Output: "Ada Bart"
console.log(breed); // Output: "Corgi"

// 9. JSON (Converting Objects to Strings and Back)
const someData = { name: "Blah Blah", isCool: true, nums: [1, 7, 9] };
const dataAsText = JSON.stringify(someData);
console.log(dataAsText); // Output: "{"name":"Blah Blah","isCool":true,"nums":[1,7,9]}"
const dataAgain = JSON.parse(dataAsText);
console.log(dataAgain.name); // Output: "Blah Blah"
