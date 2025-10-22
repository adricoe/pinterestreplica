import './Header.css'; 

export function createHeader(resetCallback, searchCallback) {
    const headerContainer = document.createElement('header');
    headerContainer.className = 'header-container';

    /*Logo Bttn*/
    const logoButton = document.createElement('button');
    logoButton.className = 'header-logo-button';
    logoButton.innerHTML = 'Pinterest Replica'; 
    logoButton.addEventListener('click', resetCallback);
    headerContainer.appendChild(logoButton);

    /*Mobile Men(hamburger-menu icon)*/
    const menuToggle = document.createElement('button');
    menuToggle.className = 'header-mobile-menu-toggle';
    menuToggle.innerHTML = '☰'; 
    headerContainer.appendChild(menuToggle);

    /*Navigation Buttons (home, explore, create)*/
    const navButtons = document.createElement('nav');
    navButtons.className = 'header-nav-buttons';
    
    const createNavButton = (text, className) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        return button;
    };

    navButtons.appendChild(createNavButton('Home', 'nav-button nav-button-home'));
    navButtons.appendChild(createNavButton('Explore', 'nav-button nav-button-explore'));
    navButtons.appendChild(createNavButton('Create', 'nav-button nav-button-create'));
    headerContainer.appendChild(navButtons);

    /*Search Bar*/
    const searchForm = document.createElement('form');
    searchForm.className = 'header-search-form'; 
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'header-search-container';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchInput.className = 'search-input';
    searchContainer.appendChild(searchInput);
    
    searchForm.appendChild(searchContainer);
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchCallback(query);
        }
    });

    headerContainer.appendChild(searchForm);

    /*User Icosn (Notifications, msgs, profile)*/
    const userIcons = document.createElement('div');
    userIcons.className = 'header-user-icons';
    
    const createIcon = (className, content) => {
        const icon = document.createElement('button');
        icon.className = className;
        icon.innerHTML = content; 
        return icon;
    };
    
    userIcons.appendChild(createIcon('user-icon user-icon-notifications', '🔔'));
    userIcons.appendChild(createIcon('user-icon user-icon-messages', '💬'));
    userIcons.appendChild(createIcon('user-icon user-icon-profile', 'AD'));
    headerContainer.appendChild(userIcons);

    /*Mobile toggle logic*/
    menuToggle.addEventListener('click', () => {
        navButtons.classList.toggle('is-open');
    });

    return headerContainer;
}