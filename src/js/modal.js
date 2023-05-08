
const showModal= () => {

  const buttons = document.querySelectorAll('.action');
  const buttonClose = document.querySelector('.close');
  const modal = document.getElementById('modal');

  const addClassVisible = () => 
    modal.classList.toggle('modal_visible');



  buttons.forEach((el) => el.addEventListener('click', addClassVisible));

  buttonClose.addEventListener('click', addClassVisible);


};


export default showModal;


  // console.log(modal);
  // document.body.style.overflow = 'hidden';
  // document.body.style.paddingRight = '17px';