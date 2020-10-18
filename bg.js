const body = document.querySelector("body");

const IMAGE_CNT = 4;

function changeFontColor() {
	clockTitle.classList.add("darkColor");
	nameInput.classList.add("darkColor");
	greeting.classList.add("darkColor");
	toDoInput.classList.add("darkColor");
	toDoList.classList.add("darkColor");
	weather.classList.add("darkColor");
}

function paintBackground(num) {
	const image = new Image();
	const imageNum = num + 1;
	image.src = `images/${imageNum}.jpg`;
	image.classList.add('bgImage');
	body.prepend(image);
	if(imageNum === 3) changeFontColor();
}

function randomBackground() {
	const num = Math.floor(Math.random() * IMAGE_CNT);
	paintBackground(num);
}

randomBackground();