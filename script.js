let kodePeserta = [];
for (let i = 1; i <= 180; i++) {
    let kode = 'Z' + i.toString().padStart(3, '0');
    kodePeserta.push(kode);
}

const namaHadiah = {
    'Baju': 2,
    'Celana': 5,
    'Tas': 2,
    'Jam Tangan': 5,
    'Kacamata': 5,
    'Kaos': 5,
    'Topi': 5,
    'Kemeja': 5,
    'Kaos Kaki': 5,
    'Sandal': 5,
    'Sepatu Olahraga': 2,
    'Sepatu Sneakers': 1,
    'Sepatu Boots': 1,
}

const tombol = document.querySelector("#tombol");


// Ketika tombol di klik, undi hadiah untuk 30 orang peserta, tampilkan hasil undian di tabel lalu kurangi jumlah hadiah yang tersedia
tombol.addEventListener("click", function () {
    let hasil = document.querySelector("#hasil");
    hasil.innerHTML = "";
    let peserta = [...kodePeserta];
    let hadiah = {...namaHadiah};
    let no = 1;
    for (let i = 0; i < 30; i++) {
        let pesertaRandom = peserta[Math.floor(Math.random() * peserta.length)];
        let hadiahRandom = Object.keys(hadiah)[Math.floor(Math.random() * Object.keys(hadiah).length)];
        // Cek apakah peserta duplikat
        if (peserta.includes(pesertaRandom)) {
            peserta.splice(peserta.indexOf(pesertaRandom), 1);
        }
        if (hadiah[hadiahRandom] > 0) {
            hadiah[hadiahRandom] -= 1;
            hasil.innerHTML += `<tr>
                    <th scope="row">${no}</th>
                    <td>${pesertaRandom}</td>
                    <td>${hadiahRandom}</td>
                </tr>`;
            no++;
        } else {
            i--;
        }
    }
});