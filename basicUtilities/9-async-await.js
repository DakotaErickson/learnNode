const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0){
                return reject('Only add postive integers');
            }
            resolve(a + b);
        }, 2000);
    })
}

const doWork = async () => {
    const sum = await add(3, 4);
    const sum2 = await add(sum, 3);
    const sum3 = await add(sum2, -3);
    return sum3;
};

doWork().then(result => {
    console.log('Result: ', result);
}).catch(e => console.log('Error: ', e))