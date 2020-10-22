const myPromise = new Promise((resolve, reject) => {
    let hello = true;

    if (hello) {
        resolve('Hello World!');
    } else {
        reject('Connection refused');
    }
});

// myPromise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

const api = 'https://content.guardianapis.com/search?api-key=930de680-1e77-42b1-90eb-1077cac50341';

const getData = async() => {
    const response = await fetch(`${api}`);
    if (response.ok) {
        return await response.json();
    } else {
        return Promise.reject(response.status);
    }
};

const result = getData();
result
    .then((data) => {
        let sectionName = Object.keys(data.sectionName);
        let webPublicationDate = Object.keys(data.webPublicationDate);
        let webTitle = object.keys(data.webTitle);
        let webUrl = object.keys(data.webUrl);
        console.log(data);
    })