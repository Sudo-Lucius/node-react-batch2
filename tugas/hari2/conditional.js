var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript"
var panjangKalimat = sentence.length
if (panjangKalimat <= 10) {
    console.log("Pendek")
}
else if (panjangKalimat >= 10 && panjangKalimat <= 30) {
 console.log("Sedang")
}
else {
    console.log("Panjang")
}

console.log("---------------------------------------------")
var nilai = 100

if (nilai >= 80 && nilai <= 100) {
    console.log("Nilai indeks A")
}
else if (nilai >= 70 && nilai < 80) {
    console.log("Nilai indeks B")
}
else if (nilai >= 60 && nilai < 70){
    console.log("Nilai indeks C")
} 
else if (nilai >= 50 && nilai < 60){
    console.log("Nilai indeksnya D")
}
else if (nilai < 50) {
    console.log("Nilai indeksnya E")
}
else {
    console.log("Nilai Tidak Valid")
}

console.log("---------------------------------------------")
var tanggal = 17;
var bulan = 5;
var tahun = 2003;
var namaBulan = "";

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

console.log(tanggal + " " + namaBulan + " " + tahun);
