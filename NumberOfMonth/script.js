
function calculateDays() {
  const resultElement = document.getElementById('result');
  //TODO 
    const month = Number(document.getElementById('month').value);
    var arr31days = [1,3,5,7,8,10,12];
    var arr30days = [4,6,9,11];

  switch (true) {
    case (arr31days.includes(month)):
      resultElement.textContent = `Month ${month} has 31 days`;
      break;
    case month == 2:
      resultElement.textContent = `Month ${month} may have 28 days or 29 days`; 
      break;
    case (arr30days.includes(month)):
      resultElement.textContent = `Month ${month} has 30 days.`;
      break;
    default:
      alert('please enter a valid number')
      break;
  }
}