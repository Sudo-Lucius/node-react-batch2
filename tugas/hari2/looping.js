console.log("LOOPING PERTAMA");

var angka = 2;
while (angka <= 20) {
  console.log(angka + " - I love coding");
  angka += 2;
}

console.log("LOOPING KEDUA");

var angka2 = 20;
while (angka2 >= 2) {
  console.log(angka2 + " - I love coding");
  angka2 -= 2;
}


console.log("--------------------------------------------")

var angka = 1;

while (angka <= 20) {
  if (angka % 2 === 0) {
    console.log(angka + " - Angka Genap");
  } else {
    console.log(angka + " - Angka Ganjil");
  }
  angka++;
}

console.log("--------------------------------------------")
for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 3 === 0 && i % 2 === 0) {
    console.log(i + " - ToT");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}

console.log("---------------------------------------------")
var panjang = 7;
var hasil = "";

for (var i = 1; i <= panjang; i++) {
  hasil = "";
  for (var j = 1; j <= i; j++) {
    hasil += "#";
  }
  console.log(hasil);
}

console.log("----------------------------------------------")
var sentence = "Fullstack Developer";
var hasil = "";

for (var i = 0; i < sentence.length; i++) {
  var huruf = sentence[i].toLowerCase();

  // cek apakah karakter adalah huruf konsonan (bukan vokal dan bukan spasi)
  if (
    huruf !== "a" &&
    huruf !== "i" &&
    huruf !== "u" &&
    huruf !== "e" &&
    huruf !== "o" &&
    huruf !== " "
  ) {
    hasil += sentence[i];
  }
}

console.log(hasil);
