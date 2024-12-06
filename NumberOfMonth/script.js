const month = document.getElementById('month');
month.addEventListener('keydown', function (e) {
  const value = e.key
  var currentValue = month.value;
  const controKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
  if (value == 0 && currentValue == 0 || (isNaN(value) && !(controKeys.includes(value))) || (currentValue + value) > 12) {
    e.preventDefault();
  }
})


function calculateDays() {
  const resultElement = document.getElementById('result');
  let days = 28;
  //TODO 
  const month = Number(document.getElementById('month').value);
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break;

  }
  resultElement.textContent = `Month ${month}  have ${days === 28 ? '28 or 29 days' : days + "days"}`;
}