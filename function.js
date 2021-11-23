var recebidos = JSON.parse(localStorage.getItem("@website/mensagens")) || [] ;
var contato = document.getElementById("contato");

var nome = document.getElementById("nome");
var whatsapp = document.getElementById("whatsapp");
var email = document.getElementById("e-mail");
var mensagem = document.getElementById("mensagem");
var btnEnviar = document.getElementById("btnEnviar");

contato.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    recebidos.push(info);
    localStorage.setItem("website/mensagens", JSON.stringify(recebidos));
    contato.reset();
    alert(" Mensagem Enviada com Sucesso!")
});