var filterCarsPromise = require('./promise3.js');

console.log("=== Kondisi 1: Mobil berwarna hitam tahun 2019 (Promise) ===");
filterCarsPromise("black", 2019)
  .then(cars => {
    console.log("Mobil ditemukan:", cars); 
  })
  .catch(err => {
    console.log("Error:", err.message);
  });


console.log("\n=== Kondisi 2: Mobil berwarna silver tahun 2017 (Promise) ===");
filterCarsPromise("silver", 2017)
  .then(cars => {
    console.log("Mobil ditemukan:", cars); 
  })
  .catch(err => {
    console.log("Error:", err.message);
  });


async function runAsyncConditions() {
  console.log("\n=== Kondisi 3: Mobil berwarna abu-abu tahun 2019 (async/await) ===");
  try {
    const cars = await filterCarsPromise("grey", 2019);
    console.log("Mobil ditemukan:", cars);
  } catch (err) {
    console.log("Error:", err.message); 
  }

  
  console.log("\n=== Kondisi 4: Mobil berwarna abu-abu tahun 2018 (async/await) ===");
  try {
    const cars = await filterCarsPromise("grey", 2018);
    console.log("Mobil ditemukan:", cars); 
  } catch (err) {
    console.log("Error:", err.message);
  }

  
  console.log("\n=== Kondisi 5: Mobil berwarna hitam tahun 2020 (async/await) ===");
  try {
    const cars = await filterCarsPromise("black", 2020);
    console.log("Mobil ditemukan:", cars); 
  } catch (err) {
    console.log("Error:", err.message);
  }
}

runAsyncConditions();
