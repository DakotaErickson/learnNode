// Object property shorthand

const name = 'Dakota';
const userAge = 29;

const user = {
    name,
    age: userAge,
    location: 'Wichita'
};
//console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// old way
// const label = product.label;
// const stock = product.stock;
// console.log(label);
// console.log(stock);


// destructuring syntax. trying to access properties that don't exist give `undefined` unless a default value is provided
// you can rename the variable you create as done below with stock
// const {label, stock:productStock, rating = 5} = product;
// console.log(label);
// console.log(productStock);
// console.log(rating);

const transaction = (type, { label = 'defaultLabel', stock = -1 } = {}) => {
    console.log(type, label, stock);
}

transaction('order');