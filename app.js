function randomNumber(min, max) {
    return (Math.random() * (max - min)) + min;
}

class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull; 
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    hit(opponent) {
        if (this.accuracy >= 0.8) {
            opponent.hull -= this.firepower;
        }
        return opponent.hull;
    }
}


const ussSchwarzeneggerHullValue = 20; //side note: avoid 'magic numbers'
const ussSchwarzeneggerFirepowerValue = 5;
const ussSchwarzeneggerAccuracyValue = 0.8;

const ussSchwarzenegger = new Ship(ussSchwarzeneggerHullValue, ussSchwarzeneggerFirepowerValue, ussSchwarzeneggerAccuracyValue);

const alienShips = [];

for (let i = 0; i < 10; i++) {
    const alienHullValue = Math.floor(randomNumber(3, 6));
    const alienFirepowerValue = Math.floor(randomNumber(2, 4));
    const alienAccuracyValue = randomNumber(0.6, 1);

    const alien = new Ship(alienHullValue, alienFirepowerValue, alienAccuracyValue); //start class names with uppercase.

    alienShips.push(alien);
}

// start the game
// wither uss hull is smaller than or equal 0
// or all of alien ships are destoyed

alert("Welcome to Alien Battle!");
alert("Do you have what it takes to defeat the evil space alien before it takes over the univere?");

while (ussSchwarzenegger.hull >= 0 || alienShips.length != 0) { //when you destroy alien ship it removes it from the array. when destroy it "pop it" to remove it from the array and length ==0

    const currentAlienShip = alienShips[alienShips.length - 1];

    const action = prompt(
        `[Current Health: ${ussSchwarzenegger.hull}] [Target's Health: ${currentAlienShip.hull}] [Enemies Remaining: ${alienShips.length}]
    What do you want to do, attack or retreat?`, "attack");

    if (action == "retreat"){
        break; // break exists the entire loop
    }
    else if (action !== "attack"){
        alert("I don't understand. Choose attack or retreat.")
        continue; //continue is a keword that will skip to the end of the loop and then goes back to the start for you to test again. 
    }

    // always hitting the last shipp in the ships array

    /**
     
       alienShips list -> | 0 | 1 | 2 | 3 | 4 | 5 |    LENGTH = 6
       
       AFTER A POP
       
       alienShips list -> | 0 | 1 | 2 | 3 | 4 |    LENGTH = 5
     
     */

    

    ussSchwarzenegger.hit(currentAlienShip)

    if (currentAlienShip.hull <= 0) {
        alienShips.pop();
    } else {
        currentAlienShip.hit(ussSchwarzenegger);
        
    }

    

}


alert('Gameover!');


// A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again
// Etc.
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.



// //Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
// firepower is the amount of damage done to the hull of the target with a successful hit.
// accuracy is the chance between 0 and 1 that the ship will hit its target.
// Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using Math.random() 
// If the ship's accuracy is 0.8 - then if the number generated from Math.random() is less than or equal to 0.8 then the attack will be successful. If the value is greater than  0.8 then the attack has missed. 
// Adjust the accuracy based on the specs for each ship

// Your spaceship, the USS Schwarzenegger should have the following properties:
// hull - 20
// firepower - 5
// accuracy - .7

// alert("Welcome to Alien Battle!");
// alert("Do you have what it takes to defeat the evil space alien before it takes over the univere?");
// const userName = prompt('Enter your Battle Name', '--');

// alert("Hello " + userName);

// while(action !== "attack"){
//     action = prompt("What do you want to do, attack or retreat?", "attack");
// }


// const ussSchwarzeneggerHitResult = ussSchwarzenegger.hit(alien);

// if (ussSchwarzeneggerHitResult <= 0) {
//     alert('Destroyed!');
// } else {
//     alien.hit(ussSchwarzenegger);
// }





// USS_Schwarzenegger.hit(alien);
// console.log("You made a hit. The alien hull is now at " + alien.hull + " strength.");
// 
// if (alien.hull > 0){
//     console.log("now they attack");
// }
// 
// alien.hit(USS_Schwarzenegger);
// console.log("They made a hit. Your hull is now at " + USS_Schwarzenegger.hull + " strength.");
// 
// USS_Schwarzenegger.hit(alien);
// console.log("You made a hit. The alien hull is now at " + alien.hull + " strength.");