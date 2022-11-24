/*
First change in HTML the left arrow-button
from <button class="arrow arrow--left" type="button"></button>
to <button class="arrow arrow--left arrow--disabled" disabled="disabled" type="button"></button>
* */

let reviews = document.querySelectorAll('.reviews__review');
let arrowRight = document.querySelector('.arrow--right');
let arrowLeft = document.querySelector('.arrow--left');
let reviewsArr = Array.from(reviews);

arrowRight.addEventListener('click', function () {
  let currentReview;

  for (let item of reviewsArr) {
    if (!item.classList.contains('hide')) {
      currentReview = item;
    }
  }
  if (reviewsArr.indexOf(currentReview) >= 0) {
    arrowLeft.classList.remove('arrow--disabled');
    arrowLeft.removeAttribute('disabled');
  }
  if (reviewsArr.indexOf(currentReview) === reviewsArr.length-2) {
    currentReview.classList.add('hide');
    currentReview.nextSibling.classList.remove('hide');
    arrowRight.classList.add('arrow--disabled');
    arrowRight.setAttribute('disabled', 'disabled');
  }
  else {
    currentReview.classList.add('hide');
    currentReview.nextSibling.classList.remove('hide');
  }
})

arrowLeft.addEventListener('click', function () {
  let currentReview;

  for (let item of reviewsArr) {
    if (!item.classList.contains('hide')) {
      currentReview = item;
    }
  }
  console.log(reviewsArr.indexOf(currentReview));
  console.log(arrowRight);
  if (reviewsArr.indexOf(currentReview) === reviewsArr.length-1) {
    arrowRight.classList.remove('arrow--disabled')
    arrowRight.removeAttribute('disabled');
  }
  if (reviewsArr.indexOf(currentReview) === 1) {
    currentReview.classList.add('hide');
    currentReview.previousSibling.classList.remove('hide');
    arrowLeft.classList.add('arrow--disabled');
    arrowLeft.setAttribute('disabled', 'disabled');
  }
  else {
    currentReview.classList.add('hide');
    currentReview.previousSibling.classList.remove('hide');
  }
})
