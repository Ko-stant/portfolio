$(document).foundation()

$('#menu-about').click(function () {
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 1000)
})

$('#menu-skills').click(function () {
  $('html, body').animate({
    scrollTop: $('#skills').offset().top
  }, 1000)
})

$('#menu-projects').click(function () {
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000)
})

$('#menu-contact').click(function () {
  $('html, body').animate({
    scrollTop: $('#contact').offset().top
  }, 1000)
})
