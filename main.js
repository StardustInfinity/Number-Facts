let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let factBtn = document.querySelector('#factBtn');
factBtn.addEventListener('click', getFactFetch);

function getFactFetch() {
	fetch("https://numbersapi.p.rapidapi.com/random/trivia?max=20&fragment=true&min=10&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "fa57ef7f4fmshce549935abf9191p1b6a19jsna8ae3a5aeb01"
		}
	})
		.then(response =>
			response.json())
		.then(data => {
			fact.style.display = 'block'
			factText.innerText = `${data.number} ${data.text}`;
		})
		.catch(err => {
			console.log(err);
		});
}