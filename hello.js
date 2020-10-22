// const header = document.querySelector('header');
// const section = document.querySelector('section');

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

        }).catch(err => {
            console.error(err);
        });
});

// let requestURL = 'https://content.guardianapis.com/search?q=results&api-key=930de680-1e77-42b1-90eb-1077cac50341';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function() {
//     const news = request.response;
//     populateHeader(news);
//     showNews(news);
// }

// function populateHeader(jsonObj) {
//     const myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj['webTitle'];
//     header.appendChild(myH1);

//     const myPara = document.createElement('p');
//     myPara.textContent = 'sectionName' + jsonObj['webTitle'];
//     header.appendChild(myPara);
// }

// function showNews(jsonObj) {
//     const headLine = jsonObj['results'];

//     for (let i = 0; i < headLine.length; i++) {
//         const myArticle = document.createElement('article');
//         const myH2 = document.createElement('h2');
//         const myPara1 = document.createElement('p');
//         const myPara2 = document.createElement('p');
//         const myPara3 = document.createElement('p');

//         myH2.textContent = headLine[i].type;
//         myPara1.textContent = 'sectionName: ' + headLine[i].sectionName;
//         myPara2.textContent = 'webPublicationDate: ' + headLine[i].webPublicationDate;
//         myPara3.textContent = 'webTitle:';

//     }


//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myPromise.appendChild(myPara3);

//     section.appendChild(myArticle);

// }