// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk mengisi array dengan nilai acak
function fillArray(array, length) {
  for (let i = 0; i < length; i++) {
    array.push(getRandomValue());
  }
}

// Fungsi untuk membagi array menjadi dua berdasarkan indeks
function splitArrayByIndex(inputArray) {
  const evenArray = [];
  const oddArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(inputArray[i]);
    } else {
      oddArray.push(inputArray[i]);
    }
  }
  
  return [evenArray, oddArray];
}

// Fungsi untuk menghitung Min dalam array
function findMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// Fungsi untuk menghitung Max dalam array
function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung Total dalam array
function findTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Fungsi untuk menghitung Rata-rata dalam array
function findAverage(array) {
  const total = findTotal(array);
  return total / array.length;
}

// Membuat array dengan 100 nilai acak
const randomArray = [];
fillArray(randomArray, 100);

// Membagi array menjadi genap dan ganjil
const [evenArray, oddArray] = splitArrayByIndex(randomArray);

// Menghitung Min, Max, Total, dan Rata-rata untuk setiap array
const minEven = findMin(evenArray);
const maxEven = findMax(evenArray);
const totalEven = findTotal(evenArray);
const averageEven = findAverage(evenArray);

const minOdd = findMin(oddArray);
const maxOdd = findMax(oddArray);
const totalOdd = findTotal(oddArray);
const averageOdd = findAverage(oddArray);

// Membandingkan hasil
const comparisonResults = {
  min: minEven > minOdd ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
  max: maxEven > maxOdd ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
  total: totalEven === totalOdd ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
  average: averageEven > averageOdd ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil",
};

// Output
console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);
console.log("Min, Max, Total, dan Rata-rata pada array genap:", minEven, maxEven, totalEven, averageEven);
console.log("Min, Max, Total, dan Rata-rata pada array ganjil:", minOdd, maxOdd, totalOdd, averageOdd);
console.log("Perbandingan nilai:");
console.log(comparisonResults);
