var filterBooksPromise = require('./promise2.js');

console.log("=== Kondisi 1: Buku berwarna dan 50 halaman (Promise) ===");
filterBooksPromise(true, 50)
  .then(books => {
    console.log("Buku ditemukan:", books); 
  })
  .catch(err => {
    console.log("Error:", err.message);
  });

async function runAsyncConditions() {
  console.log("\n=== Kondisi 2: Buku tidak berwarna dan 250 halaman (async/await) ===");
  try {
    const books = await filterBooksPromise(false, 250);
    console.log("Buku ditemukan:", books);
  } catch (err) {
    console.log("Error:", err.message);
  }

  
  console.log("\n=== Kondisi 3: Buku berwarna dan 30 halaman (async/await) ===");
  try {
    const books = await filterBooksPromise(true, 30);
    console.log("Buku ditemukan:", books);
  } catch (err) {
    console.log("Error:", err.message);
  }
}


runAsyncConditions();
