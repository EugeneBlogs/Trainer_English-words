// Смена заголовка страницы
var timer;
var counter = 0;
var start_title = document.title;
var message = 'Eugene Blogs Company';
timer = setInterval(function () {
  if (counter % 2) {
    document.title = start_title;
  } else {
    document.title = message;
  }
  counter++;
}, 2000);