const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert("O Agrinho 2026 incentiva a inovação, sustentabilidade e educação para um futuro melhor!");
});

let numero = 0;
const contador = document.getElementById("contador");

const intervalo = setInterval(() => {
    numero += 5;
    contador.textContent = numero;

    if (numero >= 1000) {
        clearInterval(intervalo);
    }
}, 10);
