$(document).ready(function(){
  $(".item__button, .promo-item__button").click(function () {
    $(".modal").removeClass("modal--closed");
  })

  $(".modal__toggle").click(function () {
    $(".modal").addClass("modal--closed");
  })
})
