// di index2.js
var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(10000, books[0])
    .then(function(time) {
        return readBooksPromise(time, books[1]);
    })
    .then(function(time) {
        return readBooksPromise(time, books[2]);
    })
    .then(function(time) {
        console.log("Selesai membaca semua buku, sisa waktu: " + time + " ms");
    })
    .catch(function(err) {
        console.log("Proses terhenti karena waktu tidak cukup, sisa waktu: " + err + " ms");
    });
