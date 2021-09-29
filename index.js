// VAR, LET, CONST
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
}

sayHello();


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
// console.log(first);
// console.log(combined);

// SPREAD OPERATOR in OBJECTS
const name = { name: 'Rimon' };
const status = { occupation: 'Student' };

const addThem = { ...name, ...status, location: 'Germany' };
// console.log(addThem)


// INHERITANCE
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        // console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        // console.log("teach")
    }
}

const teacher = new Teacher("Rimon", "MSc");

