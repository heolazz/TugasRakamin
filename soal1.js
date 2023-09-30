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
    
    // Menampilkan Hasil Perhitungan Luas dan Keliling Persegi
    console.log(`Luas persegi dengan sisi ${side} adalah ${squareArea}`);
    console.log(`Keliling persegi dengan sisi ${side} adalah ${squarePerimeter}`);

    // Mengambil input dari user
    rl.question('Masukkan panjang persegi panjang: ', (length) => {
    rl.question('Masukkan lebar persegi panjang: ', (width) => {

    // Menghitung luas dan keliling persegi panjang
    const rectangleArea = modul.calculateRectangleArea(parseFloat(length), parseFloat(width));
    const rectanglePerimeter = modul.calculateRectanglePerimeter(parseFloat(length), parseFloat(width));

    // Menampilkan Hasil Perhitungan Luas dan Kelilig Persegi Panjang
    console.log(`Luas persegi panjang dengan panjang ${length} dan lebar ${width} adalah ${rectangleArea}`);
    console.log(`Keliling persegi panjang dengan panjang ${length} dan lebar ${width} adalah ${rectanglePerimeter}`);

    });
  });
});
