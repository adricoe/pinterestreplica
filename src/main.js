import './style.css'; 

// Components
import {  createHeader } from './components/Header/header.js'; 
import { createMainGridContainer, renderImages } from './components/MainGrid/MainGrid.js';
import {createFooter} from  './components/Footer/Footer.js'; 
import { createLoadingSpinner, removeLoadingSpinner } from './components/LoadingSpinner/LoadingSpinner.js';

//API Configuration
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY; 
const API_URL =    'https://api.unsplash.com/search/photos'  ;
const DEFAULT_QUERY = 'nature';

//Global DOM 
let imageGridContainer;


// Execution request to unsplash API, render imges or error message

async function fetchImages(query = DEFAULT_QUERY) {
    if (!imageGridContainer) {
        console.error("Image grid container is not mounted yet.");
        return;
    }

    const searchTerm = query.trim() || DEFAULT_QUERY;

    //Clear previous content and show loading spinner
    imageGridContainer.innerHTML = ''; 
    const loadingSpinner = createLoadingSpinner();
    imageGridContainer.appendChild(loadingSpinner);

    //API key validation
    if (!API_KEY) {
        console.error("Error: API Key is missing. Check your .env file.");
        removeLoadingSpinner();
        
        const errorMessage = document.createElement('p');
        errorMessage.className = 'no-results';
        errorMessage.textContent = 'ERROR: API Key is missing. Check your .env file.';
        imageGridContainer.appendChild(errorMessage);
        return;
    }

    try {
        const response = await fetch(`${API_URL}?query=${searchTerm}&client_id=${API_KEY}&per_page=30`);
        
        if (!response.ok) {
            // Unsplash returns 401 for bad keys or 403 for rate limits
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();

        //remove spinner n render images
        removeLoadingSpinner();
        renderImages(imageGridContainer, data.results);

    } catch (error) {
        console.error("Failed to load images from Unsplash:", error);
        removeLoadingSpinner();

        const errorMessage = document.createElement('p');
        errorMessage.className = 'no-results';
        // Generic msg afte API failure
        errorMessage.textContent = `Error: Failed to load images. Please check your API key and network connection.`;
        imageGridContainer.appendChild(errorMessage);
    }
}


//--- Init and DOM---
 
function initApp() {
    const appRoot = document.getElementById('app-root');
    if (!appRoot) {
        console.error( "Could not find the application root element (#app-root)."  );
        return ;
    }

    // # HEADER
    // Pass functions for Home button (reset) and search submission
    const headerComponent = createHeader(
        () => fetchImages(DEFAULT_QUERY), 
        fetchImages
    );
    appRoot.appendChild(headerComponent) ;

    // # GRID CONTAINER
    const mainContainer = createMainGridContainer(); 
    appRoot.appendChild(mainContainer);

    // # Set the global reference after mounting
    imageGridContainer = mainContainer.querySelector('#images-grid' );

    // # FOOTER
    const footerComponent = createFooter();
    appRoot.appendChild(footerComponent);

    // # Initial content
    fetchImages(DEFAULT_QUERY);
}

// Start the application#
initApp();