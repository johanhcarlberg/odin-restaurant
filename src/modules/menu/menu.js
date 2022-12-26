import './style.css';
const menuItemFactory = (name, price, section) => {
    return {name, price, section};
}

const menuSections = [
    'Main Courses',
    'Sides',
    'Dessert'
]

const menuItemsArr = [
    menuItemFactory('Mega Super Hamburger', 12, menuSections[0]),
    menuItemFactory('Incredibly Delicious Pasta', 11, menuSections[0]),
    menuItemFactory('Hilariously Humongous Pizza', 15, menuSections[0]),
    menuItemFactory('Caesar Sallad', 8, menuSections[1]),
    menuItemFactory('Tantalizing Tortilla Taco', 10, menuSections[1]),
]

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

const menuHeader = document.createElement('h2');
menuHeader.textContent = 'Menu';

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');
menuContent.appendChild(menuDiv);
menuDiv.appendChild(menuHeader);
addMenuItems();

function addMenuItems() {
    for (let menuSection of menuSections) {
        const menuItems = menuItemsArr.filter(item => item.section === menuSection);
        if (menuItems.length === 0) {
            continue;
        }
        const menuSectionHeader = document.createElement('h3');
        menuSectionHeader.textContent = menuSection;
        menuDiv.appendChild(menuSectionHeader);
        for (let menuItem of menuItems) {
            const menuItemDiv = createMenuItem(menuItem);
            menuDiv.appendChild(menuItemDiv);
        }
    }
/*     for (let menuItem in menuItemsArr) {
        const menuItemDiv = createMenuItem(menuItemsArr[menuItem]);
        menuDiv.appendChild(menuItemDiv);
    } */
}

function createMenuItem(menuItem) {
    console.log(menuItem);
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');

    const menuItemNameSpan = document.createElement('span');
    menuItemNameSpan.classList.add('menu-item-name');
    menuItemNameSpan.textContent = menuItem.name;
    menuItemDiv.appendChild(menuItemNameSpan);

    const menuItemPriceSpan = document.createElement('span');
    menuItemPriceSpan.classList.add('menu-item-price');
    menuItemPriceSpan.textContent = menuItem.price;
    menuItemDiv.appendChild(menuItemPriceSpan);

    return menuItemDiv;
}



export default menuContent;