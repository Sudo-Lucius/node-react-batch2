function periksaBarang(stokBarang, callback){
    if(stokBarang >= 10 ) {
        callback(true)
    } else {
        callback(false)
    }
}

periksaBarang(10, function(check){
    if(check) {
        console.log("Barang masih banyak")
    } else {
        console.log("Barang hampir habis")
    }
})