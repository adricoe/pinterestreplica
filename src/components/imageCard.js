import { createUserPic } from './UserPic.js';
//import { createEditButton } from './EditButton.js'; 

const createVisitButton = () => { 
    const btn = document.createElement('button'); 
    btn.className = 'visit-button'; 
    btn.textContent = 'Visit'; 
        return btn; 
};

const createShareButton = () => { 
    const btn = document.createElement('button'); 
    btn.className = 'share-button'; 
        return btn; 
};

const createLikesBadge = (likes) => { 
    const div = document.createElement('div'); 
    div.className = 'likes-badge'; 
    div.textContent = (likes || 0).toLocaleString(); 
        return div; 
};


//------------------------------

/*
function createEditButton() {
    const button = document.createElement('button');
    button.className = 'edit-button'; 
    button.textContent = '✏️'; 
    return button;
}
*/

// ----------------------------------------------------------------------


export function createImageCard(image) {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.setAttribute('data-id', image.id);


    //wrapper with all elmts and hoover
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';


    //main img
    const imgEl = document.createElement('img');
    imgEl.src = image.urls.regular;
    imgEl.alt = image.alt_description || 'Imagen';
    
    //overlay opacity
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';


    // botones and badges
    const visitButton = createVisitButton();
    const shareButton = createShareButton();
    const likesBadge = createLikesBadge(image.likes);
    //const editButton = createEditButton(); // 


    // Info user
    const userEl = createUserPic(image.user, image.created_at);


    // Assemble all wrap 
    imageWrapper.appendChild(imgEl);
    
    // Act button (Visit)
    imageWrapper.appendChild(visitButton); 
    
    // badge likes
    imageWrapper.appendChild(likesBadge); 

    //overlay
    imageWrapper.appendChild(overlay); 

    //user info
    imageWrapper.appendChild(userEl); 

    //share button
    imageWrapper.appendChild(shareButton);
    
    // imageWrapper.appendChild(editButton); // 


    // final card
    card.appendChild(imageWrapper);

    return card;
}