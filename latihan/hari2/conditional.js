var ayam = true;
var jenisAyam = "Kate";
var ukuranAyam = "Besar";
if  (ayam == false && jenisAyam == "Kate" && ukuranAyam == "Besar"){
        console.log("Ini ayam jenis kate ukuran besar")
}
else if (jenisAyam != "Kate"){
    console.log("Ini bukan ayam jenis kate")
}
else if (ukuranAyam != "Besar"){
    console.log("Ini bukan ayam jenis kate tapi ukuran besar")
}
else {
    console.log("Ini bukan ayam")
}


console.log("-------------------------------------------------------------")


var aksiMobil = "default";
switch(aksiMobil) {
    case 1: {console.log("Injak Rem"); break; }
    case 2: {console.log("Injak Kopling"); break; }
    case 3: {console.log("Injak gas"); break; }
    default: {console.log("Tarik Rem Tangan"); break; }
}

console.log("-------------------------------------------------------------")

var usiaWarga = 16;
var punyaSim = usiaWarga >= 17 ? "Boleh memiliki SIM" : "Belum bisa memiliki SIM"
console.log(punyaSim)