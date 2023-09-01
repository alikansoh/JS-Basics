
document.addEventListener("DOMContentLoaded", function () {
    let inputs=document.querySelectorAll("input"); 
    const button = document.querySelector("button");
     button.addEventListener("click", function () {
        const confirmation = confirm("do you need to reset the form yes or no ");
        if (confirmation) {
            inputs.forEach(input=>{input.value=""});
        }
            
    });
});
