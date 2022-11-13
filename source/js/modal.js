let modal = document.querySelector('.modal');
let itemButton = document.querySelectorAll('.item__button');
let promoItemButton = document.querySelector('.promo-item__button');
let modalToggle = document.querySelector('.modal__toggle');

modalToggle.addEventListener('click', function () {
  modal.classList.add('modal--closed');
})

promoItemButton.addEventListener('click', function () {
  modal.classList.remove('modal--closed');
})

for (let item of itemButton) {
  item.addEventListener('click', function () {
    modal.classList.remove('modal--closed');
  });
}
