function abrirLink() {
    var abrirLink = document.getElementById("menuLink");
    abrirLink.style.display = "block";
    abrirLink.style.position = "fixed";   
 }

function fecharLink() {
    var abrirLink = document.getElementById("menuLink");
    abrirLink.style.display = "none";  
 }

 var link = document.getElementById("listaLink");
 link.addEventListener("mouseover", abrirLink);
 link.addEventListener("mouseout", fecharLink);

 var manterLink = document.getElementById("menuLink");
 manterLink.addEventListener("mouseover", abrirLink);
 manterLink.addEventListener("mouseout", fecharLink);

