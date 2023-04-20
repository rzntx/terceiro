function abrirLink() {
    var abrir = document.getElementById("menuLink");
    abrir.style.display = "block";
    abrir.style.position = "fixed";
    abrir.style.background = "gray";
    
    
 }

 

 function fecharLink() {
    var abrir = document.getElementById("menuLink");
    abrir.style.display = "none";

    
    
 }

 var link = document.getElementById("listaLink");
 link.addEventListener("mouseover", abrirLink);
 link.addEventListener("mouseout", fecharLink);

 var manter = document.getElementById("menuLink");
 manter.addEventListener("mouseover", abrirLink);
 manter.addEventListener("mouseout", fecharLink);
