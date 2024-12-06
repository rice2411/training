function check() {
    const age = document.getElementById('age').value;

    var result = document.getElementById('calResult');
   
    if (isNaN(age)) {
        alert('Hãy nhập số');   
    }else if(age >= 15 ) {
        result.innerHTML = 'Đã đủ tuổi vào lớp 10';
    } else{
        result.innerHTML = 'Chưa đủ tuổi vào lớp 10';
    }

}