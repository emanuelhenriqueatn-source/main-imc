function calcularImc() {


    
    //Entrada//
    let peso = Number (document.getElementById("peso").value);
    let altura = Number (document.getElementById("altura").value);

    //Validação//

     if (!peso || !altura) {
        document.getElementById("resultado").textContent = "Por favor, insira peso e altura"
        return;
     }




    //Processamento//


    let imc = peso / (altura * altura);


    //Classificação//

    let classificacao="";

    if (imc <18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc <30) {
        classificacao = "Sobrepeso"
    } else if (imc <35) {
        classificacao = "Obesidade grau 1";
    } else if (imc <40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    



    //Saida//

    document.getElementById("resultado").textContent = `IMC : ${imc.toFixed(1)} - ${classificacao}`;



}
