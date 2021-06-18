//viwe
showQuiz();
function showQuiz() {
    document.getElementById("app").innerHTML = `
    <div class="form_container">
    <form action="success.html" ${success}>
    <h1>${selectedColor}:<span id="selectColor"></span>${verification}</h1>
    <input type="checkbox" id="checkbox" />
    <label for="${start}x">${checked}</label>
    <button class="${button}" type="submit">${options}</button></form></div>
    <main class="container">
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    </main>
    `;
}
