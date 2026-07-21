const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const notificacao = document.getElementById("notificacao");

let indice = 0;
let imagensVisiveis = 4;
let intervalo;

// Detecta automaticamente quantas imagens aparecem
function atualizarQuantidade() {

    if (window.innerWidth <= 768) {

        imagensVisiveis = 1;

    } else {

        imagensVisiveis = 4;

    }

    moverCarousel();
}

window.addEventListener("resize", atualizarQuantidade);

function moverCarousel() {

    const larguraImagem = images[0].offsetWidth + 18;

    track.style.transform =
        `translateX(-${indice * larguraImagem}px)`;

}

// Próxima imagem
function proxima() {

    indice++;

    if (indice > images.length - imagensVisiveis) {

        indice = 0;

    }

    moverCarousel();

}

// Imagem anterior
function anterior() {

    indice--;

    if (indice < 0) {

        indice = images.length - imagensVisiveis;

    }

    moverCarousel();

}

next.addEventListener("click", () => {

    proxima();
    reiniciarTimer();

});

prev.addEventListener("click", () => {

    anterior();
    reiniciarTimer();

});

// Auto play
function iniciarTimer() {

    intervalo = setInterval(proxima, 5000);

}

// Reinicia quando clicar
function reiniciarTimer() {

    clearInterval(intervalo);

    iniciarTimer();

}

// Pausa quando passa o mouse
track.addEventListener("mouseenter", () => {

    clearInterval(intervalo);

});

// Continua quando tira o mouse
track.addEventListener("mouseleave", () => {

    iniciarTimer();

});

// Notificação

window.addEventListener("load", () => {

    atualizarQuantidade();

    iniciarTimer();

    if (notificacao) {

        setTimeout(() => {

            notificacao.classList.add("mostrar");

        }, 600);

        setTimeout(() => {

            notificacao.classList.remove("mostrar");

        }, 4000);

    }

});