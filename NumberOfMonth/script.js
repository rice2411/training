var click = 0;
function calculateDays() {
  const resultElement = document.getElementById('result');
  //TODO 
  
  const month = document.getElementById('month').value;
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 1 || month == 10 || month == 12) {
    resultElement.textContent = `Month ${month} has 31 days`;
  }else if(month == 2) {
    const currentYear = new Date().getFullYear;
    if (currentYear % 4 ==0 && !(currentYear % 100 ==0 && currentYear % 400 !=0)) {
      resultElement.textContent = `Month ${month} of this year has 29 days`;
    }else{
      resultElement.textContent = `Month ${month} of this year has 28 days`;
    }
  }else if (isNaN(month) || 0 < month && month<=12){
    resultElement.textContent = `Month ${month} has 30 days.`;
  }else{
    alert('please enter a valid number')
  }
}