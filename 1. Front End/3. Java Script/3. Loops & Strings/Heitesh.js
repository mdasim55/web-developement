/*
// 1. For Basic Array...
const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
for(const i of arr) {
    console.log(i);
}

// 2. For String Array...
const greatings="Hello World!";
for (const ch of greatings) {
    console.log(`Each character is: ${ch}`);
}

// 3. Maps Keyword          ----> It is used only unic value
const map=new Map();
map.set("IN","India");
map.set("USA","United State America");
map.set("AUS","Australia");
map.set("Nz","NewZealand");
map.set("IN","India");          // It is don`t repeat because it is used only unic value
//console.log(map);
//for (const key of map) {
//    console.log("key=",key,)
//}
for (const [key,value] of map) {
    console.log(key,":- ",value);
}

// For in Loop----->
const myObject={
    js:"JavaScript",
    cpp:"C plu plus",
    rb:"Ruby",
    swift:"Swift by apple",
};
// console.log(myObject);                   // it does`not print the objects
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// In For loop printing the array-->
const programming=["C","C++","Python","Java","HTML","CSS","JavaScriot"];
for(const key in programming) {
    //console.log(key);                       // It returns the array index..
    console.log(programming[key]);            // It returns the array value..
}

// 6. ForEach Loop------>'
const language=["C","C++","Python","Java","HTML","CSS","JavaScriot"];
// //  i> Type 1
// language.forEach(function(val) {
//     console.log(val);
// });

//  ii> Type 2
// language.forEach((val)=> {
//     console.log(val);
// });

//  iii> Type 3
//function printMe(item) {
//    console.log(item);
//}
//language.forEach(printMe);

//  iv> Type 4
language.forEach((item,index,arr)=> {
    console.log(item,index,arr);
});
*/

// For Each Loop in an array object.....
const myCoding=[
    {
        langName:"javaScript",
        langCode:"js"
    },
    {
        langName:"Pyhon",
        langCode:"py"
    },
    {
        langName:"C Plus Plus",
        langCode:"cpp "
    },
    {
        langName:"stylesheet",
        langCode:"css"
    }
]
myCoding.forEach((item)=> {
    console.log(item.langName);
    console.log(item.langCode);
});