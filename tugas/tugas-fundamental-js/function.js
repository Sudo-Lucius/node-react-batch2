function introduce(nama, gender, pekerjaan, umur) {
  var panggilan = "";

  if (gender === "laki-laki") {
    panggilan = "Pak";
  } else if (gender === "perempuan") {
    panggilan = "Bu";
  }

  return panggilan + " " + nama + " adalah seorang " + pekerjaan + " yang berusia " + umur + " tahun";
}

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah);

console.log("--------------------------------------------------------------------------")

function karakterUnik(text) {
  text = text.toLowerCase().replace(/\s+/g, "");
  var hasil = "";

  for (var i = 0; i < text.length; i++) {
    var huruf = text[i];
    if (text.indexOf(huruf) === text.lastIndexOf(huruf)) {
      hasil += huruf;
    }
  }

  return hasil;
}

var text = "Super Bootcamp Fullstack Dev 2022";
console.log(karakterUnik(text));

console.log("--------------------------------------------------------------------------")
function cariTerbesarTerkecil(angka) {
  var terbesar = angka[0];
  var terkecil = angka[0];

  for (var i = 1; i < angka.length; i++) {
    if (angka[i] > terbesar) {
      terbesar = angka[i];
    }
    if (angka[i] < terkecil) {
      terkecil = angka[i];
    }
  }

  return "Angka terbesar adalah " + terbesar + " dan angka terkecil adalah " + terkecil;
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
console.log(cariTerbesarTerkecil(angka));

console.log("-------------------------------------------------------------------------")

function arrangeString(str) {
  return str.split("").sort().join("");
}

// TEST CASES
console.log(arrangeString("bahasa"));     
console.log(arrangeString("similikiti")); 
console.log(arrangeString("sanbercode")); 
console.log(arrangeString(""));           

function palindrome(kata) {
  var bersih = kata.toLowerCase().replace(/\s+/g, "");
  var dibalik = bersih.split("").reverse().join("");
  return bersih === dibalik;
}

// TEST CASES
console.log(palindrome('katak'));      
console.log(palindrome('blanket'));    
console.log(palindrome('nababan'));   
console.log(palindrome('haji ijah'));  
console.log(palindrome('mister'));     

console.log("----------------------------------------------------------------------")
function angkaPalindrome(num) {
  num++;
  
  while (true) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    
    if (str === reversed) {
      return num; 
    }
    
    num++; 
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 

console.log("----------------------------------------------------------------------")
function cekPermutasi(str1, str2) {
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

// TEST CASES
console.log(cekPermutasi("abah", "baha")); 
console.log(cekPermutasi("ondel", "delon")); 
console.log(cekPermutasi("paul sernine", "arsene lupin")); 
console.log(cekPermutasi("taco", "taca")); 
