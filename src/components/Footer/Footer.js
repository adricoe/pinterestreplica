import './Footer.css';

export function createFooter() {
    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.textContent = '© 2024 Pinterest Replica | Web Development Project by Adrián Coelho'; 

    footer.appendChild(p);
    return footer;
}