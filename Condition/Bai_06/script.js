function check() {
    const phantramhoahong = document.getElementById('phantramhoahong').value;
    const doanhso = document.getElementById('doanhso').value;

    var result = document.getElementById('calResult');
    console.log(phantramhoahong * doanhso);
    if(isNaN(phantramhoahong) || isNaN(doanhso)) {
        alert('Hãy nhập số nguyên');   
    }else {
        var hoahong = doanhso * (phantramhoahong / 100);
        result.innerHTML = `Số hoa hồng nhận được là ${hoahong} đồng`;
    } 
}