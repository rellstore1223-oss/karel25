function bukaPesan() {

    const pesan = document.getElementById("pesan");

    pesan.innerHTML = `
        <p>
            makasih sayang udah ada di hidup abang. ❤️
        </p>

        <p>
            abang mungkin tidak selalu bisa menjadi seseorang
            yang sempurna, tapi abang bakal berusaha terus buat adek
            menjadi lebih baik, biar adek bangga dan bahagia punya abang
            yang memang gak selalu buat adek bahagia,maafin abang ya sayang selalu
            buat adek ngerasa sedih tapi abang tetap sayang kok sama adek selamanya.
        </p>

        <p>
            Semoga kita bisa terus buat banyak cerita
            dan kenangan indah bersama, SELAMAT ULANG TAHUN MANIS CANTIKKU. 🌹
        </p>

        <p>
            abang sayang sama adek cinta sama adek selalu. ❤️
        </p>
    `;
}


function buatHati() {

    const hati = document.createElement("div");

    hati.innerHTML = "❤️";

    hati.classList.add("hati-jatuh");

    hati.style.left = Math.random() * 100 + "vw";

    hati.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 5000);
}


setInterval(buatHati, 300);