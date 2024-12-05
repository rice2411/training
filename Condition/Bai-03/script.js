function check() {
    const integer = document.getElementById('integer').value;

    var result = document.getElementById('calResult');
    console.log(integer);
    if (isNaN(integer) || integer == 0) {
        alert('Hãy nhập số khác 0');   
    }else if(integer > 0 ) {
        result.innerHTML = `Số ${integer} lớn hơn 0`;
    } else {
        result.innerHTML = `Số ${integer} nhỏ hơn 0`;
    }

}