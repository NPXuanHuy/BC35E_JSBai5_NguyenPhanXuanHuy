/** Tuyển sinh */
document.getElementById('btnTinhDiem').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value*1;
    var mon1 = document.getElementById('mon1').value*1;
    var mon2 = document.getElementById('mon2').value*1;
    var mon3 = document.getElementById('mon3').value*1;
    var khuVuc = document.getElementById('chonKhuVuc').value;
    var doiTuong = document.getElementById('chonDoiTuong').value*1;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    
    var content = "";
    if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        content += "Rớt";
    } else { 
        if (khuVuc == "A") {
            diemKhuVuc = 2;
        } else if (khuVuc == "B") {
            diemKhuVuc = 1;
        } else if (khuVuc == "C") {
            diemKhuVuc = 0.5;
        }

        if (doiTuong == 1) {
            diemDoiTuong = 2.5;
        } else if (doiTuong == 2) {
            diemDoiTuong = 2;
        } else if (doiTuong == 3) {
            diemDoiTuong = 1; /**không hoạt động */
        }
        diemThi = mon1 + mon2 + mon3 + diemDoiTuong + diemKhuVuc;
        if (diemThi >= diemChuan) {
            content += "Đậu";
        } else {
            content += "Rớt";
        }
    }
    
document.getElementById('showInfoTinhDiem').innerHTML = diemThi + ' điểm ' +content;
}


/** Tiền điện */
document.getElementById('btnTinhTien').onclick = function () {
    var HovaTen = document.getElementById('hovaTen').value;
    var KW = document.getElementById('kw').value*1;
    var Tien = 0;

    if(KW <= 50){
        Tien = KW*500;
    } else if (KW > 50 && KW <= 100) {
            Tien = 50*500 + (KW-50)*650;
    } else if (KW > 100 && KW <= 200) {
        Tien = 50*500 + 50*650 + (KW-100)*850;
    } else if (KW > 200 && KW <= 350) {
        Tien = 50*500 + 50*650 + 100*850 + (KW - 200)*1100;
    } else if ( KW > 350) {
        Tien = 50*500 + 50*650 + 100*850 + 150*1100 + (KW - 350)*1300;
    } /** else if cuối ko hoạt động */
        
    document.getElementById('showInfoTinhTien').innerHTML =' Anh/Chị'+ HovaTen + ' số tiền điện là ' + Tien +" VNĐ";
    
}

/** Thu nhập cá nhân */
document.getElementById('btnThue').onclick = function () {
    var hoVaTen = document.getElementById('hoVaTen').value;
    var tongThuNhap = document.getElementById('tongThuNhap').value*1;
    var nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value*1;
    var thunhapchiuthue = 0;
    var thunhap = 0;

    if (tongThuNhap <= 60) {
        thunhapchiuthue = tongThuNhap*0.05;
    } else if (tongThuNhap > 60 && tongThuNhap <= 120) {
        thunhapchiuthue = 60*0.05 + (tongThuNhap-60)*0,1;
    } else if ( tongThuNhap > 120 && tongThuNhap <= 210){
        thunhapchiuthue = 60*0.05 + 60*0.1 +(tongThuNhap-120)*0.15;
    } else if (tongThuNhap > 210 && tongThuNhap <= 384) {
        thunhapchiuthue = 60*0.5 + 60*0.1 + 90*0.15 + (tongThuNhap-210)*0.2;
    } else if ( tongThuNhap > 384 && tongThuNhap <= 624) {
        thunhapchiuthue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + (tongThuNhap-384)*0.25;
    } else if ( tongThuNhap > 624 && tongThuNhap <= 960) {
        thunhapchiuthue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + (tongThuNhap-624)*0.3;
    } else if (tongThuNhap > 960) {
        thunhapchiuthue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + 336*0.3+(tongThuNhap-960)*0.35;
    }

    document.getElementById('showInfoThuNhap').innerHTML = "Anh/Chị " + hoVaTen + "thuế thu nhập cá nhân đóng là: " + thunhapchiuthue +"Triệu VND"
}