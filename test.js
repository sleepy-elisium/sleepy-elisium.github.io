

const isSkyBlue = true;

if (isSkyBlue) {
    console.log("Sky is Blue");
} else {
    console.log("Sky is not blue");
}

let friendsAtYourParty = 0;

while (friendsAtYourParty < 10) {
    friendsAtYourParty++;
    //console.log(friendsAtYourParty);
}

friendsAtYourParty = 0;

for (let i = 0; i < 10; i++){
    friendsAtYourParty++;
}
console.log(friendsAtYourParty);

let character = "Conan";
let timesToRepeat = 4;
let myString = "";

for (let i = 0; i < timesToRepeat; i++){
    myString = myString + character;
};
console.log(myString);


function addTwo(value) {
    return value + 2;
}
finalAnswer = addTwo(5);
console.log(finalAnswer);


function addThree(value) {
    return value + 3;
}
finalAnswer = addThree(8);
console.log(finalAnswer);

//Objekte können auch eine eigene Funktion haben (method)
const dog = {
    name: "dog",    
    sound: "woof woof",
    // Hier wird die Funktion erstellt
    speak() { 
      console.log(dog.sound);
    }
};
const cat = {
    name: "cat",    
    sound: "meow",
    // Hier wird die Funktion erstellt
    speak() { 
      console.log(cat.sound);
    }
};  
let pet = dog;
  // Funktion wird auferufen
pet.speak();
  
// Hier haben wir ein Array
const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Lensday",
    "Furrsday",
    "Shaturday",
    "Sunflowerday",
];

console.log(daysOfTheWeek[2]);
console.log(daysOfTheWeek.length);
console.log(daysOfTheWeek.join(" - "));

const courses = [
    { teacher: "Conan", course: "Moew like a pro"},
    { teacher: "Elisa", course: "Sleep really late"},
    { teacher: "Mama", course: "Einfach mal richtig machen"},
    { teacher: "Mama die Große und Schreckliche", course: "Tablet bestellen für Profis."},
    { teacher: "Marie", course: "So viele Nähmaschinen habe ich"},
];

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

courses.push({ teacher: "Jens", course: "Wann wird der Müll abgeholt?" });

let newList = [];
courses.forEach(function (entry) {
    let item = entry.teacher;
    newList.push(item);
});

console.log(newList);

console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

let allMamaKurse = []
courses.forEach(function (entry) {
    if (entry.teacher.includes("Mama") ) {
        let item = entry.teacher;
        allMamaKurse.push(item);
}  
});

console.log(allMamaKurse);

const flexitem = document.querySelector('.flexrow');
flexitem.addEventListener('click', function () {
    alert('Hui');
}); 
