import './ImageCard.css';

/*Creates and returns img-card elemnt based on unplashed img data*/
export function createImageCard(imageData) {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.dataset.id = imageData.id;

    /*Image Wrapper*/
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    const img = document.createElement('img');
    img.src = imageData.urls.regular;
    img.alt = imageData.alt_description || 'Pinterest Image';
    img.loading = 'lazy'; 

    /*Card Overlay for hover effects*/
    const cardOverlay = document.createElement('div');
    cardOverlay.className = 'card-overlay';

    /*Visit Button (Pinterest style)*/
    const visitButton = document.createElement('a');
    visitButton.className = 'visit-button';
    visitButton.href = imageData.links.html;
    visitButton.target = '_blank';
    visitButton.rel = 'noopener noreferrer';
    visitButton.textContent = 'Visit';

    /*Likes Badge*/
    const likesBadge = document.createElement('span');
    likesBadge.className = 'likes-badge';
    likesBadge.textContent = imageData.likes;

    /*Share Button*/
    const shareButton = document.createElement('button');
    shareButton.className = 'share-button';
    shareButton.title = 'Share';

    /*User Info*/
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const userImg = document.createElement('img');
    userImg.className = 'user-img';
    userImg.src = imageData.user.profile_image.medium;
    userImg.alt = imageData.user.name;

    const userDetails = document.createElement('div');
    userDetails.className = 'user-details';

    const userName = document.createElement('p');
    userName.className = 'user-name';
    userName.textContent = imageData.user.name;

    const uploadDate = document.createElement('p');
    uploadDate.className = 'upload-date';

    /*Format date*/
    const date = new Date(imageData.created_at);
    uploadDate.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    /* Assembly */
    userDetails.appendChild(userName);
    userDetails.appendChild(uploadDate);
    userInfo.appendChild(userImg);
    userInfo.appendChild(userDetails);

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(cardOverlay);
    imageWrapper.appendChild(visitButton);
    imageWrapper.appendChild(likesBadge);
    imageWrapper.appendChild(shareButton);
    imageWrapper.appendChild(userInfo);

    card.appendChild(imageWrapper);

    return card;
}