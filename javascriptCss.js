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

function abrirFilmes() {
    var abrirFilmes = document.getElementById("menuFilme");
    abrirFilmes.style.display = "block";
    abrirFilmes.style.position = "fixed";   
 }

function fecharFilmes() {
    var abrirFilmes = document.getElementById("menuFilme");
    abrirFilmes.style.display = "none";  
 }

 var filme = document.getElementById("listaFilmes");
 filme.addEventListener("mouseover", abrirFilmes);
 filme.addEventListener("mouseout", fecharFilmes);

 var manterFilme = document.getElementById("menuFilme");
 manterFilme.addEventListener("mouseover", abrirFilmes);
 manterFilme.addEventListener("mouseout", fecharFilmes);
