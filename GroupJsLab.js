

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


// Defined combineCats function
const combineCats = (mama, papa) => {
    console.log("Mama Cat", mama); 
    console.log("Papa Cat", papa); 
};

// Call combineCats function with cat1 and cat2 as arguments
combineCats(cat1, cat2);
console.log(cat1, cat2);

// CombineCats2 function (it won't run if we use combineCats because it is already declared)
const combineCats2 = (mama, papa) => {
    const combinedCat2 = {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + "-" + papa.breed
    };
    return combinedCat2;
};

// Call combineCats function with cat1 and cat2 as arguments
const combinedResult = combineCats2(cat1, cat2);
console.log(combinedResult);