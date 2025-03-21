class Parquimetro {
    constructor() {
        this.valores = [1.00, 1.75, 3.00];
        this.tempo = [30, 60, 120];
        this.valorMinimo = 1.00;
    }

    calcularTempo(valorInserido) {
        let tempoMaximo = 0;
    
        for (let i = this.valores.length - 1; i >= 0; i--) {
            if (valorInserido >= this.valores[i]) {
                tempoMaximo = this.tempo[i];
                break; 
            }
        }
    
        return tempoMaximo;
    }

    calcularTroco(valorInserido) {
        let valorNecessario = 0;
    
        for (let i = this.valores.length - 1; i >= 0; i--) {
            if (valorInserido >= this.valores[i]) {
                valorNecessario = this.valores[i];
                break;
            }
        }
    
        return (valorInserido - valorNecessario).toFixed(2);
    }
    

    exibirResultado(tempo, troco) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tempo: ${tempo} minutos<br>Troco: R$ ${troco}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let parquimetro = new Parquimetro();
    let botaoCalcular = document.getElementById("calcular");

    botaoCalcular.addEventListener("click", function() {
        let valorInserido = parseFloat(document.getElementById("valor").value);

        if (isNaN(valorInserido) || valorInserido < parquimetro.valorMinimo) {
            document.getElementById("resultado").innerHTML = "Valor insuficiente!";
            return;
        }

        let tempo = parquimetro.calcularTempo(valorInserido);
        let troco = parquimetro.calcularTroco(valorInserido);

        parquimetro.exibirResultado(tempo, troco);
        document.getElementById("valor").value = "";

    });
});

