// src/components/UserPic.js

// aux function to reset date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }; 
    return date.toLocaleDateString('es-ES', options);
}

export function createUserPic(user, createdAt) {

    //Main container userinfo
    const userDiv = document.createElement('div');
    userDiv.className = 'user-info'; 
    

    //username
    const nameEl = document.createElement('div');
    nameEl.textContent = user.name; 
    nameEl.className = 'user-name';


    //Upload date
    const dateEl = document.createElement('div');
    dateEl.className = 'upload-date';
    dateEl.textContent = formatDate(createdAt); 


    //Details container name+date
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'user-details';


    //User pic
    const imgEl = document.createElement('img');
    //No inline, only user-img
    imgEl.className = 'user-img'; 
    imgEl.src = user.profile_image.medium;
    imgEl.alt = user.name;


    //Assy details
    detailsDiv.appendChild(nameEl);
    detailsDiv.appendChild(dateEl);

    
    //Details
    userDiv.appendChild(detailsDiv);
    
    //User image (Profile pic second)
    userDiv.appendChild(imgEl);

    return userDiv;
}