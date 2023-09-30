const fs = require('fs');

// read data dari file homework.log
  fs.readFile('homework.log', 'utf8', (err, data) => {
  if (err) {
    console.error('Terjadi kesalahan saat membaca file homework.log:', err);
    return;
  }

  // write data ke dalam file log.txt
  fs.writeFile('log.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Terjadi kesalahan saat menulis file log.txt:', err);
      return;
    }
    console.log('Data telah berhasil ditulis ke dalam file log.txt');
  });
});
