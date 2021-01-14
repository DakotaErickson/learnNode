const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}

// consecutive asynchronous activities. this gets too nested and complex
// add(3, 4).then((sum) => {
//     console.log(sum);

//     add(sum, 7).then((sum2) => {
//         console.log(sum2);
//     }).catch(e => console.log(e));


// }).catch( e => console.log(e));


// promise chaining is more clear and concise. simply follow one .then() call by the next .then() returning a promise from the first.

add(3, 4).then((sum) => {
    console.log(sum);
    return add(sum, 7);
}).then((sum2) => {
    console.log(sum2);
}).catch(e => console.log(e));