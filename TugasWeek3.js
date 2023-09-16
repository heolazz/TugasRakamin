// Variabel untuk menyimpan informasi suhu air
const suhuAir = 501; // Ganti nilai suhu sesuai dengan suhu air yang ingin kita uji

// Variabel untuk menyimpan informasi kendaraan
const platKuning = false; // Ganti dengan true jika plat kuning, dan false jika plat tidak kuning
const motor = false; // Ganti dengan true jika motor, dan false jika bukan motor
const ccMobil = 1500; // Ganti nilai cc sesuai dengan kapasitas mesin mobil

    // Logika untuk menghitung keadaan air
    let keadaanAir;

    if (suhuAir >= -100 && suhuAir <= 0) {
    keadaanAir = "Beku";
    } else if (suhuAir >= 1 && suhuAir <= 100) {
    keadaanAir = "Cair";
    } else if (suhuAir >= 101 && suhuAir <= 500) {
    keadaanAir = "Uap";
    } else {
    keadaanAir = "Tidak Terdefinisi";
    }

// Logika untuk menentukan jenis BBM di SPBU
let jenisBBM;

if (platKuning || motor) {
  jenisBBM = "BBM Subsidi";
} else if (ccMobil < 1500) {
  jenisBBM = "PERTAMAX";
} else {
  jenisBBM = "PERTAMAX Turbo";
}

let num1 = 5
let num2 = 2

// Hasil
console.log(`Keadaan Air: ${keadaanAir}`);
console.log(`Jenis BBM di SPBU: ${jenisBBM}`);
console.log(num1 ** num2)
