let dados = [];

let enviar = document.querySelector(".enviar");
let limparBtn = document.querySelector(".limpar");

enviar.addEventListener("click", adicionar);

function adicionar() {
  let input1 = parseFloat(
    document.querySelector(".primeiroInput").value.replace(/,/g, ".")
  );
  let input2 = parseFloat(document.querySelector(".segundoInput").value);

  dados.push(input1, input2);

  calcular();
}

function calcular() {
  let valorAltura = dados[0];
  let valorPeso = dados[1];
  let imc = valorPeso / (valorAltura * valorAltura);

  document.querySelector(".caixaResultado").style.display = "flex";

  if (isNaN(imc)) {
    document.getElementById("valor").innerText = "0";
  } else {
    document.getElementById("valor").innerText = imc.toFixed(2);
  }
}

limparBtn.addEventListener("click", limpar);

function limpar() {
  document.querySelector(".primeiroInput").value = "";
  document.querySelector(".segundoInput").value = "";
  document.getElementById("valor").innerText = "0";
  dados = [];
}

var primeiroInput = document.querySelector(".primeiroInput");
var segundoInput = document.querySelector(".segundoInput");
var enviarBotao = document.querySelector(".enviar");

primeiroInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    segundoInput.focus();
  }
});

segundoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    enviarBotao.focus();
  }
});
