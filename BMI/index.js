function calculateBMI() {
  const resultElement = document.getElementById('result');
  //TODO
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  let result = weight / (Math.pow(height, 2));
  resultElement.innerHTML = 'Your BMI is '+result;
}