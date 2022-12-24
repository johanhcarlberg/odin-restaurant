import './style.css';

const homeContent = document.createElement('div');
homeContent.classList.add('home-content');

const openingHoursDiv = document.createElement('div');
const openingHoursHeader = document.createElement('h2');
openingHoursHeader.textContent = 'Opening Hours';
openingHoursDiv.classList.add('opening-hours');
openingHoursDiv.appendChild(openingHoursHeader);

const aboutDiv = document.createElement('div');
aboutDiv.classList.add('about');
const aboutHeader = document.createElement('h2');
aboutHeader.textContent = 'About Us';
const aboutPara = document.createElement('p');
aboutPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed deleniti cumque, quaerat eum amet qui eligendi dolores ipsa, molestias id quibusdam sapiente nam mollitia necessitatibus, rem nulla incidunt nihil ad! Odit quidem nisi eaque nulla provident officia nihil iusto?';
aboutDiv.appendChild(aboutHeader);
aboutDiv.appendChild(aboutPara);

openingHoursDiv.appendChild(
    createOpeningHoursItem('Monday - Friday', '11:00', '21:00')
);
openingHoursDiv.appendChild(
    createOpeningHoursItem('Saturday', '15:00', '23:00')
);
openingHoursDiv.appendChild(
    createOpeningHoursItem('Sunday', '11:00', '18:00')
);

function createOpeningHoursItem(days, openTime, closeTime) {
    const openingHoursItemDiv = document.createElement('div');
    const openingHoursItemHeader = document.createElement('h3');
    openingHoursItemHeader.textContent = days;
    openingHoursItemDiv.appendChild(openingHoursItemHeader);

    const openingHoursItemTimes = document.createElement('span');
    openingHoursItemTimes.textContent = `${openTime} - ${closeTime}`;
    openingHoursItemDiv.appendChild(openingHoursItemTimes);

    return openingHoursItemDiv;
}

homeContent.appendChild(openingHoursDiv);
homeContent.appendChild(aboutDiv);

export default homeContent;
