import './style.css';
import header from './header.js';
import homeContent from './modules/home/home.js';
import menuContent from './modules/menu/menu.js';
import contactContent from './contact';

console.log('Restaurant app loaded!');

const pages = {
    'Home': homeContent,
    'Menu': menuContent,
    'Contact': contactContent,
}

document.body.appendChild(header);
const headerLinks = header.querySelectorAll('nav li > a');
for (const headerLink of headerLinks) {
    headerLink.addEventListener('click', (e) => {
        switchPage(e.target.textContent);
    });
}

const contentDiv = document.querySelector('#content');
switchPage('Home');
console.log(pages);


function switchPage(newPage) {
    if (!pages[newPage]) {
        console.log('switchPage: target page does not exist');
        return;
    }
    // Clear all child nodes of content
    contentDiv.innerHTML = '';

    contentDiv.appendChild(pages[newPage]);
}