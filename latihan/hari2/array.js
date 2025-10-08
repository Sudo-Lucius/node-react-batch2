var angka = [10, 7, 6, 9, 4]
console.log(angka[0])
console.log(angka[4])

console.log("---------------------------------------------")
console.log(angka.length)

console.log("---------------------------------------------")
angka.push(5)
console.log(angka)

console.log("---------------------------------------------")
angka.pop(4)
console.log(angka)

console.log("---------------------------------------------")
angka.unshift(14)
console.log(angka)

console.log("---------------------------------------------")
angka.shift(14)
console.log(angka)

console.log("---------------------------------------------")
var angkaJoin = angka.join(" * ");
console.log(angkaJoin)

console.log("---------------------------------------------")
var huruf = ["Yanto", "Depri", "Tino", "Wan", "Alfin", "Wilgend"]
var nama = "Yanto".split("")
console.log(nama)

console.log("---------------------------------------------")
huruf.sort()
console.log(huruf)

console.log("---------------------------------------------")
var myNama = huruf.slice(1)
console.log(myNama)

console.log("---------------------------------------------")
huruf.splice(3, 4, "Dom", "Byas")
console.log(huruf)

