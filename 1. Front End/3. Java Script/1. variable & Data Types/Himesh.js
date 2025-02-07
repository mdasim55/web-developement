const accountId=1234;
let accuntEmail="hitesh@1234.com";
var accountPass="12345";
city="Bangaluru";       // it cannot gives error because in javaScript it is possible.
let accountState;
console.table([accountId,accuntEmail,accountPass,city,accountState]);
//accountId=23345;
//console.log(accountId);    // it is not exectue because const variable value cannot be changed.

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/