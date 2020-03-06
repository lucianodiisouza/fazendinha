let canvas = document.getElementById("meu-canvas");
let papel = canvas.getContext("2d");

let fundo = {
    url: "./img/fundo.png"
}

let vaca = {
    url: "./img/vaca.png"
}

let porco = {
    url: "./img/porco.png"
}

let frango = {
    url: "./img/frango.png"
}

fundo.imagem = new Image();
vaca.imagem = new Image();
porco.imagem = new Image();
frango.imagem = new Image();

fundo.imagem.addEventListener("load", carregaFundo);
fundo.imagem.src = fundo.url;

vaca.imagem.addEventListener("load", carregaVaca);
vaca.imagem.src = vaca.url;

porco.imagem.addEventListener("load", carregaPorco);
porco.imagem.src = porco.url;

frango.imagem.addEventListener("load", carregaFrango);
frango.imagem.src = frango.url;

function carregaFundo() {
    papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca() {
    let numeroVacas = numeroAleatorio(2, 10);
    for (let i = 0; i < numeroVacas; i++) {
        let xA = numeroAleatorio(100, 400);
        let yA = numeroAleatorio(100, 400);
        papel.drawImage(vaca.imagem, xA, yA);
    }
}

function carregaPorco() {
    let numeroPorcos = numeroAleatorio(2, 10);
    for (let i = 0; i < numeroPorcos; i++) {
        let xA = numeroAleatorio(100, 400);
        let yA = numeroAleatorio(100, 400);
        papel.drawImage(porco.imagem, xA, yA);
    }
}

function carregaFrango() {
    let numeroFrangos = numeroAleatorio(2, 10);
    for (let i = 0; i < numeroFrangos; i++) {
        let xA = numeroAleatorio(100, 400);
        let yA = numeroAleatorio(100, 400);
        papel.drawImage(frango.imagem, xA, yA);
    }
}

function numeroAleatorio(x, y) {
    return Math.floor(Math.random() * (y - x) + 1) + x;
}