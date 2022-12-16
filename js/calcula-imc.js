var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = paciente.textContent;

    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var peso_valido = validaPeso(peso);
    var altura_valido = validaAltura(altura);


    if (!peso_valido) {
        console.log("Peso inválido!");
        peso_valido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!altura_valido){
        console.log("Altura inválida!");
        altura_valido = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (peso_valido == false && altura_valido == false) {
        tdImc.textContent = "Valores inválidos!"
    }

    if (altura_valido && peso_valido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 650){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }else{
        return false;
    } 
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}







