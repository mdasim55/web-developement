let marks=[96,777,66,83,55];
console.log(marks);
console.log(marks.length);              // marks.length --> Property
console.log(typeof marks);

let heroes=["Ironman","Spidrman","Antman","Thor","Hulk","Batman","CaptainAmerica"];
console.log(heroes);
console.log(heroes.length);              // marks.length --> Property
console.log(typeof heroes);

// Print using for loops-->  
for(let i=0;i<heroes.length;i++) {
    console.log(heroes[i]);
}
    
// Print using for of loops-->
for(let hero of heroes) {
    console.log(hero);
}

let cities=["Delhi","Mumbai","Kolkata","Hydrabad","Banglore","Chennai","Pannjab","Rajasthan","Gujhrath","Lucknow"];
for(let city of cities) {
    console.log(city.toUpperCase());
}