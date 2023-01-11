let contador = 0;
let input = document.querySelector('#input-tarefa');
let btnAdd = document.querySelector('#btn-add');
let main = document.querySelector('#areaLista');

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !== undefined) && (valorInput !== null) && (valorInput !== "")){

        ++contador;

        let novoInput = 
        `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icon">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i> 
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-btn">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`

    main.innerHTML += novoInput;
    input.value = "";
    input.focus();
    }
};

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
};

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        let icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        let icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
};

input.addEventListener("keyup", function (event) {
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});