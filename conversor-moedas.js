let moedaOrigem = document.getElementById("moedaDe").value;
let moedaDestino = document.getElementById("moedaPara").value;

//guarda a moeda de origem
function capturarMoedaOrigem (){
    moedaOrigem = document.getElementById("moedaDe").value;
    console.log(moedaOrigem);
}

//guarda a moeda de destino
function capturarMoedaDestino (){
    moedaDestino = document.getElementById("moedaPara").value;
    console.log(moedaDestino);
}

const arrayMoedas = ["dolar", "real", "euro", "libra", "peso argentino"];
const arrayValores = [5.25, 1, 5.10, 6.20, 0.027];

//função que faz a conversão das moedas e mostra o resultado na tela
function converter(){
    let valor = Number(document.getElementById("valor").value);
    if(valor <= 0){
        alert("Por favor, insira um valor válido");
        return;
    }

    console.log(valor);

    let valorConvertido = 0;

        for (let i = 0; i < arrayMoedas.length; i++){
            if (moedaOrigem === arrayMoedas[i]){
            for (let j = 0; j < arrayMoedas.length; j++){
                    if (moedaDestino === arrayMoedas[j]){
                        valorConvertido = ((arrayValores[i] / arrayValores[j]) * valor).toFixed(2);
                    }
                }   
            }
        }
    
    const arrayMoedasFormatadas = ["dolares", "reais", "euros", "libras", "pesos argentinos"];

    for (let i = 0; i < arrayMoedas.length; i++){
        if (moedaDestino === arrayMoedas[i]){
            document.getElementById("resultado").innerHTML = `O valor convertido
             é de ${valorConvertido} ${arrayMoedasFormatadas[i]}`;
            }
    }

}


