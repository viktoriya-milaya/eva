import data from './data.json';


import img4 from '../assets/products/option-4.png';
import img5 from '../assets/products/option-5.png';
import img6 from '../assets/products/option-6.png';


const createProductsList = () => {

  const productsList = document.querySelector('.products-list');
  const loadMoreBtn = document.getElementById('load-more');

  const arr = [img4, img5, img6];

  const createProductCard = (data) => {

    const { title, price, id } = data;

    const li = document.createElement('li');
    li.classList.add('products-list__item');

    const html = `
    <p class="title title_pink">${title}</p>
    <img class="products-list__img" src="" alt="eva-коврик" class="img">                      
    <p class="title">от ${price} BYN</p>
    <button class="button button_light action">ЗАКАЗАТЬ</button>
    `;

    li.innerHTML = html;
    productsList.append(li);

  }

  loadMoreBtn.addEventListener('click', () => data.forEach(el => createProductCard(el)));

};

export default createProductsList;


