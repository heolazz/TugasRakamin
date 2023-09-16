// Membuat sebuah array random
let arr = [];

for (let i = 0; i < 100; i++) {
  let arrRandom = Math.ceil(Math.random() * 50) + 1;

  arr.push(arrRandom);
}

let arrGenap = [];
let arrGanjil = [];

for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        arrGenap.push(arr[i])
    }
    else{
        arrGanjil.push(arr[i])
    }
}

function findMax(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
};

function findMin(arr){
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    return min;
}

function totalArray(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

// let minComparison, maxComparison, totalComparison, averageComparison;

// if(min_array_ganjil > min_array_genap){
//     minComparison = ("Min Array Ganjil Lebih Besar");
// }
// else{
//     minComparison = ("Min Array Genap Lebih Besar");

// }

// Max Array
max_array_genap = findMax(arrGenap);
max_array_ganjil = findMax(arrGanjil);
// Min Array
min_array_genap = findMin(arrGenap);
min_array_ganjil = findMin(arrGanjil);
// Total Array
total_array_genap = totalArray(arrGenap);
total_array_ganjil = totalArray(arrGanjil);
// Average
avg_array_genap = Math.ceil(total_array_genap / arrGenap.length);
avg_array_ganjil = Math.ceil(total_array_ganjil / arrGanjil.length);

// Array
console.log(arr);

// Array Genap
console.log("Array Genap");
console.log(arrGenap);
console.log("Max Array genap");
console.log(max_array_genap)
console.log("Min Array genap");
console.log(min_array_genap);
console.log("Total Array Genap");
console.log(totalArray(arrGenap));
console.log("Average Array Genap");
console.log(avg_array_genap);

// Array Ganjil
console.log("Array Ganjil");
console.log(arrGanjil);
console.log("Max Array ganjil");
console.log(max_array_ganjil)
console.log("Min Array ganjil");
console.log(min_array_ganjil);
console.log("Average Array Ganjil");
console.log(avg_array_ganjil);

// comparisonResults
if(min_array_ganjil > min_array_genap){
    console.log("Min Array Ganjil Lebih Besar")
}
else{
    console.log("Min Array Genap Lebih Besar")
}
if(max_array_ganjil > max_array_genap){
    console.log("Max Array Ganjil Lebih Besar")
}
else{
    console.log("Max Array Genap Lebih Besar")
}
if(total_array_ganjil > total_array_genap){
    console.log("Total Array Ganjil Lebih Besar")
}
else{
    console.log("Total Array Genap Lebih Besar")
}
if(avg_array_ganjil > avg_array_genap){
    console.log("Average Array Ganjil Lebih Besar")
}
else{
    console.log("Average Array Genap Lebih Besar")
}



// console.log("min", minComparison);
// console.log(maxComparison);
// console.log(totalComparison);
// console.log(averageComparison);