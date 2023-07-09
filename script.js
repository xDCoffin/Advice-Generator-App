var id = document.querySelector(".advice span");
var quote = document.querySelector(".quote");

fetchapi();

async function fetchapi() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const adviceId = data.slip.id;
            const advice = data.slip.advice;
            id.innerHTML = adviceId;
            quote.innerHTML = advice;
        });
}