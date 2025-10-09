const PI = 3.14159;

const luasLingkaran = (r) => {
  let luas = PI * r * r;
  return luas;
};

const kelilingLingkaran = (r) => {
  let keliling = 2 * PI * r;
  return keliling;
};

console.log(`Luas lingkaran dengan radius 5: ${luasLingkaran(5)}`); 
console.log(`Keliling lingkaran dengan radius 7: ${kelilingLingkaran(7)}`); 


console.log("-------------------------------------------------------------------------")

const introduce = (...params) => {
  const [name, age, gender, job] = params;
  
  const prefix = gender.toLowerCase().includes('laki') ? 'Pak' : 'Ibu';
  const namaLower = name.toLowerCase();
  const jobStr = `seorang ${job}`;
  const ageStr = `berusia ${age} tahun`;
  
  return `${prefix} ${namaLower} adalah ${jobStr} yang ${ageStr}`;
};

const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn)

const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
console.log(perkenalanSarah)

console.log("------------------------------------------------------------------------")
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    }
  };
}

console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log("------------------------------------------------------------------------")
let phone = {
    name : "Galaxy Note 20",
    brand : "Samsung",
    year : 2020,
    colors : ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
const { brand: phoneBrand, name: phoneName, year, colors: [colorBronze, , colorBlack] } = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

console.log("------------------------------------------------------------------------")
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku = {
  ...buku,
  warnaSampul: [...buku.warnaSampul],
  ...dataBukuTambahan
};

console.log(buku)

console.log("-----------------------------------------------------------------------")
const addProducts = (brandObj, newProds) => {
  return {
    ...brandObj,
    products: [...brandObj.products, ...newProds]
  };
};

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
 }

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)
samsung.products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}: ${product.colors.join(', ')}`);
});

console.log("-----------------------------------------------------------------------")
const createPerson = (dataArray) => {
  const [nama, domisili, umur] = dataArray;
  return { nama, domisili, umur };
};

let data = ["Bondra", "Medan", 25];
console.log(createPerson(data));

console.log("-----------------------------------------------------------------------")
const graduate = (...studentArrays) => {
  const allStudents = [].concat(...studentArrays);
  
  return allStudents.reduce((acc, student) => {
    const className = student.class;
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(student.name);
    return acc;
  }, {});
};

// TEST CASES
const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
];

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
];

console.log(graduate(data1));

console.log(graduate(data2));