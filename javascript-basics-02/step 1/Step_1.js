
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("#image1");
    const newImageSrc = "images/image1_2.jpg";
    image.addEventListener("mouseover", function () {
        image.src = newImageSrc;
    });
})