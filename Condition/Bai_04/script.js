function check() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    var result = document.getElementById('calResult');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Hãy nhập số nguyên');   
    }else {
        var maxValue = Math.max(a,b,c);
        result.innerHTML = `Số lớn nhất trong ba số là ${maxValue}`;
    } 
}