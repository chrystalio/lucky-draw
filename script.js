let kodePeserta = [];
for (let i = 1; i <= 180; i++) {
    let kode = 'Z' + i.toString().padStart(3, '0');
    kodePeserta.push(kode);
}

// Load kode peserta to table hadir.html
let hadir = document.querySelector("#hadir");
hadir.innerHTML = "";
let peserta = [...kodePeserta];
let no = 1;
for (let i = 0; i < peserta.length; i++) {
    let row = document.createElement("tr");
    let cellNo = document.createElement("td");
    cellNo.innerHTML = no++;
    let cellKode = document.createElement("td");
    cellKode.innerHTML = peserta[i];
    row.appendChild(cellNo);
    row.appendChild(cellKode);
    hadir.appendChild(row);
    let cellCheck = document.createElement("td");
    let divCheck = document.createElement("div");
    divCheck.classList.add("form-check", "form-switch", "d-flex", "justify-content-center");
    let inputCheck = document.createElement("input");
    inputCheck.classList.add("form-check-input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("role", "switch");
    inputCheck.setAttribute("id", "flexSwitchCheckDefault");
    divCheck.appendChild(inputCheck);
    cellCheck.appendChild(divCheck);
    row.appendChild(cellCheck);
}

// Add event listener to checkbox, if checked, add list kode peserta to array
let pesertaHadir = [];
let checkbox = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function () {
        if (this.checked) {
            pesertaHadir.push(kodePeserta[i]);
            // Then save to local storage
            localStorage.setItem("pesertaHadir", JSON.stringify(pesertaHadir));
            console.log(pesertaHadir);
        } else {
            pesertaHadir.splice(pesertaHadir.indexOf(kodePeserta[i]), 1);
        }
    });
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
    let peserta = [...pesertaHadir];
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