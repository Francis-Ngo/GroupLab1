/*
I)
  A.
    1. Use '=' operator
    2. Use '=' operator
    3. let var1 = 0;
        let var2 = var1;
    4.  Declaring is 'let, const, var' and saying this exists.
        Assigning is giving it a value with a equals sign.
        Define was a function used to define modules before ES6 I think?
        Define might also be referring to creating a function and stating what its input, output, and other behaviors are.
    5. A outline/blueprint of your code and logic before writing. It is to streamline your ideas i.e. planning out your flexbox in a grid.
    6. Depending on the complexity of your problem, the more complex it is the more time is needed to spend on planning out the problem.



  B.
    1. 
  */
let firstVariable;
// 2.
firstVariable = 'Hello World';
// 3.
firstVariable = 123;
// 4.
let secondVariable = firstVariable;
// 5.
secondVariable = 'Im hungry'
// 6.
console.log(firstVariable);
// It'll be 123
// 7. 
let yourName = 'BlackPink';
let expression = 'Hello, my name is ';
let greeting = expression + yourName;
console.log(greeting)

// C.
// 1.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!false || false); 
console.log(e == "Kevin");
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

// D. 

let animal = "cow";
if(animal == "cow"){
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow");
}

// E.

let personAge = 15;

if(personAge >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young");
}

// II. 

// A.

for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i = 10; i < 401; i++){
    console.log(i);
}

for(let i = 12; i < 4001; i += 3){
    console.log(i);
}

// B. 

for(let i = 1; i < 101; i++){

    if(i % 2 == 0){
        console.log(i, " <--- is an even number");
    }else{
        console.log(i);
    }
    
}

// C.

for(let i = 0; i < 101; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("I found a ", i, " Three is a crowd. High five!");
    }else if(i % 5 == 0){
        console.log("I found a ", i, " High five!");
    }else if(i % 3 == 0){
        console.log("I found a ", i, " Three is a crowd.");
    }
}

// D. 

let bank_account = 0;

for(let i = 1; i < 11; i++){
    bank_account += i;
}

console.log(bank_account);

let bankAccountDoubled = 0;

for(let i = 1; i < 101; i++){
    bankAccountDoubled = bankAccountDoubled + i * 2;
}

console.log(bankAccountDoubled);

/* III.

A. 
    1. Elements or items
    2. The elements will not always be in order, but the indexes will always be from 0 ... length of array - 1 in order
    3. list of all types (ie: grocery, parking spots, movies)

*/

// B.
const quotes = ["Quoth the raven", "nevermore", "something something"];

// C. 

const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);
randomThings[2] = "World";
// we check via console logging
console.log(randomThings[2]);

// D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");

console.log(ourClass);

//E.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon", "Hogar");
console.log(myArray);
myArray.shift() ;
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
//5. Yes we did. Mutate means that we changed the array that we used the method on. It return the array reversed. 


//F.  
let numberF = 7
if (numberF < 100){
    console.log("little number")
}else {
    console.log("big number")
}


//G.
if (numberF <5){
    console.log("little number") 
} else if (numberF > 10){
    console.log("big number") 
} else{
    console.log("monkey") 
}

//H.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

const thomsCloset = [
    [
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up"
    ],[
        "grey jeans",
        "jeans",
        "PJs"
    ],[
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

console.log("Kristyn is rocking that", kristynsCloset[2], " today!");

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][0]);

console.log("Thom is looking fierce in a",thomsCloset[0][0],",",thomsCloset[1][0],", and",thomsCloset[2][0]);

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// IV.

const printGreeting = (name) => {
    return "Hello there, " + name;
};

console.log(printGreeting("Cynthia"));

function printCool(name){
    return name + " is cool!";
}

console.log(printCool("DJ"));

const calculateCube = (number) => number ** 3;

console.log(calculateCube(3));

const isVowel = (character) => {
    const lower = character.toLowerCase();
    if(lower === "a" || lower === "e" || lower === "i" || lower === "o" || lower === "u"){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel("A"));
console.log(isVowel("e"));
console.log(isVowel("I"));
console.log(isVowel("O"));
console.log(isVowel("U"));
console.log(isVowel("z"));
console.log(isVowel("zebra"));

const getTwoLengths = (string1, string2) => {
    return [string1.length, string2.length];
}

console.log(getTwoLengths("Barbie", "Ken"));

// const getMultipleLengths = (array) => {
//     const returnArray = [];
//     for(item of array){
//         returnArray.push(item.length);
//     }
//     return returnArray;
// }

// const getMultipleLengths = (array) => {
//     const returnArray = [];
//     array.forEach((item) => {
//         returnArray.push(item.length);
//     })
//     return returnArray;
// }

const getMultipleLengths = (array) => {
    let returnArray = array.map((item) => {
        return item.length;
    });
    return returnArray;
}

console.log(getMultipleLengths(["Barbie", "Ken", "Shrek"]));

const maxOfThree = (a, b, c) => {
    if(a > b && a > c){
        return a;
    }else if(b > c){
        return b;
    }else{
        return c;
    }
}
console.log(maxOfThree(2, 1, 1));

const longestWordArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

const printLongestWord = (array) => {
    let returnArray = [];
    for(item of array){
        returnArray.push(item.length);
        console.log(returnArray);
    }
    const index = returnArray.indexOf(Math.max(...returnArray));
    return array[index];
}

console.log(printLongestWord(longestWordArray));


//Objects
// A Make a user Object
const user = {
    name : "Francis", 
    email : "francis@yahoo.com", 
    age : 0, 
    purchased : []      
    };

// B Update the User
// 1.
user.email = "francis@gmail.com";
console.log(user.email);

//let existingUser = user("Francis", "unknown", 32, []);
//let updatedUser = {
//    ...existingUser,
//    email: "francis@gmail.com"
//};

//console.log(existingUser); 
//console.log(updatedUser);  


//2. 
user.age = user.age ++;
console.log(user.age)

//updatedUser = {
//    ...existingUser,
//    age: existingUser.age + 1
//    };
//console.log(existingUser); 
//console.log(updatedUser);  
//user.age = age++

// C Adding Keys and Values
//1.
user.location = "unknown";

// D Shopaholic
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased); 

//E Object-within-object
user.friend = {
    name:"Seymour Projechts",
    age:"30",
    location:"Russia",
    purchased:[]
};
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased);

//F Loops
//1
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

//2
for (let i = 0; i <user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

//G Functions can operate on objects
//1
const updateUser = () => {
    user.age += 1;
    user.name =user.name.toUpperCase();
};

updateUser();
console.log(user.age);
console.log(user.name);

//2
const oldAndLoud = (person) => {
    person.age +=1;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user)
console.log(user.age);
console.log(user.name);

//1 Define Mama cat
const cat1 = { name: "mamaCat", breed: "Calico", age: 3 };
console.log(cat1.breed);
console.log(cat1.age);

//2 Define Papa cat
const cat2 = { name: "papaCat", breed: "Egyptian", age: 3 };
console.log(cat2.breed);
console.log(cat2.age);

// CombineCats2 function (it won't run if we use combineCats because it is already declared)
const combineCats = (mama, papa) => {
    const combinedCat = {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + "-" + papa.breed
    };
    return combinedCat;
};

// Call combineCats function with cat1 and cat2 as arguments
combineCats(cat1, cat2);
console.log(cat1, cat2);

// calling combineCats with three layers 😱
console.log(
    combineCats(
      combineCats(
        combineCats(cat1, cat2),
        combineCats(cat1, cat2)
      ),
      combineCats(
        combineCats(cat1, cat2),
        combineCats(cat1, cat2)
      )
    )
  );











