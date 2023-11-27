window.onload = function() {
  const planets = {
    sun: 27.9,
    mercury: 0.377,
    venus: 0.9032,
    earth: 1,
    moon: 0.1655,
    mars: 0.3895,
    jupiter: 2.640,
    saturn: 1.139,
    uranus: 0.917,
    neptune: 1.148,
    pluto: 0.06
  };
  
  var choices = document.getElementById("planet");
  Object.keys(planets).forEach(function(key) {
    var option = document.createElement("option");
    option.value = key;
    option.text = key.charAt(0).toUpperCase() + key.slice(1);
    choices.appendChild(option);
  });
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var weight = document.querySelector('#weight').value;
  var planet = document.querySelector('#planet').value;

  if (isNaN(weight) || weight === '') {
      alert("Please enter a valid weight.");
      return;
  }

  const planets = {
    sun: 27.9,
    mercury: 0.377,
    venus: 0.9032,
    earth: 1,
    moon: 0.1655,
    mars: 0.3895,
    jupiter: 2.640,
    saturn: 1.139,
    uranus: 0.917,
    neptune: 1.148,
    pluto: 0.06
  };

  var result = weight * planets[planet];
  var resultText;
  
  if (planet === 'sun') {
    resultText = `You would weigh ${Number(result.toFixed(0)).toLocaleString()} lbs on the ${planet}!`;
  }
  else {
    resultText = `You would weigh ${Number(result.toFixed(0)).toLocaleString()} lbs on ${planet}!`;
  }
  
  let resultElement = document.querySelector('#resultText');
  resultElement.textContent = resultText;
  resultElement.style.padding = '15px 20px';
  resultElement.style.border = '1px solid rgba(70, 130, 180, 0.7)';
  resultElement.style.background = 'linear-gradient(45deg, rgb(25, 25, 112), rgb(50, 25, 50))';
  resultElement.style.color = 'rgb(255, 235, 205)';

  var planetImage = document.getElementById('planetImage');
  planetImage.src = `imgs/${planet}.png`;
  planetImage.style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (event.target.id !== 'submit') {
      document.getElementById('resultText').textContent = '';
      resultText.style.padding = '0';
      resultText.style.border = '0';
      resultText.style.background = '0';
      document.getElementById('planetImage').style.display = 'none';
  }
});