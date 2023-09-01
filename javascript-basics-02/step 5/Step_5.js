const images=document.querySelectorAll("img");
for(let imgage in images){

    images[imgage].addEventListener("mouseover",function(){
        images[imgage].setAttribute("src",`images/image${+imgage+1}_2.jpg`);
    })

    
}