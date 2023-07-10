var id = document.querySelector(".advice span");
var quote = document.querySelector(".quote");
var button = document.querySelector(".button");
var lastid;
var disabled = false;

document.addEventListener('click', () => {
    if(disabled == false){
        fetchapi();
    }
});

fetchapi();

async function fetchapi() {
    disabled = true;
    button.classList.add('disabled');
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const adviceId = data.slip.id;
            const advice = data.slip.advice;
            if (lastid == adviceId) {
                fetchapi();
            }
            else{
                id.innerHTML = adviceId;
                quote.innerHTML = advice;
                lastid = adviceId;
                disabled = false;
                button.classList.remove('disabled');
            }    
        });
}