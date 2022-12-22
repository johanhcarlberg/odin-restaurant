import './style.css';
import header from './header.js';
console.log('Restaurant app loaded!');

document.querySelector('body').appendChild(header);
const headerLinks = header.querySelectorAll('nav li > a');
for (const headerLink of headerLinks) {
    headerLink.addEventListener('click', switchTab);
}

function switchTab(e) {
    console.log(e.target.textContent);
}