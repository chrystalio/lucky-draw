$(document).ready(() => {

    // Get kodePesertaHadir from localStorage
    let kodePesertaHadir = JSON.parse(localStorage.getItem("kodePesertaHadir")) || [];


    // Show kodePesertaHadir in table

    let table = document.getElementById("list");


        kodePesertaHadir.forEach((item, index) => {
            document.getElementById("list").innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item}</td>
                </tr>
            `;
        });



});