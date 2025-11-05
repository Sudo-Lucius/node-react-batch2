const express = require('express')
const app = express();
const port = 3000;
app.get('/lingkaran-tabung', (req, res) => {
    const jari = parseFloat(req.query.jari);  
    const tinggi = parseFloat(req.query.tinggi);  

    if (isNaN(jari) || isNaN(tinggi)) {
        return res.status(400).send('Error: Jari-jari dan tinggi harus berupa angka.');
    }

    const pi = Math.PI;
    const luasAlas = pi * jari * jari;  
    const kelilingAlas = 2 * pi * jari;  
    const volumeTabung = pi * jari * jari * tinggi; 

    const response = `jari jari : ${jari}, tinggi: ${tinggi}, volume tabung : ${volumeTabung.toFixed(2)}, luas alas tabung : ${luasAlas.toFixed(2)}, keliling alas tabung : ${kelilingAlas.toFixed(2)}`;

    
    res.send(response);
});

app.get('/data-orang', (req, res) => {
    let dataOrang = [
        {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
        {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
        {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
        {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
        {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
    ];
    
    let umurParam = parseFloat(req.query.umur); 
    let genderParam = req.query.gender;  
    let filteredData = dataOrang;

    if (!isNaN(umurParam)) {
        filteredData = filteredData.filter(item => item.umur >= umurParam);
    }

    if (genderParam) {
        filteredData = filteredData.filter(item => item.jenisKelamin === genderParam);
    }

    let response = '';
    if (filteredData.length > 0) {
        filteredData.forEach((item, index) => {
            response += `${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun\n`;
        });
    } else {
        response = 'Tidak ada data yang sesuai.';
    }


    res.send(response);
});

app.get('/data-orang/:id', (req, res) => {
    let dataOrang = [
        {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
        {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
        {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
        {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
        {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
    ];

    let idParam = parseInt(req.params.id);
    let person = dataOrang.find(item => item.id === idParam);

    if (person) {
        let title = person.jenisKelamin === "L" ? "Pak" : "Bu";
        let response = `${title} ${person.name} adalah seorang ${person.pekerjaan} yang berusia ${person.umur} tahun`;
        res.send(response);
    } else {
        // Jika tidak ditemukan
        res.send('Maaf data tidak ditemukan');
    }
});



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});




     

