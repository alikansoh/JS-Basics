function cal(){
    var size= parseFloat(document.getElementById("shoe_size").value);
    var year= parseInt(document.getElementById("year").value);
    var result=(((((size*2)+5)*50)-year)+1766);
   alert("Result is: "+result);
}