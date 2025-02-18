function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = weight / (height * height);
    let resultText = `Seu IMC é ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        resultText += " Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultText += " Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        resultText += " Você está com sobrepeso.";
    } else {
        resultText += " Você está com obesidade.";
    }

    document.getElementById('result').innerText = resultText;
}
