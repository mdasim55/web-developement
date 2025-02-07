// 1. Question..
let product={
    size: 'S',
    fit: 'Full Fil',
    price: 599,
};

// 2. Questions..
let copyProduct=product;
console.log(product);
console.log(copyProduct);
copyProduct.size='M';
copyProduct.price=555;
console.log(product);

// 3. questions..
let product1={
    size: 'S',
    fit: 'Full Fil',
    price: 599,
    'delivery-Time': 'On the Same day.',
};
console.log(product['delivery-Time']);