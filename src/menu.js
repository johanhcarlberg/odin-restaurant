const menuItemFactory = (name, price) => {
    return {name, price};
}

const menuItemsArr = [
    menuItemFactory('Mega Super Hamburger', 12),
    menuItemFactory('Incredibly Delicious Pasta', 11),
    menuItemFactory('Hilariously Humongous Pizza', 15),
    menuItemFactory('Caesar Sallad', 8),
    menuItemFactory('Tantalizing Tortilla Taco', 10),
]

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

const menuContentHeader = document.createElement('h2');
menuContentHeader.textContent = 'Menu';
menuContent.appendChild(menuContentHeader);
addMenuItems();

function addMenuItems() {
    for (let menuItem in menuItemsArr) {
        const menuItemDiv = createMenuItem(menuItemsArr[menuItem]);
        menuContent.appendChild(menuItemDiv);
    }
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