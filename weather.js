const weather = document.querySelector(".js-weather");

const API_KEY = "ce71949df704a212086eaf40e519fece";
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
		.then(response => {
			return response.json();
		})
		.then(json => {
			const temp = json.main.temp;
			const place = json.name;
			weather.innerText = `${temp} @ ${place}`;
		});
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude, longitude
	};
	saveCoords(coordsObj);
	getWeather(coordsObj.latitude, coordsObj.longitude);
}

function handleGeoError() {
	console.error("can't access geo location");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
	const loadCoords = localStorage.getItem(COORDS);
	if(!loadCoords) {
		askForCoords();
	} else {
		const parseCoords = JSON.parse(loadCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

loadCoords();