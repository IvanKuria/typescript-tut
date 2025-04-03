let hobbies = ["sports", "cookies"];

// hobbies.push(10);

// let users: (string | number)[]; // array of strings or numbers

let users: Array<string | number>; // generic type

users = [1, "Ivan"];
users = ["Dog", 4];


// let possbileResults: [number, number]; // an array with only 2 numbers. know ans tuples

// object types
let user: {
    name: string,
    age: number | string,
    hobbies: string[],
    role: {
        description: string,
        id: number,
    }
} = {
    name: "Max",
    age: 38,
    hobbies: ["Sports", "Jogging"],
    role: {
        description: "admin",
        id: 5,
    }
}

// can store any type that isn't null/undefined (not related to object types)
let val: {} = "some text"

// used when you are unsure of what the key: val will be
let data: Record<string, number | string>;

data = {
    entry1: "2",
    entry2: "some string",
}