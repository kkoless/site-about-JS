// Сохранение имени пользователя в localStorage
username = document.getElementById('header_info_username')
if(localStorage.getItem('username') != null){
  username.innerHTML = "<h2>" + localStorage.getItem('username') + "</h2>"
}
// ----------------------


// Проверка имени пользователя
function checkUserName() {
  let name = document.getElementById('username').value;
  if (!name){ alert('Заполните поле!');}
  else{
    alert('Добро пожаловать, ' + name + '!');
    localStorage.setItem('username', name)
    username = document.getElementById('header_info_username')
    username.innerHTML = "<h2>" + localStorage.getItem('username') + "</h2>"
  }
}
// ----------------------


// Нахождение площади треугольника
function getArea(){
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  if (!num1 || !num2){ alert('Заполните поля!');}
  else{
    otv = num1/2 * num2;
    res = document.getElementById('res')
    res.innerHTML = "Площадь треугольника = " + "<b>" + otv + "</b>"
  }
}
// ----------------------


// Подсчет кол-во символов в строке
function countSymbols(){
  let cnt1 = document.getElementById('count1').value.length;
  let cnt2 = document.getElementById('count2').value.length;
  if (cnt1 == 0 || cnt2 == 0){ alert('Заполните поля!');}
  else if (cnt1 > cnt2 || cnt1 < cnt2){ 
    res = document.getElementById('cnt')
    res.innerHTML = "Количество символов в строках <b>не совпадает</b>"
  }
  else if (cnt1 == cnt2){
    res = document.getElementById('cnt')
    res.innerHTML = "Количество символов в строках <b>совпадает</b>"
  }
}
// ----------------------


// Поиск наименьшего/наибольшего элемента в массиве
function getMinMax(){
  let val1 = document.getElementById('massiv1').value;
  let val2 = document.getElementById('massiv2').value;
  let val3 = document.getElementById('massiv3').value;
  let val4 = document.getElementById('massiv4').value;
  let val5 = document.getElementById('massiv5').value;
  let mass = []
  mass.push(val1, val2, val3, val4, val5)
  let min = Math.min.apply(null, mass)
  let max = Math.max.apply(null, mass)
  res1 = document.getElementById('mass1')
  res2 = document.getElementById('mass2')
  res1.innerHTML = "Минимальный элемент = " + "<b>" + min + "</b>"
  res2.innerHTML = "Максимальный элемент = " + "<b>" + max + "</b>"
}
// ----------------------


