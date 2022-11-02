$(document).ready((async () => {
    // const Swal = require('sweetalert2');
    // For debugging purpose only please uncomment the following line
    // let p = [];
    // for (i = 0; i < 175; i++) {
    //     p[i] = "Z" + i.toString().padStart("3", "0");
    // }
    //
    // localStorage.setItem("kodePesertaHadir", JSON.stringify(p));

    // Check if the user has already opened the page hadir.html
    if (localStorage.getItem("kodePesertaHadir") === null) {
        alert("Selamat datang di aplikasi undian hadiah, Silahkan isi data hadir peserta terlebih dahulu");
        window.location.href = "hadir.html";
    } else {
        alert(`Silahkan klik tombol undi untuk memulai undian. Jika ada kendala silahkan klik tombol restart aplikasi\n\nTotal Jumlah Peserta yang hadir adalah ${JSON.parse(localStorage.getItem("kodePesertaHadir")).length}\n\nHadiah akan diundi secara acak dalam 4 Sesi`);
    }

    // hadiah
    let hadiah = {
        sesi1: [
            'SAMSUNG HD TV 32" N4001',
            'HP INFINIX HOT 12 RAM 6GB / 128GB',
            'KULKAS 1 PINTU AQUA AQR-D181',
            'FINE GOLD - UBS 2 gr',
            'TCL LED TV 32" ',
            'HP SAMSUNG GALAXY A03 CORE',
            'HP SAMSUNG GALAXY A03S',
            'MESIN CUCI AQUA QW-781XT MANUAL 7KG',
            'HP REDMI 9A 3GB/32GB',
            'FINE GOLD - ANTAM 1 gr',
            'GEA KULKAS MINI BAR RS-06DR STAINLESS STEEL',
            'DISPENSER MIYAKO WDP-300',
            'ELECTRIC OVEN KELS 28L',
            'MICROWAVE SHARP 23L R-21D0(S)-IN',
            'FINE GOLD - ANTAM 1 gr',
            'HP SAMSUNG GALAXY A03 CORE',
            'FINE GOLD - GALERY24 1 gr',
            'BLENDER PHILIPS 5000 Series',
            'AIR COOLER SHARP PJ-A26MY-B',
            'ELECTRIC OVEN SHARP EO-28LP(K)',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - UBS 1 gr',
            'AIR FRYER MITO AF2 DIGI FRY-GO',
            'VOUCHER 1 NIGHT STAY AT SWISS BELL HOTEL',
            'DISPENSER MIYAKO WD-389 HC',
            'ELECTRIC OVEN SHARP EO-28LP(K)',
            'RICE COOKER COSMOS CRJ-3305 + KIPAS ANGIN (STAND FAN) MIYAKO KAS-1618 B',
            'RICE COOKER PANASONIC SR CEZ18',
            'KOMPOR GAS 2T RINNAI RI-522S + KOMPOR GAS 2T RINNAI RI-522S',
            'BED SHEET SET KING (SLEEP LITE) + BED COVER INFORMA + SHOPPING VOUCHER 100K',
            'ELECTRIC KETTLE SHARP 1.5L EKJ-156-BK + KIPAS ANGIN (STAND FAN) COSMOS 16-XDC + SHOPPING VOUCHER 100K',
            'PAN (COOKWARE / PANCI INFORMA) + SHOPPING VOUCHER 100K',
            'KIPAS ANGIN (STAND FAN) COSMOS 16-SDB + SHOPPING VOUCHER 200K',
            'STAND MIXER ELECTROLUX EHSM 2000 + SHOPPING VOUCHER 100K',
            'SODEXO SHOPPING VOUCHER 500K',
        ],
        sesi2: [
            'SAMSUNG HD TV 32" N4001',
            'KULKAS 1 PINTU AQUA AQR-D181',
            'HP VIVO Y15s',
            'HP SAMSUNG GALAXY A03 CORE',
            'FINE GOLD - UBS 2 gr',
            'SHARP SPEAKER SYSTEM PS-920',
            'SEPEDA (blue)',
            'HP SAMSUNG GALAXY A03 CORE',
            'MESIN CUCI AQUA QW-781XT MANUAL 7KG',
            'HP REDMI 9A 3GB/32GB',
            'DISPENSER MIYAKO WDP-300',
            'HP SAMSUNG GALAXY A03S',
            'DISPENSER MIYAKO WDP-300',
            'MICROWAVE OVEN SHARP 23L R-21D0(S)-IN',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - UBS 1 gr',
            'KOMPOR GAS 2T RINNAI RI-522S + PERSONAL BLENDER SHARP EM-P01-BK',
            'RICE COOKER SHARP KS-R18MS-BR + BOX CUTLERY SET + SHOPPING VOUCHER 100K',
            'AIR COOLER SHARP PJ-A26MY-B',
            'OVEN ELECTRIC SHARP EO-25BK',
            'MICROWAVE SHARP R-220MA-WH',
            'AIR FRYER LOCKnLOCK',
            'ELECTRIC OVEN EO-18L(W)',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - ANTAM 1 gr',
            'BEDDING SET INFORMA',
            'BEDDING SET INFORMA (SHEET SET)',
            'BLENDER QUANTUM + KIPAS ANGIN (STAND FAN) COSMOS 16-XDC',
            'KOMPOR GAS 2T MIYAKO KG 302C + UTENSIL SET WITH HOLDER (INFORMA)',
            'CASSEROLE WITH LID (PANCI INFORMA) + RICE COOKER PREMIUM HOME  IHP118 + SHOPPING VOUCHER 100K',
            'BED COVER MICROFIBER (B) SABINE + SHOPPING VOUCHER 200K',
            'BLENDER TURBO 1.2 L + SHOPPING VOUCHER 300K',
            'KOMPOR GAS 2T RINNAI RI-522C + SHOPPING VOUCHER TOP 100 100K',
            'SODEXO SHOPPING VOUCHER 500K'


],
        sesi3: [
            'MESIN CUCI OTOMATIS SHARP ES-G876-GY 7KG',
            'KULKAS 1 PINTU AQUA AQR-D181',
            'HP VIVO Y15s',
            'FINE GOLD - UBS 2 gr',
            'KULKAS SHARP SJ-X167',
            'HP SAMSUNG GALAXY A03 CORE',
            'FINE GOLD - ANTAM 1 gr',
            'JAM TANGAN CATERPILLAR PX-141.11.212',
            'FINE GOLD - UBS 1 gr',
            'SEPEDA IMPRES RACE 2.0 MTB (RED)',
            'HP INFINIX SMART 6+ 3GB/64GB',
            'DISPENSER MIYAKO WDP-300',
            'ELECTRIC OVEN KELS 28L',
            'HP SAMSUNG GALAXY A03S',
            'MICROWAVE SHARP 23L R-21D0(S)-IN',
            'OAKLAND RELAX SOFA BED CHESNUT AZ',
            'FINE GOLD - ANTAM 1 gr',
            'AIR FRYER MITO AF1 DIGI FRY-GO',
            'AIR COOLER SHARP PJ-A26MY-B',
            'FINE GOLD - ANTAM 1 gr',
            'OVEN ELECTRIC SHARP EO-25BK',
            'REDMI SMART WATCH 2 Lite',
            'ELECTRIC OVEN EO-28LP(K)',
            'FINE GOLD - UBS 1 gr',
            'COOKWARE (SET PAN) BOLDE',
            'KOMPOR GAS KACA 2T ALFA 522G',
            'RICE COOKER COSMOS CAKE SERIES CRJ-3301 N 1.8 L + KIPAS ANGIN (STAND FAN) COSMOS 16-SDB',
            'WHISTLING KETTLE (ACE HARDWARE) + KIPAS ANGIN (STAND FAN) MIYAKO KAS-1606 X',
            'RICE COOKER MULTIFUNGSI MITO R5+ DIGITAL 8IN1',
            'KIPAS ANGIN (STAND FAN) MIYAKO KAS-1607 + PORTABLE GAS STOVE + SHOPPING VOUCHER 100K',
            'JUICE EXTRACTOR MEMOO + KIPAS ANGIN (STAND FAN) KENIX 16"',
            'BLENDER COSMOS CB-281 P + KIPAS ANGIN (STAND FAN) MIYAKO KAS-1606 X ',
            'BED COVER MICROFIBER (B) SABINE + SHOPPING VOUCHER 200K',
            'JUICE EXTRACTOR MEMOO + SHOPPING VOUCHER 300K',
            'SODEXO SHOPPING VOUCHER 500K'
        ],
        sesi4: [
            'MESIN CUCI OTOMATIS MIDEA MAM7502(SK) 7.5KG',
            'KULKAS 1 PINTU AQUA AQR-D181',
            'SEPEDA (green)',
            'KULKAS SHARP SJ-N162',
            'HP REDMI 10A 3GB/32GB',
            'HP SAMSUNG GALAXY A03 CORE',
            'HP SAMSUNG GALAXY A03S',
            'MICROWAVE OVEN WITH GRILL - SHARP R-735MT(S)',
            'JAM TANGAN CATERPILLAR PX-141.11.232',
            'KRISBOW EMERGENCY STANDING FAN 16\' WITH LAMP',
            'AIR COOLER APA (ACE HARDWARE)',
            'DISPENSER MIYAKO WDP-300',
            'MICROVAVE OVEN SHARP R-21D0(S)-IN 23L',
            'OAKLAND RELAX SOFA BED CHESNUT AZ',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - ANTAM 1 gr',
            'FINE GOLD - UBS 1 gr',
            'FINE GOLD - GALERY24 1 gr',
            'AIR COOLER SHARP PJ-A26MY-B',
            'OVEN ELECTRIC SHARP EO-25BK',
            'COOKWARE (SET PAN) BOLDE',
            'JUICER SHARP EJ-150LP(K)',
            'ADVANCE ELECTRIC AIR FRYER ADF-30A',
            'HP VIVO Y66 4GB/64GB',
            'BLENDER SAMONO + TOASTER MEMOO (ACE HARDWARE)',
            'TOASTER MEMOO (ACE HARDWARE) + BLENDER COSMOS CB-281 P',
            'KIPAS ANGIN (STAND FAN) KDK WM40X',
            'MIXER PHILIPS Daily Collection HR1559 + SHOPPING VOUCHER 100K',
            'DRY VACUUM CLEANER (ACE HARDWARE) + SHOPPING VOUCHER 100K',
            'PAN (COOKWARE / PANCI INFORMA) + SHOPPING VOUCHER 100K',
            'BED COVER MICROFIBER (B) SABINE + SHOPPING VOUCHER 200K',
            'SODEXO SHOPPING VOUCHER 500K',
            'TOP 100 SHOPPING VOUCHER 500K',
            'TOP 100 SHOPPING VOUCHER 500K'
        ]
    }

    // winners
    let winners = {
        ronde1: [],
        ronde2: [],
        ronde3: [],
        ronde4: [],
    };



    // LocalStorage database
    localStorage.setItem("hadiah", JSON.stringify(hadiah));
    localStorage.setItem("pemenang", JSON.stringify(winners));

    // always reset the round on page load
    localStorage.setItem("ronde", 0);

    const inArray = (needle, haystack) => {
        var length = haystack.length;
        for (var i = 0; i < length; i++) {
            if (haystack[i] === needle) return true;
        }
        return false;
    }


    // get hadiah by ronde
    const getHadiah = (ronde) => {
        let hadiah = JSON.parse(localStorage.getItem("hadiah"));
        let hadiahRonde = hadiah[`sesi${ronde}`];
        return hadiahRonde;
    }

    const randomize = (peserta, n) => {
        // Randomize kode peserta array
        let randomized = peserta.sort(() => Math.random() - 0.5);
        // Get first n elements
        let winners = randomized.slice(0, n);
        return winners;
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    const getPemenang = (ronde) => {

        let totalPemenang = [];

        let pesertaHadir = JSON.parse(localStorage.getItem("kodePesertaHadir"));

        shuffleArray(pesertaHadir);

        // Get hadiah by ronde
        let hadiah = getHadiah(ronde);

        // Get peserta hadir by length of hadiah ronde
        let pesertaHadirByRonde = pesertaHadir.slice(0, hadiah.length);

        // Get pemenang by random
        // let pemenang = pesertaHadirByRonde.sort(() => Math.random() - 0.5);


        let pemenang = randomize(pesertaHadirByRonde, hadiah.length);
        let hadiahRonde = randomize(hadiah, hadiah.length);


        for (let i = 0; i < pemenang.length; i++) {
            totalPemenang.push({
                kode: pemenang[i],
                hadiah: hadiahRonde[i]
            });

            // After push to totalPemenang, pop kodePesertaHadir
            // pesertaHadir.shift();
        }

        pesertaHadir = _.filter(pesertaHadir, (value) => {
            return !inArray(value, pesertaHadirByRonde);
        });

        localStorage.setItem("kodePesertaHadir", JSON.stringify(pesertaHadir));

        // Set total pemenang to localStorage
        JSON.parse(localStorage.getItem("pemenang"));

        return totalPemenang;


    }

    const insertPemenang = (ronde, pemenang) => {
        let getWinners = JSON.parse(localStorage.getItem("pemenang")) || [];

        getWinners[`ronde${ronde}`].push(pemenang);
        localStorage.setItem("pemenang", JSON.stringify(getWinners));
    };


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

    $("#tombol").on("click", function () {
        // check absen

        let peserta = JSON.parse(localStorage.getItem("kodePesertaHadir"));

        if (!peserta.length) return alert("Peserta tidak ada yang hadir");

        // check ronde
        let getRonde = Number(localStorage.getItem("ronde")) ?? 0;
        getRonde += 1;
        localStorage.setItem("ronde", getRonde);
        if (getRonde > 4) {
            alert("Ronde sudah ke 4 selesai, Silahkan input manual");

            // Redirect to tes.html. Open in new tab
            window.open("undi-manual.html", "_blank");
        }

        let pemenang = getPemenang(getRonde);
        insertPemenang(getRonde, pemenang);

        setTimeout(function(){$('#modal').modal('hide')},7000);

        setTimeout(() => {
            // Show pemenang on table
            let table = document.getElementById("hasil");

            table.innerHTML = `<tr>
                <td colspan="3" class="text-center text-bg-danger">
                    <h4>
                        Ronde ${getRonde}
                    </h4>
                </td>
            </tr>`;

            pemenang.forEach((item, index) => {
                document.getElementById("hasil").innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.kode}</td>
                    <td>${item.hadiah}</td>
                </tr>
            `;
            });
        }
            , 7000);
    });
}));