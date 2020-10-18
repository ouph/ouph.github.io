const nameForm = document.querySelector(".js-usrNameForm"),
	nameInput = nameForm.querySelector("input"),
	greeting = document.querySelector(".js-greeting");

const USER_LS = "userName";
const SHOWING_CN = "showing";

function saveName(name) {
	localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
	event.preventDefault();
	const value = nameInput.value;
	paintGreeting(value);
	saveName(value);
}

function askForName() {
	nameForm.classList.add(SHOWING_CN);
	nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
	nameForm.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${name}`;
}

function loadName() {
	const user = localStorage.getItem(USER_LS);
	if(!user) {
		askForName();
	} else {
		paintGreeting(user);
	}
}

loadName();