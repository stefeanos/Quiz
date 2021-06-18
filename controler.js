

//controller
function changeElement() {
    element = "Hi";

}


function returnSomeValue() {
    return 2;

}




let submitBtn = quiz();
elements.forEach(function (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

function quiz() {
    let submitBtn;
    submitBtn = submit();
    quizPlay();
    checkbox.disabled = true;
    return submitBtn;

}

function quizPlay() {
    elements = document.querySelectorAll(".element");
}

function submit() {
    showQuiz();
    let submitBtn;
    submitBtn = document.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    return submitBtn;
}

//generere tilfeldig fargefunksjon
function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random(1) * 16)];
    }
    return color;
}
// console.log(submitBtn);

// sjekk om den rette fargen;;
document.querySelector("button[type=submit]");
elements.forEach(function (element) {
    element.addEventListener("click", function () {
        if (element || innerHTML === selectColor && innerHTML) {
            checkbox.checked = true;
            alert("Du er menneske!");
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-light");

            submitBtn.classList.add("btn-success");
            console.log(submitBtn);
        } else {
            alert("vennligst bekreft at du er menneske!");
            location.reload(true);
        }

    });
});

