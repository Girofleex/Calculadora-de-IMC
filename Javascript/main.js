document.getElementById("calcular").addEventListener("click", function () {
    valida();
    altura.value='';
    peso.value='';      
});

function valida() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var resultado = document.getElementById("resultado");

    // Erros
    var alturaErro = document.getElementById("altura-erro");
    var pesoErro = document.getElementById("peso-erro");

    // Resetar mensagens de erro
    alturaErro.textContent = "";
    pesoErro.textContent = "";

    // Validar se os campos estão vazios ou fora dos limites
    if (isNaN(altura) || altura < 1.3 || altura > 2.2) {
        alturaErro.textContent = "Altura inválida. Insira um valor entre 1,30 e 2,20.";
        return;
    }

    if (isNaN(peso) || peso < 20 || peso > 200) {
        pesoErro.textContent = "Peso inválido. Insira um valor entre 20 e 200.";
        return;
    }

    // Cálculos IMC
    var imc = peso / (altura * altura);
    var imc2 = imc.toFixed(2); // Diminui as casas decimais
    
    // Exibir resultados com cores diferentes
    if (imc < 18.5) {
        resultado.innerHTML = "Magreza, seu IMC é " + `<span style="color: red;">${imc2}</span>`;
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = "Normal, seu IMC é " + `<span style="color: green;">${imc2}</span>`;
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.innerHTML = "Sobrepeso, seu IMC é " + `<span style="color: red;">${imc2}</span>`;
    } else if (imc >= 29.9 && imc < 34.9) {
        resultado.innerHTML = "Obesidade, grau I seu IMC é " + `<span style="color: red;">${imc2}</span>`;
    } else if (imc >= 34.9 && imc < 39.9) {
        resultado.innerHTML = "Obesidade, grau II seu IMC é " + `<span style="color: red;">${imc2}</span>`;
    } if (imc > 39.9){
        resultado.innerHTML = "Obesidade, acima do grau II seu IMC é " + `<span style="color: red;">${imc2}</span>`;
    }
}



// Botão de reset
document.getElementById('resetar').addEventListener('click', function () {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('altura-erro').textContent = '';
    document.getElementById('peso-erro').textContent = '';
});