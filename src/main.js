const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");

const calcIMC = () => {
  if (altura.value != "" && peso.value != "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classification = "";

    if (imc < 18.5) {
      classification = "Você está abaixo do peso";
    } else if (imc < 25) {
      classification = "Parabéns, você está com o peso normal";
    } else if (imc < 30) {
      classification = "Você está acima do peso ideal";
    } else if (imc < 35) {
      classification = "Cuide-se, você está com obesidade grau I";
    } else if (imc < 41) {
      classification = "Vá ao médico, você está com obesidade grau II";
    } else {
      classification =
        "Tu quer morrer viado?, você está com obesidade grau III";
    }
    resultado.innerHTML = `IMC: ${imc} (${classification})`;
  } else {
    resultado.innerHTML = "Preencha os campos";
  }
};
