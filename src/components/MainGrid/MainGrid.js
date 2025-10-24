import './MainGrid.css';
import { createImageCard } from '../ImageCard/ImageCard.js';

/* Creates and returns the main grid container elemnt.*/
export function createMainGridContainer() {
    const main  = document.createElement('main');

    /*Inner container for img cards*/
    const grid = document.createElement('div');
    grid.id = 'images-grid'; 
    
    main.appendChild(grid);
    return main;
}
/*Renders img-card into the provided container based on img array*/
export function renderImages(container, images) {
    if (!container) {
        console.error("The image grid container is not available.");
        return;
    }

    /*Clear previous images*/
    container.innerHTML = '';
    
    if (images && images.length > 0) {
        images.forEach(image => {
            const card = createImageCard(image) ;
            container.appendChild(card);
        });
    } else {
        // no found msg
        const message = document.createElement('p');
        message.className =   'no-results';
        message.textContent =   'No results found. Try a different search term.';
        container.appendChild(message);
    }
}