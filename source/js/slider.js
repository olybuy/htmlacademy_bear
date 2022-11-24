let reviews = document.querySelectorAll('.reviews__review');
let arrowRight = document.querySelector('.arrow--right');
let arrowLeft = document.querySelector('.arrow--left');
let reviewsArr = Array.from(reviews);

arrowRight.addEventListener('click', function () {
  for (let i = 0; i <= reviewsArr.length; i++) {
    if (!reviewsArr[i].classList.contains('hide')) {
      if (i === reviewsArr.length - 1) {
        reviewsArr[i].classList.add('hide');
        reviewsArr[0].classList.remove('hide');
      } else {
        reviewsArr[i].classList.add('hide');
        reviewsArr[i+1].classList.remove('hide');
      }
      break;
    }
  }
})

arrowLeft.addEventListener('click', function () {
  for (let i = 0; i <= reviewsArr.length; i++) {
    if (!reviewsArr[i].classList.contains('hide')) {
      if (i === 0) {
        reviewsArr[i].classList.add('hide');
        reviewsArr[reviewsArr.length - 1].classList.remove('hide');
      } else {
        reviewsArr[i].classList.add('hide');
        reviewsArr[i-1].classList.remove('hide');
      }
      break;
    }
  }
})

