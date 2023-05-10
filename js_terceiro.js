function boasVindas() {
    var nome = prompt("Digite seu nome: ");
    window.alert("Há duas atividades com prazo de entrega 16/05/2023");

     if(nome == "" || nome == null || nome== false) {
         nome = "Estudante";
         
     }
     var inNome = document.getElementById("inNome");
 
     inNome.textContent = "Olá " + nome + ", seja bem-vindo(a)!";
    
    

 }

 



