setTimeout(() => {
    console.log('2 seconds are up!')
}, 2000)

const names = ['Dakota', 'Samantha', 'Henry', 'Thomas'];
const shortNames = names.filter(name => names.length <= 5)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
    
        callback(data);
    }, 2000)
}

geocode('Wichita', data => console.log(data));

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y);
    }, 2000)
}

add(1, 4, sum => console.log(sum));