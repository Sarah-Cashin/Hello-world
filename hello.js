const myPromise = new Promise((resolve, reject) => {
    let hello = true;

    if (hello) {
        resolve('Hello World!');
    } else {
        reject('Connection refused');
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})


const news = new Promise((resolve, reject) => {
    fetch("https://content.guardianapis.com/search?api-key=930de680-1e77-42b1-90eb-1077cac50341", {

        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
});