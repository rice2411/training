function check() {
    const kt01 = Number(document.getElementById('kt01').value);
    const kt02 = Number(document.getElementById('kt02').value);
    const kt_giuaky = Number(document.getElementById('kt_giuaky').value);
    const kt_cuoiky = Number(document.getElementById('kt_cuoiky').value);

    var result = document.getElementById('calResult');

    var xepLoai = ( ((kt01+kt02) * (20/100)) + (kt_giuaky * (30/100)) +(kt_cuoiky * (50/100)) ) / 4;
    
    if (isNaN(xepLoai)) {
        alert('Hãy nhập số nguyên');   
    }else if (xepLoai >= 0 && xepLoai <= 1) {
        result.innerHTML = `Xếp loại học lực của bạn là yếu`;
    } else if (xepLoai >1 && xepLoai <= 2) {
        result.innerHTML = `Xếp loại học lực của bạn là trung bình`;
    } else if(xepLoai >2 && xepLoai <=3) {
        result.innerHTML = `Xếp loại học lực của bạn là giỏi`;
    } else {
        alert('Bạn đã nhập điểm không hợp lệ');
    }
}