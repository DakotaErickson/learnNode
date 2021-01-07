// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// } 

// const square = (x) => x * x
// console.log(square(25));

const event = {
    name: 'Birthday Party',
    guestList: ['Dakota', 'Samantha', 'Henry', 'Thomas'],
    // shorthand for a method definition to retain the `this` binding needed to print the name property
    printGuestList () {
        console.log('Guess list for ' + this.name);

        // arrow function used to avoid binding `this` to the function to retain the outside binding necessary for the name property
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name);
        })
    }
}

event.printGuestList();