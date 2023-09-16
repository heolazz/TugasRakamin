
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


   