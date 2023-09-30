// Import modul
const modul = require('./modul.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    // Mengambil input dari user
    rl.question('Masukkan panjang sisi persegi: ', (side) => {
    // Menghitung luas dan keliling persegi
    const squareArea = modul.calculateSquareArea(parseFloat(side));
    const squarePerimeter = modul.calculateSquarePerimeter(parseFloat(side));

});
