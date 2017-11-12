let asyncAdd = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    })
}
let a = 2;
// let a = 'cat';
let b = 4;

asyncAdd(a, b).then( (res) => {
    console.log(`Result: ${ res }`);
    return asyncAdd(res, 33); // promise chaining
}, (err) => {
    console.log(err);
}).then((res) => { // resolve of the second promise
    console.log(`new result ${ res }`);
}, (err) => {
    console.log(err);
})

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         // resolve("Hey it worked");
//         reject('unable to fullfill promise');
    
//     }, 2500)
// });

// somePromise.then((message) => {
//     console.log('Success', message);
// }, (errorMessage) => {
//     console.log('Error', errorMessage);
// });

