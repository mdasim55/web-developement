// Push Methods in an array -->
let fooditmes=["Potato","Apple","Mango","Litchi","Tomato"];
console.log(fooditmes);
fooditmes.push("Tamarind","Papaya","Watermelon");
console.log(fooditmes);

// Pop Methods in an array -->
let deletedItme=fooditmes.pop();
console.log("Deleted itme is: ",deletedItme);
console.log(fooditmes);

// toString Methods in an array -->
console.log(fooditmes.toString());
console.log(fooditmes);

// concat Methods in an array -->
let marvelHeroes=["Ironman","Spiderman","Thor","Hulk","Dc.Strange"];
let dcHeroes=["Superman","Barman","Flash"];
let heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);
let indianHeroes=["Krish","Shaktiman"];
heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// unshift Methods in an array -->
marvelHeroes.unshift("Antman");             // Add frist of the array
console.log(marvelHeroes); 
let val=marvelHeroes.shift();               // Remove first from the array
console.log("The deleted value is : ",val);

// Slice Methods in an array -->
console.log(marvelHeroes.slice(1,3));


// Splice Methods in an array -->
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
arr.splice(2,2,101,103);
console.log(arr);               // Replaces elements
arr.splice(3,0,201,203);
console.log(arr);               // Add elements
arr.splice(2,1);
console.log(arr);               // Replaces
arr.splice(2,1,500);
console.log(arr);               // Replaces
