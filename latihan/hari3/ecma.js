var kerja = "Makan"
const bajuTekstil = "Kaos Denim"

function baju(){
    console.log("Baju")
}

console.log(baju)
console.log(`Aku sedang ${kerja}`)

let bike = {
    brake : "bembo",
    oil : "Shell",
    tyre : "Maxxis"
}

let {brake, oil, tyre} = bike

console.log(brake, oil)

let pemainBola = ["Walsh", "Idzees", "Verdonk", "Ole"]

let [Walsh, Idzees, ...Rest] = pemainBola

console.log(Walsh, Rest)
