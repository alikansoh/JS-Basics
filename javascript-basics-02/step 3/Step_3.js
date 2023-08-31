document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#name");
    const text = document.querySelector("#text");
    input.addEventListener("input", function () {
        text.textContent = input.value;
    });
});




