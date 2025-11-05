function hitungBangunDatar(luasFn, kelilingFn, ...params) {
  return {
    luas: luasFn(...params),
    keliling: kelilingFn(...params)
  };
}

function hitungPersegi(sisi) {
  return hitungBangunDatar(
    (s) => s * s,  
    (s) => 4 * s,  
    sisi
  );
}

function HitungPersegiPanjang(panjang, lebar) {
  return hitungBangunDatar(
    (p, l) => p * l,
    (p, l) => 2 * (p + l), 
    panjang, lebar
  );
}

console.log(hitungPersegi(8)); 
console.log(HitungPersegiPanjang(12, 7)); 

console.log("------------------------------------------------------")
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

people.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

function namaOrang(arr, index = 1, pos = 0) {
  if (pos >= arr.length) {
    return; 
  }
  
  console.log(`${index}. ${arr[pos].name}`);
  
  
  namaOrang(arr, index + 1, pos + 1);
}


namaOrang(people);

console.log("------------------------------------------------------")

var phones = [
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
];

var filteredPhones = phones.filter(phone => phone.colors.includes("black"));

filteredPhones.sort((a, b) => a.year - b.year);

function filteredSmartphones(arr, index = 1, pos = 0) {
  if (pos >= arr.length) {
    return; 
  }
  
  var colorsStr = arr[pos].colors.join(", ");
  
  console.log(`${index}. ${arr[pos].name}, colors available : ${colorsStr}`);
  
  
  filteredSmartphones(arr, index + 1, pos + 1);
}

filteredSmartphones(filteredPhones);
