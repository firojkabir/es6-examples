//OBJECT DESTRUCTURING
const address = {
    street: '',
    city: '',
    country: '',
};

// previous style
const street = address.street;
const city = address.city;
const country = address.country;

// ES6 style
const { street, city, country } = address;
const { street: st } = address; // change the 'street' property by 'st' using allias 
