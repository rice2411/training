function check() {
    const sophut = parseFloat(document.getElementById('sophut').value);

    var result = document.getElementById('calResult');

    let tongsotien = 25000;

    if (isNaN(sophut)) {
        alert('Hãy nhập số');   
    }else if(sophut <= 50 ) {
        tongsotien += (sophut * 600)
        result.innerHTML = `Cước điện thoại của bạn là ${tongsotien} đồng`;
    }else if(sophut > 50 && sophut <= 200){
        tongsotien += (50 * 600) + ((sophut - 50) * 400);
        result.innerHTML = `Cước điện thoại của bạn là ${tongsotien} đồng`;
    }else{
        tongsotien += (50 * 600) + (150 * 400) + ((sophut - 200) * 200);
        result.innerHTML = `Cước điện thoại của bạn là ${tongsotien} đồng`;
    }

}