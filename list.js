$(document).ready(() => {

    // Get kodePesertaHadir from localStorage
    let mainWinner = JSON.parse(localStorage.getItem("mainWinner")) || [];

    $('#clearLS').on('click', () => {
        // Check if there are items in the localStorage
        if (localStorage.length > 0) {
            localStorage.clear();
            alert('Aplikasi berhasil di reset. Silahkan absen kembali.');
            window.location.href = "hadir.html";
        } else {
            alert('Aplikasi sudah di reset.');
        }
    });

    // Show kodePesertaHadir in table

    let table = document.getElementById("list");


        mainWinner.forEach((item, index) => {
            document.getElementById("list").innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item}</td>
                </tr>
            `;
        });



});