let arr=[0,1,2,3,4,5,6,7,8];

arr.forEach(function printVal(val) {           // Value at each index
    console.log(val);
})

arr.forEach((val)=>{           // Value at each index
    console.log(val);
})
let arr1=["Kolkata","Delhi","Mumbai","Hydrabad"];
arr1.forEach((val)=>{           // Value at each index
    console.log(val);
})

arr1.forEach((val,idx,arr1)=>{           // Value at each index
    console.log(val,idx,arr1);
})