// Practice Question 2
let gameNum=25;
let userNum=prompt("Guess the game number : ");
while(userNum!=gameNum) {
    userNum=prompt("You entered wirong number!..Guess game number again : ");
}
console.log("Congratulation!..you entered the right number...");