//Masih satu folder dengan file callback.js, buatlah sebuah file dengan nama index.js lalu tuliskan code seperti berikut.
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function readNext(time, index) {
    if (index >= books.length || time <= 0) {
        return;
    }
    
    readBooks(time, books[index], function(sisaWaktu) {
        readNext(sisaWaktu, index + 1);
    });
}

readNext(10000, 0);

