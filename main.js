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
    resultText = 'Your weight on the ' + planet + ' is ' + Number(result.toFixed(0)).toLocaleString() + ' lbs';
  }
  else {
    resultText = 'Your weight on ' + planet + ' is ' + Number(result.toFixed(0)).toLocaleString() + ' lbs';
  }
  document.querySelector('#resultText').textContent = resultText;

  var planetImage = document.getElementById('planetImage');
  planetImage.src = `imgs/${planet}.png`;
  planetImage.style.display = 'block';
});

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

var select = document.getElementById("planet");
Object.keys(planets).forEach(function(key) {
  var option = document.createElement("option");
  option.value = key;
  option.text = key.charAt(0).toUpperCase() + key.slice(1);
  select.appendChild(option);
});
}

document.addEventListener('click', function(event) {
  if (event.target.id !== 'submit') {
      document.getElementById('resultText').textContent = '';
      document.getElementById('planetImage').style.display = 'none';
  }
});