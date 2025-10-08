var dataPeserta = ["john", "laki-laki", "programmer", "30"];

var output = "Halo, nama saya " + dataPeserta[0] + 
  ". saya " + dataPeserta[1] + 
  " berumur " + dataPeserta[3] + 
  " bekerja sebagai seorang " + dataPeserta[2];

console.log(output);

console.log("--------------------------------------------")
var sayuran = []
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
sayuran.sort()
for (i = 0; i < sayuran.length; i++) {
    console.log((i + 1) + ". " + sayuran[i])
}

console.log("--------------------------------------------")
var word = "car";
var subset = [];

for (var i = 0; i < word.length; i++) {
  var temp = "";
  for (var j = i; j < word.length; j++) {
    temp += word[j];
    subset.push(temp);
  }
}

console.log(subset);

console.log("--------------------------------------------")
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];
var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log("Jumlah total angka adalah:", total);

console.log("--------------------------------------------")
var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];

var hasil = [];

for (var i = 0; i < kumpulanAngka.length; i++) {
  var total = 0;
  for (var j = 0; j < kumpulanAngka[i].length; j++) {
    total += kumpulanAngka[i][j];
  }
  hasil.push(total);
}

console.log(hasil);
