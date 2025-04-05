let GifContainer = document.querySelector('.js-gif-container');
let StickerContainer = document.querySelector('.js-sticker-container');
let search = document.querySelector('.searchBTN');

search.addEventListener('click', async () => {
    const searchValue = search.value;
    const gifData = await fetchGif(searchValue);
    const stickerData = await fetchSticker(searchValue);
    displayGif(gifData);
    displaySticker(stickerData);
});

async function fetchGif() {
    const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=JqmvYQRoKo3mKEnXit47ikgZRqWVDXVa&q=${search}`);
    const response = await data.json();
    categories = response.categories;
    return {
        
    };
}