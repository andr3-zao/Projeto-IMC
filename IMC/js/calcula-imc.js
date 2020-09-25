//var titulo = document.querySelector("h1");
//titulo.textContent= "Andre Nutrição";
//var titulo_2 =document.querySelector("h2");
//titulo_2.textContent ="Meus filhos";

var pacientes = document.querySelectorAll(".paciente");
 
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector(".info-altura")
    var altura = alturaTd.textContent

    var imcTd = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        imcTd.textContent = "Peso Invalido !";
        pesoEhValido = false;
        paciente.classList.add("pacientes-invalidos")
    }

    if(!alturaEhValida){
        alturaEhValida = false;
        imcTd.textContent = "Altura Invalida !";
        paciente.classList.add("pacientes-invalidos");
    }


    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        imcTd.textContent = imc;
    }


}
function validaPeso(peso){
    if(peso >=0 && peso <1000){
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura){
    if (altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0 ;
    imc= peso / (altura*altura);
    return imc.toFixed(2);
}









