import './Footer.css';

export function createFooter() {
    const footer =  document.createElement('footer');

    const p = document.createElement('p');
    p.textContent =   '© 2025 Pinterest Replica | Web Development Project made by Adrián Coelho'  ;

    footer.appendChild(p);
    return footer;
}