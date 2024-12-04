function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultElement = document.getElementById('result');

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultElement.textContent = "Please enter valid weight and height!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = '';
  if (bmi < 18) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultElement.textContent = `Your BMI is ${bmi} (${category}).`;
}