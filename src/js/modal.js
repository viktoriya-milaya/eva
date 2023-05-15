import { toggleClass } from './helpers';

const showForm = () => {

  const body = document.querySelector('body');
  const modal = document.getElementById('modal');
  const buttons = document.querySelectorAll('.action');
  const buttonClose = document.querySelector('.close');


  const fixWindow = () => {
    toggleClass(body, 'body_fix');
    toggleClass(modal, 'modal_visible');
  };

  buttons.forEach((el) => el.addEventListener('click', fixWindow));
  buttonClose.addEventListener('click', fixWindow);
};

export default showForm ;
