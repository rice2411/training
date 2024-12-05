function check() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;

    // var result = document.getElementById('calResult');
    var oldResult = document.getElementById('calResult');
    if (oldResult) {
        console.log(oldResult);
        oldResult.remove();
    }

    var result = document.createElement('div');
    result.id = 'calResult';
    result.style.marginTop = '20px';
    result.style.fontSize = '15px';
    result.style.color = '#333';
    document.getElementById('divContainer').appendChild(result);

    if (a%b == 0) {
        result.innerHTML = 'a chia hết cho b';
    }else{
        result.innerHTML = 'a không chia hết cho b';
    }

}