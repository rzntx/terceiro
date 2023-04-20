function boasVindas() {
    var nome = prompt("Digite seu nome: ");
    if(nome == "") {
        nome = "Estudante"
    }
    var inNome = document.getElementById("inNome");

    inNome.textContent = "Olá " + nome + ", seja bem-vindo!";
}



