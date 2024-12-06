function check() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;

    var result = document.getElementById('calResult');

    if(a == '' || b == '') {
        alert('Hãy nhập giá trị hợp lệ')
    }else if (a%b == 0) {
        result.innerHTML = 'a chia hết cho b';
    }else{
        result.innerHTML = 'a không chia hết cho b';
    }

}