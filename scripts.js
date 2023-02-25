import { apiKey } from './key.js';

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.append(container);

const url = `https://api.thecatapi.com/v1/images/search?limit=15&api_key=${apiKey}`;


const loader = document.querySelector('.loader');

const hideLoader = () => {
    loader.classList.remove('show');
};
 
const showLoader = () => {
    loader.classList.add('show');
};

function fetchData() {
    console.log('TIT2');

    showLoader();
    console.log('TIT');

    fetch(url)

    .then(function(response) {
        console.log('TIT2');

    return response.json();
})
.then(function(data) {
    loadImages(data);
})
}

// fetch(url)
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     loadImages(data);
// })



function loadImages(data) {

        data.forEach(catElement => {
            console.log(catElement.url);

        const card = document.createElement('div');
        card.setAttribute('class', 'card'); 


        const id = document.createElement('h2');
        id.textContent = catElement.id;

        const image = document.createElement('img');
        image.setAttribute('class', 'image');
        image.src = catElement.url;

        container.appendChild(card);
        card.appendChild(id);
        card.appendChild(image);
        });
        hideLoader();
}

fetchData();

window.addEventListener('scroll', ()=> {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        fetchData();
    }
})

