let GifContainer = document.querySelector('.js-gif-container');
let StickerContainer = document.querySelector('.js-sticker-container');

async function fetchGif() {
    const data = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=JqmvYQRoKo3mKEnXit47ikgZRqWVDXVa&q=${search}&limit=25&offset=0`);
    const response = await data.json();
    categories = response.categories;
    return {
        
    };
}