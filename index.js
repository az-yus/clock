
let sec = document.querySelector('.clock__arrow-second'),
	min = document.querySelector('.clock__arrow-minute'),
	hour = document.querySelector('.clock__arrow-hour'),
	dhour = document.querySelector('.digital__hour'),
	dmin = document.querySelector('.digital__minute');


// new Date() - встроенный объект, который возвразет время
let date = new Date()

const ticClock = function () {
	let date = new Date()
	// console.log(date.getHours());  // Получаем часы
	// console.log(date.getMinutes());  // Получаем минуты
	// console.log(date.getSeconds());  // Получаем секунды

	let s = date.getSeconds(), // Переменные хранят секунды, минуты и часы
		m = date.getMinutes(),
		h = date.getHours();

	sec.style = `transform: rotate(${s * 6}deg)`;
	min.style = `transform: rotate(${m * 6}deg)`;
	hour.style = `transform: rotate(${h * 30}deg)`;

	dhour.innerHTML = h < 10 ? '0' + h : h;
	dmin.innerHTML = m < 10 ? '0' + m : m; 

	setTimeout(ticClock, 1000)

}

ticClock();

let swHour = document.querySelector('.stopwatch__hour');    //sw = stopwatch
let swMinute = document.querySelector('.stopwatch__minute');
let swSeconds = document.querySelector('.stopwatch__seconds');
let swMiliseconds = document.querySelector('.stopwatch__miliseconds');

// console.log(sec, min , hour, dhour, dmin);