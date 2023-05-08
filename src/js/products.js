import data from './data.json';

import img1 from '../assets/products/option-1.jpg';
import img2 from '../assets/products/option-2.png';
import img3 from '../assets/products/option-3.png';
import img4 from '../assets/products/option-4.jpg';
import img6 from '../assets/products/option-5.png';
import img6 from '../assets/products/option-6.png';


const createProductsList = () => {

  const productsList = document.querySelector('.products-list');

  const createProductCard = (data) => {

    const { title, price, id } = data;

    const li = document.createElement('li');
    li.classList.add('products-list__item');

    const html = `
    <p class="title title_pink">${title}</p>
    <img class="products-list__img" src="${id}" alt="eva-коврик" class="img">                      
    <p class="title">от ${price} BYN</p>
    <button class="button button_light">ЗАКАЗАТЬ</button>
    `;

    li.innerHTML = html;
    productsList.append(li);

  }

  data.forEach(el => createProductCard(el) );

  const s = data[0].src;
    console.log(data);

};

export default createProductsList;


