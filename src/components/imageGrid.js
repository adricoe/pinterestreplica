import { createImageCard } from './imageCard.js';

//Function to create or init grid 




export function createImageGrid(container) {
    if (!container.id) {
        container.id = 'images-grid';
    }
}





//function to render imgs. Call createImageCard

export function renderImages(images, container) {
    //A. Clean existent content
    container.innerHTML = ''; 

    //B. Iterate and create a card for every image
    images.forEach(image => {
        //It includes the userpic
        const card = createImageCard(image);
        container.appendChild(card);
    });
}