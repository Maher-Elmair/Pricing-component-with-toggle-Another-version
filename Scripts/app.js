let monthly = document.querySelectorAll('.mon');
let annually = document.querySelectorAll('.ann');
let inputSwitch = document.getElementById("transform");
let button = document.querySelectorAll('.btn');

function billingIntToggle(value) {
    if (value === true) {
        inputSwitch.setAttribute("aria-checked", false);
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "none"
            annually[i].style.display = "block";
        }
    } else {
        inputSwitch.setAttribute("aria-checked", true);
        for (let i = 0; i < annually.length; i++) {
            monthly[i].style.display = "block"
            annually[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    inputSwitch.oninput = function () {
        billingIntToggle(this.checked);
    };

    for (let i = 0; i < button.length; i++) {
        button[i].onclick = () => {
            window.location.reload(true)
        };
    }
});