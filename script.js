function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const scale = document.getElementById("scale").value;
  
    if (isNaN(temperature)) {
      document.getElementById("result").innerText = "Por favor, insira um valor numérico válido.";
      return;
    }
  
    let result, message;
  
    if (scale === "C") {
      result = (temperature * 9 / 5) + 32;
      message = getTemperatureMessage(result, "F");
      document.getElementById("result").innerText = `Resultado: ${result.toFixed(2)} °F - ${message}`;
    } else if (scale === "F") {
      result = (temperature - 32) * 5 / 9;
      message = getTemperatureMessage(result, "C");
      document.getElementById("result").innerText = `Resultado: ${result.toFixed(2)} °C - ${message}`;
    }
  }
  
  function getTemperatureMessage(temp, scale) {
    if (scale === "F") {
      if (temp <= 32) return "Muito frio";
      else if (temp <= 59) return "Frio";
      else if (temp <= 77) return "Temperatura agradável";
      else if (temp <= 95) return "Calor";
      else return "Muito calor";
    } else if (scale === "C") {
      if (temp <= 0) return "Muito frio";
      else if (temp <= 15) return "Frio";
      else if (temp <= 25) return "Temperatura agradável";
      else if (temp <= 35) return "Calor";
      else return "Muito calor";
    }
  }
  
  function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("scale").value = "C";
    document.getElementById("result").innerText = "";
  }
  