


const header = document.createElement('header');
header.appendChild(createMenu());
header.appendChild(createHeaderImage());

function createMenu() {
    const links = [
        'Home',
        'Menu',
        'Contacts'
    ];

    const nav = document.createElement('nav');
    const menuList = document.createElement('ul');
    for (const item of links) {
        const menuListItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = item;
        menuListItem.appendChild(link);
        menuList.appendChild(menuListItem);
    }
    nav.appendChild(menuList);
    return nav;
}

function createHeaderImage() {
    const headerImageDiv = document.createElement('div');
    headerImageDiv.id = 'header-image';

    const headlineDiv = document.createElement('div');
    headlineDiv.id = 'headline';
    headerImageDiv.appendChild(headlineDiv);

    const headlineHeader = document.createElement('h2');
    headlineHeader.textContent = 'Odin Restaurant';
    headlineDiv.appendChild(headlineHeader);

    const headlineSpan = document.createElement('span');
    headlineSpan.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';
    headlineDiv.appendChild(headlineSpan);

    return headerImageDiv;
}

export default header;