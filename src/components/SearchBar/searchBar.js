import './searchBar.css';

export function createSearchBar(onSearch) {
    const form = document.createElement('form');
    form.className = 'search-form';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Buscar';
    input.className = 'search-input';
    input.name = 'query';

    const icon = document.createElement('span');
    icon.className = 'search-icon';
    icon.textContent = '🔍'; 

    form.appendChild(icon);
    form.appendChild(input);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const query = input.value.trim();
        
        if (query) {
            onSearch(query);
            input.value = ''; 
        }
    });

    return form;
}