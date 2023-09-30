const fs = require('fs');

// read data dari file homework.log
  fs.readFile('homework.log', 'utf8', (err, data) => {
  if (err) {
    console.error('Terjadi kesalahan saat membaca file homework.log:', err);
    return;
  }

});
