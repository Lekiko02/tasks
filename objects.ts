// objects.ts

// Example interface
interface Dog {
    name: string;
    age: number;
    breed: "Corgi" | "Chihuahua" | "Mutt";
    fuzzy: boolean;
}

// Example function
function makeCorgi(name: string): Dog {
    return { name: name, breed: "Corgi", age: 1, fuzzy: true };
}

// Example usage
const myDog = makeCorgi("Buddy");
console.log(myDog.name); // Output: "Buddy"
