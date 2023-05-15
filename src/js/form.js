import { createLoader, removeLoader } from './loader';
import { toggleClass, isValidPhone } from './helpers';


const sendRequest = () => {

  const form = document.querySelector('form');

  const userName = document.getElementById('userName');
  const userPhone = document.getElementById('userPhone');
  const userInfo = document.getElementById('userInfo');

  const set = document.getElementById('set');
  const pattern = document.getElementById('set-pattern');
  const colorPattern = document.getElementById('color-pattern');
  const colorEdging = document.getElementById('color-edging');

  const alert = document.querySelector('.alert');
  const alertContent = document.querySelector('.alert__content');
  const alertMessage = document.getElementById('alert-message');

  const alertBtn = document.getElementById('alert-btn');
  const buttomSubmit = document.getElementById('submit');

  const EMPTY = `` && ` `;

  // пример JSON отправки на сервер
  const data = JSON.stringify({
    "name": userName.value,
    "phone": userPhone.value,
    "info": userInfo.value,
    "set": set.value,
    "pattern": pattern.value,
    "color": colorPattern.value,
    "edging": colorEdging.value
  });


  async function showAlertSuccess() {
    createLoader();
    await removeLoader();
    alertMessage.innerHTML = `Благодарим за заказ.<br> Менеджер свяжется с вами в ближайшее время!`;
    await toggleClass(alertContent, 'alert__content_success');
    toggleClass(alert, 'alert_visible');
  };


  const showAlertDanger = () => {
    toggleClass(alert, 'alert_visible');
    toggleClass(alertContent, 'alert__content_danger');
    alertMessage.innerHTML = `Прверьте заполнение полей`;
  };


  form.addEventListener('submit', e => e.preventDefault());

  const showAlert = () => {

    if (isValidPhone((userPhone.value)) && ((userName.value && userInfo.value) !== EMPTY)) {

      console.log(`  
      Имя: ${userName.value}. 
      Телефон: ${userPhone.value}.
      Информация о заказе: ${userInfo.value}.
      Комплектация: ${set.value}.
      Форма ячеек: ${pattern.value}.
      Цвет изделия: ${colorPattern.value}.
      Цвет окантовки: ${colorEdging.value}.
     `);
      showAlertSuccess();
      form.reset();

    } else {
      showAlertDanger();
    }

  };

  buttomSubmit.addEventListener('click', showAlert);

  alertBtn.addEventListener('click', () => {

    toggleClass(alert, 'alert_visible');

    if (alertContent.classList.contains(`alert__content_danger`)) {
      toggleClass(alertContent, 'alert__content_danger');
    } else {
      toggleClass(alertContent, 'alert__content_success');
    }
  });

};


export default sendRequest;
