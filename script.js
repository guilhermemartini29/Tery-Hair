const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");

let index = 0;

function visible(){
    return window.innerWidth <= 768 ? 1 : 4;
}
function update(){
    const largura = images[0].getBoundingClientRect().width;
    const espaco = 10; // mesmo valor do gap no CSS

    track.style.transform = `translateX(-${index * (largura + espaco)}px)`;
}

function next(){
    if(index < images.length - visible()){
        index++;
    } else {
        index = 0;
    }

    update();
}

function prev(){
    index--;

    if(index<0){
        index=images.length-visible();
    }

    update();
}

document.getElementById("next").onclick=next;
document.getElementById("prev").onclick=prev;

setInterval(next,10000);

window.addEventListener("resize",update);

update();
window.onload = () => {

    const notificacao = document.getElementById("notificacao");

    notificacao.classList.add("mostrar");

    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 4000);

};