// Таймер
function getTimeRemaining(deadline) {
  let t = Date.parse(deadline) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

let stopTimerFlag = false;

// Запуск таймера
function initializeClock() {
  if(stopTimerFlag == false) deadline = getTime();
  if(stopTimerFlag == true) deadline = stopTimer()

  let clock = document.getElementById('countdown');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  // Обновление времени
  function updateClock() {
    let t = getTimeRemaining(deadline);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    // Время вышло
    if (t.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById("countdown").className = "hidden";
      document.getElementById("deadline-message").className = "visible";
      clearInterval(timeinterval);
      return true;
    }
  }
  document.addEventListener("click", function(e) {
    if (e.target.className=="stop") {
      stopTimerFlag = true;
      clearInterval(timeinterval)
    }
  });
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

// Остановка/пауза таймера и отсчет прошедшего времени
function stopTimer(){
  let clock = document.getElementById('countdown');
  let hoursSpan = clock.querySelector('.hours').textContent;
  let minutesSpan = clock.querySelector('.minutes').textContent;
  let secondsSpan = clock.querySelector('.seconds').textContent;
  let deadline = new Date(Date.parse(new Date()) + (hoursSpan * 60 * 60 * 1000) + (minutesSpan * 60 * 1000) + (secondsSpan * 1000));

  let proshlo = getTime() - deadline;
  let seconds = Math.floor((proshlo / 1000) % 60);
  let minutes = Math.floor((proshlo / 1000 / 60) % 60);
  let hours = Math.floor((proshlo / (1000 * 60 * 60)) % 24);
  
  let res = document.getElementById("proshlo-vremeni");
  res.innerHTML = "Прошло " + hours + ":" + minutes + ":" + seconds;
  res.style = "font-size: 24px; font-family: 'Roboto', sans-serif; margin-bottom: 10px;"

  return deadline;
}

// Получение данных из полей ввода
function getTime(){
  let hour_div = document.getElementById('timer_hour').value;
  let minute_div = document.getElementById('timer_minute').value;
  let second_div = document.getElementById('timer_second').value;
  let deadline = new Date(Date.parse(new Date()) + (hour_div * 60 * 60 * 1000) + (minute_div * 60 * 1000) + (second_div * 1000));
  return deadline;
}
// ----------------------

// Тест
let result; //Итоговый результат
let flagQuiz; //Проверка на пустоту в ответе
function checkTest(){
  result = 0;
  flagQuiz = 0;
  let choice = ''; // Выбор пользователя
  
  for(let question = 1; question <= 10; question++){
    let option = document.forms['quiz'].elements['q'+ question];
    for (let i = 0; i < option.length; i++){
      if(option[i].checked){
        choice = option[i].value;
      }
    }
    if (choice == '') flagQuiz++; 
    if (choice == '+'){
      result = result + 1;
      choice = '';
    }
  }
  if (flagQuiz > 0) alert("Ответ не выбран!");
  else{
    if (result <= 2) { 
      res = "Вы ответили праивльно на <b>" + result + "</b> из 10 вопросов<br>Оценка: <b>Неудовлетворительно</b>"; 
      tmp = document.getElementById('test_res')
      tmp.innerHTML = res
      result = 0;
    }
    else if (result >=3 && result <= 5) { 
      res = "Вы ответили праивльно на <b>" + result + "</b> из 10 вопросов<br>Оценка: <b>Удовлетворительно</b>"; 
      tmp = document.getElementById('test_res')
      tmp.innerHTML = res
      result = 0;
    }
    else if (result >= 6 && result < 9 ) { 
      res = "Вы ответили праивльно на <b>" + result + "</b> из 10 вопросов<br>Оценка: <b>Хорошо</b>"; 
      tmp = document.getElementById('test_res')
      tmp.innerHTML = res
      result = 0;
    }
    else if (result == 9 || result == 10) { 
      res = "Вы ответили праивльно на <b>" + result + "</b> из 10 вопросов<br>Оценка: <b>Отлично</b>"; 
      tmp = document.getElementById('test_res')
      tmp.innerHTML = res
      result = 0;
    }
    let prav_blok = document.querySelectorAll('label').length
    for(let i = 0; i < prav_blok; i++){
      let qw = document.querySelectorAll('label')[i].getElementsByClassName('otvet');
      for (let j = 0; j < qw.length; j++){
        if(qw.item(j).value == '+') document.querySelectorAll('label')[i].style.color = 'green';
        else document.querySelectorAll('label')[i].style.color = 'red';
      }
    }
    document.getElementById('sub_test').disabled = true; // Блок кнопки с повторной отправкой теста
  }
}
// -------------------

// Сбор информации для "заставки"
let timeVar = '';
let body = document.querySelector('body')
let my_blok = document.getElementById("screen_info")
let blok_info = document.getElementById("some")

function getBlock(){
  let todayDate = new Date();
  let currYear = todayDate.getFullYear();
  let currMonth = todayDate.getMonth() + 1;
  let currDay = todayDate.getDate();
  if(String(currDay).length == 1) currDay = "0" + currDay;
  if(String(currMonth).length == 1) currMonth = "0" + currMonth;

  blok_info.innerHTML += currDay + "." + currMonth + "." + currYear + "<br>";
  if(localStorage.getItem('username') != null) blok_info.innerHTML += localStorage.getItem('username');
  if(my_blok.style.display == "block") my_blok.style = "display: none"; 
  else my_blok.style = "display: block"; timeVar = 1;
};

body.onclick = function(){
  if(!timeVar){ 
    my_blok.style = "display: none"; 
    blok_info.innerHTML = '<img src="photo/logo.svg" width="50px" height="50px">';
  }
  if(timeVar) setTimeout(function(){ timeVar = ''; }, 100);
}
// -------------------