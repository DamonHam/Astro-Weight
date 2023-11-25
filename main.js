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

  // Update the image source based on the selected planet
  var planetImage = document.getElementById('planetImage');
  planetImage.src = `imgs/${planet}.png`;
  planetImage.style.display = 'block'; // Show the image


  // Display the modal
  var modal = document.getElementById("resultModal");
  modal.style.display = "block";

  // Close the modal when the close button is clicked
  var closeButton = document.querySelector('.close-button');
  closeButton.onclick = function() {
      modal.style.display = "none";
  };

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
});
