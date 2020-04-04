function getInfo() {
    let mssv = document.getElementById("msSinhVien").value;
    console.log(mssv);
    if (mssv == "") {
        document.getElementById("error-mssv").innerHTML = "*Vui lòng nhập mssv";
        return;
    }

    let hoTen = document.forms["info"].hoTen.value;
    if (hoTen == "") {
        document.getElementById("error-hoTen").innerHTML = "*Vui lòng nhập Họ Tên";
        return ;
    }
    let email = document.forms["info"].email.value;
    if (email == "") {
        document.getElementById("error-email").innerHTML = "*Vui lòng nhập Email";
        return ;
    }

    if (isNaN(email) == "true") {
        document.getElementById("error-email").innerHTML =
            "*Vui lòng nhập đúng định dạng Email";
        return ;
    }
    let gioiTinh = document.forms["info"].gioiTinh.value;
    if (gioiTinh == "") {
        document.getElementById("error-gioiTinh").innerHTML =
            "*Vui lòng chọn giới tính";
        return ;
    }
    let soThich = document.getElementsByName('soThich');
    let danhSachSoThich = "";
    for (var i = 0; i < soThich.length; i++) {
        if (soThich[i].checked === true) {
            danhSachSoThich += soThich[i].value + " , ";
        }
    }
    if (danhSachSoThich == "") {
        document.getElementById("error-soThich").innerHTML =
            "*Vui lòng chọn sở thích";
        return ;
    }
    let quocTich = document.forms["info"].quocTich.value;
    if (quocTich == "") {
        document.getElementById("error-quocTich").innerHTML =
            "*Vui lòng chọn quốc tịch";
        return ;
    }
    let ghiChu = document.forms["info"].ghiChu.value;
    if (ghiChu == "") {
        alert("ghi chú:Ít hơn 200 kí tự");
        return ;
    }
    var text = document.getElementById("msSinhVien");
    if (text.value == "") {
        text.style.backgroundColor = "#d0eb18";
    }
    var text = document.getElementById("hoTen");
    if (text.value == "") {
        text.style.backgroundColor = "#d0eb18";
    }
    var text = document.getElementById("email");
    if (text.value == "") {
        text.style.backgroundColor = "#d0eb18";
        return false;
    }
    let info = "";
    info = "mssv:" + mssv + "<br>";
    info += "họ và tên :" + hoTen + "<br>";
    info += "email :" + email + "<br>";
    info += "Giới tính :" + gioiTinh + "<br>";
    info += "Sở thích :" + danhSachSoThich + "<br>";
    info += "Quốc tịch :" + quocTich + "<br>";
    info += "Ghi chú :" + ghiChu + "<br>";
    document.getElementById("output").innerHTML = info;
}




