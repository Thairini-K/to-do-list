const btnAdicionar = document.querySelector("#btnAdicionar");


btnAdicionar.addEventListener("click", adicionar)

function adiocionar(){
    const item = document.createElement("li");
    const caixaValor = document.querySelector("minhaCaixa").value;

    const novoNome = document.createTextNode(caixaValor);

    item.appendChild(novoNome);

    if (caixaValor === "") {
        alert("Você dve informar algum texto para adicionar");

    } else {
        document.querySelector('#itens').appendChild(item);
    }
    document.querySelector('#minhaCaixa').value = "";

    const span = document.createElement("span");

    const icon = document.createElement("\u00D7");


    span.className = "fechar";

    span.appendChild(icon);
    item.appendChild(span);

    const close = document.querySelectorAll(".fechar");

    for (let i=0; i < close.length; i++) {
        close[i].addEventListener("click",apagar)
    }
}

function apagar(){
    const item = this.parentElement;
    item.style.display = "none";
}

const list = document.querySelector("ul");
list.addEventListener("click", checar(ev));
function checar (ev){
    if(ev.target.nodeName == "li"){
        ev.target.classList.toggle("checado");
    }
}