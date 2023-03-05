 
document.addEventListener("DOMContentLoaded", function() {//função que faz o código ser carregado após a pagina. 
let form = document.getElementById("myForm");//Armazena o elemento HTML que representa o formulário com ID "myForm" na variável form.

  // Adiciona eventos de validação personalizados para cada campo
  let nome = document.getElementById("nome");
  let nomeError = document.querySelector("#nome + .error-text");




  nome.addEventListener("input", function() { // adc Listener para o evento input...quando digitar algo no campo a função e executado. 
    if (nome.validity.valid) { //valid.valid verifica se o valor do campo é valido. 
      nome.classList.remove("invalid");
      nome.classList.add("valid");
      nomeError.classList.remove("error");
    } else {
      nome.classList.remove("valid");
      nome.classList.add("invalid");
      nomeError.classList.add("error");
    }
  });

  let email = document.getElementById("email");
  let emailError = document.querySelector("#email + .error-text");
  email.addEventListener("input", function() {
    if (email.validity.valid) {
      email.classList.remove("invalid");
      email.classList.add("valid");
      emailError.classList.remove("error");
    } else {
      email.classList.remove("valid");
      email.classList.add("invalid");
      emailError.classList.add("error");
    }
  });

  let mensagem = document.getElementById("mensagem");
  let mensagemError = document.querySelector("#mensagem + .error-text");
  mensagem.addEventListener("input", function() {
    if (mensagem.validity.valid) {
      mensagem.classList.remove("invalid");
      mensagem.classList.add("valid");
      mensagemError.classList.remove("error");
    } else {
      mensagem.classList.remove("valid");
      mensagem.classList.add("invalid");
      mensagemError.classList.add("error");
    }
  });

  form.addEventListener("submit", function(event) { // adiciona um listener para o evento submit
    if (!nome.validity.valid || !email.validity.valid || !mensagem.validity.valid) { //o código verifica se o nome, email e mensagem são validos. 
      event.preventDefault(); // Impede o envio do formulário se algum deles não for valido. 
      alert("Por favor, preencha todos os campos obrigatórios."); // alerta é exibido pedindo para preencher todos os campos.
    }
  });
});
