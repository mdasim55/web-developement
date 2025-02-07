let product= {
    name:'T-Shirt',
    price: 999,
    ratings: {
        stsrs: 4.5,
        noOfRivew: 555,
    },
};
console.log(typeof product);
console.log(product);

// Convert Objects to string.....
let str=JSON.stringify(product);
console.log(typeof str);
console.log(str);

// Convert Strin g to Objects...
let newProduct=JSON.parse(str);
console.log(typeof newProduct);
console.log(newProduct);