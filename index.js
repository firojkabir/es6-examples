// OBJECT DESTRUCTURING
const address = {
    street: '',
    city: '',
    country: '',
};

// old way
const street = address.street;
const city = address.city;
const country = address.country;

// ES6 way
// const { street, city, country } = address;
const { street: st } = address; // change the 'street' property by 'st' using allias 

// SPREAD OPERATOR
const first = [1, 2, 3];
const second = [4, 5, 6];

// old way
// const combined = first.concat(second);
// ES6 way
const combined = [...first, 'a', ...second, 'b']; // possible to insert new elements

const clone = [...first];
console.log(first);
console.log(combined);
