let str="Apna College";
// Upper Case Strings--->
let newstr=str.toUpperCase();         
console.log(newstr);
console.log(str);

// Lower Case Strings--->
newstr=str.toLowerCase();             
console.log(newstr);
console.log(str);

// Trim Strings--->
str="      Apna College    js        ";
newstr=str.trim();
console.log(newstr);
console.log(str);

// Slice strings---> 
str="Hello!";
console.log(str.slice());
console.log(str.slice(1,4));
console.log(str.slice(1));
console.log(str.slice(1,6));

// Concat Strings--->
let str1="Apna ";
let str2="College ";
let result= str1+str2;      // 1
console.log(result);
result= str2+str1;          // 2
console.log(result);
result=str1.concat(str2);   // 3
console.log(result);
result=str2.concat(str1);   // 4
console.log(result);
result="I am learning coading from "+str1+str2;
console.log(result);

// Repalce string
str="Hello!";
str1="Hellololo";
console.log(str.replace("H","P"));
console.log(str1.replace("H","P"));
console.log(str.replace("lo","p"));
console.log(str1.replace("lo","p"));
console.log(str1.replaceAll("lo","p"));
console.log(str.replace("m","t"));          // Return original strings

// Strings Index --->
str="I Love Js";
console.log(str.charAt(0));                 // I
console.log(str[0]);                        // I
console.log(str.charAt(3));                 // o
console.log(str[3]);                        // o
console.log(str.charAt(5));                 // e
console.log(str[5]);                        // e
str[0]="S";                                 // Orijinal Strings not changes
console.log(str);