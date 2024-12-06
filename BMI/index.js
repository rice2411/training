function calculateBMI() {
  const resultElement = document.getElementById('result');
  //TODO
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  let result = weight / (Math.pow(height, 2));

  if (height == '' || weight == '' || height >= 2 || weight >= 200) {
    alert('Hãy nhập giá trị hợp lệ')
  } else if (result < 18.5) {
    resultElement.innerHTML = 'Your BMI is '+result.toFixed(1) + ' (Underweight)';
  }else if (result >= 18.5 && result < 25) {
    resultElement.innerHTML = 'Your BMI is '+result.toFixed(1) + ' (Normal)';
  }else if (result >= 25 && result < 30) {
    resultElement.innerHTML = 'Your BMI is '+result.toFixed(1) + ' (Overwweight)';
  }else {
    resultElement.innerHTML = 'Your BMI is '+result.toFixed(1) + ' (Obese)';
  }
}