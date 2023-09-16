
const pendaftar = [];


function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Fungsi untuk validasi form dan menambahkan pendaftar
function validateAndSubmit() {
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSaku = parseInt(document.getElementById("uangSaku").value);

    // Validasi kriteria
    if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 1000000) {
        alert("Mohon isi form dengan benar sesuai kriteria.");
        return;
    } 

    // Tambahkan pendaftar ke daftar
    pendaftar.push({ nama, umur, uangSaku });

    // Reset form
    document.getElementById("registrationForm").reset();

    // Update tabel pendaftar
    updatePendaftarTable();

    // Hitung rata-rata umur dan uang saku
    hitungRataRata();
}

// Fungsi untuk mengupdate tabel pendaftar
function updatePendaftarTable() {
    const table = document.getElementById("pendaftarTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    pendaftar.forEach((pendaftar) => {
        const row = tbody.insertRow();
        const cellNama = row.insertCell(0);
        const cellUmur = row.insertCell(1);
        const cellUangSaku = row.insertCell(2);

        cellNama.innerText = pendaftar.nama;
        cellUmur.innerText = pendaftar.umur;
        cellUangSaku.innerText = pendaftar.uangSaku;
    });
}

// Fungsi untuk menghitung rata-rata umur dan uang saku
function hitungRataRata() {
    const avgUmurElement = document.getElementById("avgUmur");
    const avgUangSakuElement = document.getElementById("avgUangSaku");

    if (pendaftar.length > 0) {
        const totalUmur = pendaftar.reduce((sum, pendaftar) => sum + pendaftar.umur, 0);
        const totalUangSaku = pendaftar.reduce((sum, pendaftar) => sum + pendaftar.uangSaku, 0);

        const avgUmur = totalUmur / pendaftar.length;
        const avgUangSaku = totalUangSaku / pendaftar.length;

        avgUmurElement.innerText = avgUmur.toFixed(2);
        avgUangSakuElement.innerText = avgUangSaku.toFixed(2);
    } else {
        avgUmurElement.innerText = "0";
        avgUangSakuElement.innerText = "0";
    }
}
