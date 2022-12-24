import './style.css';
import phoneSvg from './assets/phone.svg'
import emailSvg from './assets/email.svg'

const contactContent = document.createElement('div');
contactContent.classList.add('contact-content');

const contactContentHeader = document.createElement('h2');
contactContentHeader.textContent = 'Contact';
contactContent.appendChild(contactContentHeader);

const contactDiv = document.createElement('div');
contactDiv.classList.add('contact');
contactContent.appendChild(contactDiv);

const phoneImg = document.createElement('span');
phoneImg.innerHTML = phoneSvg;
phoneImg.classList.add('phoneImg');
contactDiv.appendChild(phoneImg);

const phoneSpan = document.createElement('span');
phoneSpan.classList.add('phone');
phoneSpan.textContent = '123-456-7890'
contactDiv.appendChild(phoneSpan);

const emailImg = document.createElement('span');
emailImg.innerHTML = emailSvg;
emailImg.classList.add('emailImg');
contactDiv.appendChild(emailImg);

const emailSpan = document.createElement('span');
emailSpan.classList.add('email');
emailSpan.textContent = 'contact@example.com';
contactDiv.appendChild(emailSpan);

export default contactContent;
