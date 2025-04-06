let GifContainer = document.querySelector('.js-gif-container');
let StickerContainer = document.querySelector('.js-sticker-container');
let search = document.querySelector('.searchBTN');
let searchInput = document.querySelector('.search-input');

search.addEventListener('click', fetchGif);
search.addEventListener('click', fetchSticker);

async function fetchGif() {
    const keyAPI = 'JqmvYQRoKo3mKEnXit47ikgZRqWVDXVa';
    const URL= `https://api.giphy.com/v1/gifs/search?api_key=${keyAPI}&q=${searchInput.value}&limit=15`;
    const data = await fetch(URL);
    const response = await data.json();
    displayGif(response.data);
    return response.data;
}

async function fetchSticker() {
    const keyAPI = 'JqmvYQRoKo3mKEnXit47ikgZRqWVDXVa';
    const URL= `https://api.giphy.com/v1/stickers/search?api_key=${keyAPI}&q=${searchInput.value}&limit=15`;
    const data = await fetch(URL);
    const response = await data.json();
    displaySticker(response.data);
    return response.data;
}

function renderGif(data) {
    return `
            <img class="gif-item"
                src="${data.images.original.url}" 
                alt="${data.title}" />
    `;
}

function renderSticker(data) {
    return `
            <img class="sticker-item"
                src="${data.images.original.url}" 
                alt="${data.title}" />
    `;
}

function displayGif(gifData) {
    GifContainer.innerHTML = gifData
        .map(gif => renderGif(gif))
        .join('');
}

function displaySticker(stickerData) {
    StickerContainer.innerHTML = stickerData
        .map(sticker => renderSticker(sticker))
        .join('');
}