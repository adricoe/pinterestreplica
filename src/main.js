// ------------------ API UNPLASH ----------------------------------------------------------------------------------------------------------------
const API_KEY = 'B_Ukv4lFJW218-YHsgvKrzroupvOIs_MxZZwoqYG_pg'; 
const API_URL = 'https://api.unsplash.com/search/photos';







import { createSearchBar } from './components/searchBar.js';

import { createImageGrid, renderImages } from './components/imageGrid.js';






// ------------------ DOM ---------------------------------------------------------------------------------------------------------------
const searchContainer = document.getElementById('search-container');
const imagesGrid = document.getElementById('images-grid');
const logo = document.getElementById('logo');




//========================= MAIN DATA FUNCTIONS ===========================================================================================================
//1st request to API unplash and then it renders imgs
async function fetchImages(query = 'nature') {
    try {
        const search = query ? query.trim() : 'nature'; 

        //Show loading:
        imagesGrid.innerHTML = '<div class="loading">Cargando imágenes...</div>'; 

        //API request:
        const response = await fetch(`${API_URL}?query=${search}&client_id=${API_KEY}&per_page=20`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); //gives back an error like 404
        }
        
        const data = await response.json();

        renderImages(data.results, imagesGrid);
    } catch (error) {
        console.error('Error fetching images:', error);
        // error msg :
        imagesGrid.innerHTML = `<div class="loading" style="color: #e60023;">Error: No se pudieron cargar las imágenes. Por favor, revisa tu clave API y conexión.</div>`;
    }
}




//==================  INITIAL EVENTS ===========================================================================================================

if (logo) {
    logo.addEventListener('click', () => {
        // Nature by default
        fetchImages('nature');
    });
}






// ------------------ INIT -----------------------------------------------------------------------------------------------------------------------

// For searchbar
if (searchContainer) {
    createSearchBar(searchContainer, fetchImages);
}


// grid for img
if (imagesGrid) {
    createImageGrid(imagesGrid);
}

// initial default
fetchImages('nature');