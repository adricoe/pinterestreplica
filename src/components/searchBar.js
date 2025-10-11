//Search bar and logic => "enter"
//1. @param {HTMLElement} container - DOM elemnt for searchbar
//2. @param {Function} fetchImagesCallback - imgs request




export function createSearchBar(container, fetchImagesCallback) {
    
    //input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Buscar imágenes...';

    //add input to container
    if (container) {
        container.appendChild(input);
    } else {
        console.error('El contenedor para la barra de búsqueda no fue encontrado.');
        return;
    }

    //Event listener for 'ENTER'
    input.addEventListener('keypress', (e) => {
        
        //Verify that 'ENTER===ENTER' and that it is not empty
        if (e.key === 'Enter') {
            const query = input.value.trim();

            if (query !== '') {
                
                //A. Execute search calling function mainjs
                fetchImagesCallback(query);

                //B. Requirement done and clean searchb
                input.value = ''; 
            }
        }
    });
}