function calcularMedia() {
    const numerosInput = document.getElementById('numerosInput').value;
    const numerosArray = numerosInput.split(',').map(numero => parseFloat(numero.trim()));

    // Remover valores vazios ou NaN do array
    const numerosValidos = numerosArray.filter(numero => !isNaN(numero));

    if (numerosValidos.length === 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
        return;
    }

    const media = calcularMediaAritmetica(numerosValidos);
    document.getElementById('resultado').textContent = `A média é: ${media.toFixed(2)}`;
}

function calcularMediaAritmetica(numeros) {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}
