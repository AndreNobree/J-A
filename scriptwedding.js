// Defina a data e hora do fim da contagem regressiva
var countdownDate = new Date("2023-12-09T16:00:00").getTime();

// Atualiza o contador a cada segundo
var countdownTimer = setInterval(function() {
  // Obtém a data e hora atual
  var now = new Date().getTime();

  // Calcula a diferença entre a data atual e a data do fim da contagem regressiva
  var difference = countdownDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Exibe o contador no elemento HTML
  document.getElementById("countdown").innerHTML = days + " dias " + hours + " hr " + minutes + " min " + seconds + " seg";

  // Verifica se a contagem regressiva chegou ao fim
  if (difference < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Contagem regressiva encerrada!";
  }
  else if (difference == 0){
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Hoje é o grande dia!";
  }
}, 1000);
