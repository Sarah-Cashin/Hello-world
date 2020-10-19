const myPromise = new Promise((resolve, reject) => {
    let connection = true;

    if (connection) {
        resolve('Connection established');
    } else {
        reject('Connection refused');
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})