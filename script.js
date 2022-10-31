$(document).ready(() => {
    // Buat Perserta
    let kodePeserta = [];

    const hadirPerserta = (checkHadir) => {
        localStorage.setItem("kodePesertaHadir", JSON.stringify(checkHadir));
    };

    for (let i = 1; i <= 180; i++) {
        let kode = "Z" + i.toString().padStart(3, "0");
        kodePeserta.push([
            i,
            kode,
            `<input class="form-check-input" type="checkbox" value="${kode}" />`,
        ]);
    }


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

    // masukan perserta ke table
    $("#perserta").DataTable({
        data: kodePeserta,
        columns: [{title: "No"}, {title: "Nama"}, {title: "Kehadiran"}],
        responsive: true,
        pageLength: 100,
    });


    // Ketika tombol di klik maka checklist semua peserta. Kalau ada data baru tambahkan ke localstorage tanpa menghapus data lama
    $("#selectAll").click(() => {
        $("#perserta").DataTable().rows().every(function () {
                let checkHadir = JSON.parse(localStorage.getItem("kodePesertaHadir")) || [];
                $(this.node()).find("input[type='checkbox']").prop("checked", true);
                let kode = $(this.node()).find("input[type='checkbox']").val();

                if (checkHadir.indexOf(kode) === -1) {
                    checkHadir.push(kode);
                }
                hadirPerserta(checkHadir);
            }
        );
    });


    // input data kehadiran
    $("#perserta").on("click", "input[type='checkbox']", (e) => {
        let checked = e.target.checked;
        if (checked) {
            let checkHadir =
                JSON.parse(localStorage.getItem("kodePesertaHadir")) || [];
            checkHadir.push(e.target.value);
            hadirPerserta(checkHadir);
        } else {
            let checkHadir =
                JSON.parse(localStorage.getItem("kodePesertaHadir")) || [];
            let newHadir = checkHadir.filter((id) => id != e.target.value);
            hadirPerserta(newHadir);
        }
    });

    // check kehadiran jika web ke referesh
    let checkHadir = JSON.parse(localStorage.getItem("kodePesertaHadir")) || [];
    Array.from(document.querySelectorAll("input[type=checkbox]")).map(
        (checkbox) => {
            if (checkHadir.includes(checkbox.value))
                $(checkbox).prop("checked", true);
        }
    );
});
