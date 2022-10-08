let kodePeserta = [];
for (let i = 1; i <= 180; i++) {
    let kode = 'Z' + i.toString().padStart(3, '0');
    kodePeserta.push(kode);
}

let tableHadir = document.querySelector('#tb-hadir');
let no = 1;
for (let i = 0; i < kodePeserta.length; i++) {
    let row = tableHadir.insertRow();
    let cellNo = row.insertCell();
    let cellKode = row.insertCell();
    let cellToggle = row.insertCell();
    cellNo.innerHTML = no;
    cellKode.innerHTML = kodePeserta[i];
    cellToggle.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">`
    no++;
}

// Add event listener for toggle switch, if checked, add value to array
let toggleSwitch = document.querySelectorAll('.form-check-input');
for (let i = 0; i < toggleSwitch.length; i++) {
    toggleSwitch[i].addEventListener('change', function() {
        if (this.checked) {
            // Insert value to local storage
            let kode = this.parentElement.parentElement.children[1].innerHTML;
            let kodePesertaHadir = JSON.parse(localStorage.getItem('kodePesertaHadir')) || [];
            kodePesertaHadir.push(kode);
            localStorage.setItem('kodePesertaHadir', JSON.stringify(kodePesertaHadir));
        } else {
            // Remove data from local storagE
            let kode = this.parentElement.parentElement.children[1].innerHTML;
            let kodePesertaHadir = JSON.parse(localStorage.getItem('kodePesertaHadir')) || [];
            let index = kodePesertaHadir.indexOf(kode);
            kodePesertaHadir.splice(index, 1);
            localStorage.setItem('kodePesertaHadir', JSON.stringify(kodePesertaHadir));
        }
    });
}

// Check the local storage, if has value then check the toggle switch
let kodePesertaHadir = JSON.parse(localStorage.getItem('kodePesertaHadir')) || [];
for (let i = 0; i < kodePesertaHadir.length; i++) {
    for (let j = 0; j < kodePeserta.length; j++) {
        if (kodePesertaHadir[i] === kodePeserta[j]) {
            toggleSwitch[j].checked = true;
        }
    }
}

function submit() {
    let kodePesertaHadir = JSON.parse(localStorage.getItem('kodePesertaHadir')) || [];
    alert(kodePesertaHadir);
}