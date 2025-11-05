var buah = [
    { nama : "Nanas", warna : "Kuning", adaBijinya : "Tidak", harga : 9000},
    { nama : "Jeruk", warna : "Oranye", adaBijinya : "Ada", harga : 8000},
    { nama : "Semangka", warna : "Hijau & Merah", adaBijinya : "Ada", harga : 10000},
    { nama : "Pisang", warna : "Kuning", adaBijinya : "Tidak", harga : 5000},



]

var tanpaBijinya = buah.filter(function(buah){
    return buah.adaBijinya == "Tidak";
})
console.log(tanpaBijinya)

console.log("----------------------------------------------------------------------------")
function tambahDataFilm(nama, durasi, genre, tahun) {
  var filmBaru = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun
  };
  
  dataFilm.push(filmBaru);
}
var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

console.log("----------------------------------------------------------------------------")

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];


var filter = people.filter(function(person) {
  return person.gender === "male" && person.age > 29;
});

console.log("Data laki-laki dengan umur di atas 29 tahun:");
console.log(filter);

console.log("----------------------------------------------------------------------------")
var totalUmur = filter.reduce(function(total, person) {
  return total + person.age;
}, 0);

var rataRataUmur = totalUmur / filter.length;

console.log("Rata-rata umur:", rataRataUmur);

console.log("----------------------------------------------------------------------------")
people.sort(function(a, b) {
  return a.age - b.age;
});


console.log("Urutan berdasarkan umur:");
people.forEach(function(person, index) {
  console.log((index + 1) + ". " + person.name);
});


console.log("----------------------------------------------------------------------------")
var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
};

function addColors(warnaBaru) {
  phone.colors.push(warnaBaru);
}
addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log(phone);
