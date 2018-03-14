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

$('.tic-tac-proj').click(function () {
  window.open('https://ko-stant.github.io/tic-tac-toe-project/', '_blank')
})

$('.peaks-proj').click(function () {
  window.open('https://ko-stant.github.io/48-Peaks-FrontEnd/', '_blank')
})

$('.surv-proj').click(function () {
  window.open('https://curlpower.github.io/curlpower/', '_blank')
})

$('.homepage-proj').click(function () {
  window.open('https://ko-stant.github.io/homepage/', '_blank')
})
