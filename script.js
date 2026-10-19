const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🌑";
    } else {
        toggleButton.textContent = "🌙";
    }

});


// const Theme = {
//     init() {
//         const saved = Utils.store.get(KEYS.theme);
//         if (saved === 'dark') this.setDark(false); 
//         const btn = document.getElementById('darkToggle');
//         if (btn) btn.addEventListener('click', ()=> this.toggle());
//     },
//     inDark: ()=> document.body.classList.contains('dark'),
// }



//greeting
const hour = new Date().getHours();

let greetings;
if (hour < 2) {
    greetings = "Good Morning!"
} else if (hour < 17) {
    greetings = "Good Afternoon!"
} else {
    greetings = "Good Evening!"
}

document.getElementById("greeting").innerHTML = greetings

function toggleText() {
    // Get elements
    const moreText = document.getElementById("moreText")
    const toggleButton = document.getElementById("toggleButton")

    //check if the additional text is currently hidden
    if (moreText.style.display == "none") {
        moreText.style.display = "block";  //show the addisitonal text
        toggleButton.innerText = "Go back"; //change button text
    } else {
        moreText.style.display = "none";
        toggleButton.innerText = "Click to Know more About us"
    }

}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 01 2026 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (distance < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);