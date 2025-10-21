import './LoadingSpinner.css';

const SPINNER_ID = 'loading-spinner';

/*Crates LS*/
export function createLoadingSpinner() {
    const spinnerContainer = document.createElement('div');
    spinnerContainer.id = SPINNER_ID;
    spinnerContainer.className = 'spinner-container';

    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    
    spinnerContainer.appendChild(spinner);
    return spinnerContainer;
}

/*removes from dom LS*/
export function removeLoadingSpinner() {
    const spinner = document.getElementById(SPINNER_ID);
    if (spinner) {
        spinner.remove();
    }
}