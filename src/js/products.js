import data from './data.json';

const createProductsList = () => {

  const productsList = document.querySelector('.products-list');
  const loadMoreBtn = document.getElementById('load-more');

  const createProductCard = (data) => {

    const { title, price, src, id } = data;

    const li = document.createElement('li');
    li.classList.add('products-list__item');
    li.setAttribute("id", `${id}`);


    const html = `
    <p class="title title_pink">${title}</p>
    <img class="products-list__img img" src="${src}" alt="eva-коврик">                      
    <p class="title">от ${price} BYN</p>
    <button class="button button_light action">ЗАКАЗАТЬ</button>
    `;

    li.innerHTML = html;
    productsList.append(li);
 
  };

  loadMoreBtn.addEventListener('click', () => { 
    data.forEach(el => createProductCard(el));
    loadMoreBtn.setAttribute("disabled", "disabled");
  });

};

export default createProductsList;


