var submitBtn = document.querySelector('#submitBtn');
var dateTime = document.querySelector('.input');
var currTime = document.querySelector('.time')
currTime.innerText = (new Date().toLocaleString('en-US'))

var sydney = document.querySelector('#sydney');
var tokyo = document.querySelector('#tokyo');
var dubai = document.querySelector('#dubai');
var pyongyang = document.querySelector('#pyongyang')
var moscow = document.querySelector('#moscow')
var cairo = document.querySelector('#cairo')
var johannesburg = document.querySelector('#johannesburg')
var paris = document.querySelector('#paris')
var london = document.querySelector('#london')
var saopaulo = document.querySelector('#saopaulo')
var newyork = document.querySelector('#newyork')
var panama = document.querySelector('#panama')
var denver = document.querySelector('#denver')
var mexicocity = document.querySelector('#mexicocity')
var losangeles = document.querySelector('#losangeles')
var anchorage = document.querySelector('#anchorage')


document.addEventListener("input", handleSelect)
function handleSelect(ev) {
	let select = ev.target;
	var timeZone = "http://worldtimeapi.org/api" + select.value
	console.log(select.value)
	fetch(timeZone)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data.datetime)
			dateTime.value = data.datetime.slice(0, 19).replace('T', '  ');
		})
}



// var travel = "https://api.sygictravelapi.com/1.1/en"
// 	fetch(travel)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 		})