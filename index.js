function calculate(){
    var height= (document.getElementById("height").value)/ 100
    var weight= document.getElementById("weight").value

    var imc = weight / height ** 2;
    var text=""
    if (imc < 20) {
      text="Você está abaixo do peso"
    } else if (imc > 19 & imc < 26) {
      text="Você está normal"
    } else if (imc > 25 & imc < 30) {
      text="Você está com sobrepeso"
    } else if (imc > 30 & imc < 35) {
      text="Você está com obesidade 1"
    } else if (imc > 35 & imc > 40) {
      text="Você está com obesidade 2"
    }  else if (imc > 40) {
        text="Você está com obesidade 3"
    }
    document.getElementById("text_area").innerText=text
  }