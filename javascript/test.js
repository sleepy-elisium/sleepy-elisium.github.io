//Kommentar eine Zeile
/* Kommentar mehr Zeilen */

const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const skyIsBlue = false;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    
    console.log("The sky is green!");
}

const tempHeute = 12

if (tempHeute >= 22) {
    console.log("kalt");
} else if (tempHeute >= 20) {
        console.log("warm");
} else {
    console.log("warm");
}

let katzenZuHause = 0; //let ist eine Variable, im Gegensatz zur Konstante kann sie sich verändern, immer das verwenden, was am wenigsten kann, dann geht weniger kaputt
while (katzenZuHause < 10) {
    katzenZuHause++;
}
console.log(katzenZuHause);

let elisasZuHause = 0;
for (let i = 0; i < 10; i++){
    elisasZuHause++;
}
console.log(elisasZuHause);


const character = "a";
const timesToRepeat = 50;
let answer = "";

for (let i = 0; i <= timesToRepeat; i++){    
    answer += character;
}

console.log(answer);

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5)
console.log(finalAnswer);

console.log(addTwo(100));

function logOutHome(city, state, country){
    console.log(`You are from ${city}, ${state}, ${country}`);
}

const myCity = "Hannover";
const myState = "Niedersachsen";
const myCountry = "Deutschland";

logOutHome(myCity, myState, myCountry);

const satz = "VjJJmmm kskdjs KKj jaJJJ";
console.log(satz.toLowerCase());

console.log(Math.round(5.5));

const katze = {
    name: "Conan",
    speak() {
        console.log("meow");
    }
};

katze.name = "Paula";

console.log(katze.name);

katze.speak();

const daysOfTheWeek = [
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So",
]

console.log(daysOfTheWeek.join("df"));
console.log(daysOfTheWeek[2]);

const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
  ];

courses.forEach(function(gibListeAus, index) {
    console.log(index, gibListeAus);
});

