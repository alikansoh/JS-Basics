const Buttons=document.querySelectorAll("a");
const division=document.querySelector("#texte");


Buttons.forEach(button=>{
    if(btn.id==="show"){
        btn.addEventListener("click",(event)=>{
            event.preventDefault();
            division.style.display="block";
        })
    }else{
        btn.addEventListener("click",(event)=>{
            event.preventDefault();
            division.style.display="none";
        })
        
    }
})bun