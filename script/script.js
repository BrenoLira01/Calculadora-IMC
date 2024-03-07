try {
  let dados = [];

  document.addEventListener("DOMContentLoaded", function () {
    let enviar = document.getElementById("enviar");
    enviar.addEventListener("click", adicionar);
  });

  function adicionar() {
    let input1 = parseFloat(
      document.querySelector("#primeiroInput").value.replace(/,/g, ".")
    );
    let input2 = parseFloat(document.querySelector("#segundoInput").value);

    console.log(input1);
    console.log(input2);

    if (isNaN(input1) || isNaN(input2)) {
      let descricaoElements = document.querySelectorAll(".descricao");
      descricaoElements.forEach((element) => {
        element.style.color = "red";
      });
    } else {
      dados.push(input1, input2);
      calcular();
    }
  }

  function calcular() {
    let valorAltura = dados[0];
    let valorPeso = dados[1];
    let imc = valorPeso / (valorAltura * valorAltura);
    let classificacao = document.getElementById("classificacao");

    document.querySelector(".caixaResultado").style.display = "flex";
    document.getElementById("valor").innerText = imc.toFixed(2);

    let descricaoElements = document.querySelectorAll(".descricao");
    descricaoElements.forEach((element) => {
      element.style.color = "black";
    });

    console.log(dados);

    if (imc < 18.5 || imc >= 30) {
      classificacao.style.color = "red";
    } else {
      classificacao.style.color = "black";
    }

    if (imc < 18.5) {
      classificacao.innerText = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao.innerText = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao.innerText = "Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9) {
      classificacao.innerText = "Obesidade";
    } else if (imc >= 40) {
      classificacao.innerText = "Obesidade Grave";
    }
  }

  let limparBtn = document.getElementById("limpar");
  limparBtn.addEventListener("click", limpar);

  function limpar() {
    document.querySelector("#primeiroInput").value = "";
    document.querySelector("#segundoInput").value = "";
    document.querySelector("#valor").innerText = "0";
    document.querySelector("#classificacao").innerText = "";
    dados = [];
  }

  var primeiroInput = document.querySelector("#primeiroInput");
  var segundoInput = document.querySelector("#segundoInput");
  var enviarBotao = document.querySelector("#enviar");

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
} catch (error) {
  console.error("Ocorreu um erro:", error);
}
