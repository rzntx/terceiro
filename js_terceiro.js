function boasVindas() {
    var nome = prompt("Digite seu nome: ");
     if(nome == "" || nome == null || nome== false) {
         nome = "Estudante";
     }
     var inNome = document.getElementById("inNome");
 
     inNome.textContent = "Olá " + nome + ", seja bem-vindo(a)!";
    
    confirm("Há duas atividades com prazo de entrega 16/05/2023");


 }

 



