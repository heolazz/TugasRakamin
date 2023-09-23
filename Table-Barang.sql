-- Query Create Table barang
CREATE TABLE barang (
  id INT PRIMARY KEY,
  nama_barang VARCHAR(255),
  harga DECIMAL(10, 2),
  kategori_id INT,
  FOREIGN KEY (kategori_id) REFERENCES kategori_barang(id)
);

-- Query Create Table kategori_barang
CREATE TABLE kategori_barang (
  id INT PRIMARY KEY,
  nama_kategori VARCHAR(255)
);

-- Relasi Table
SELECT barang.nama_barang, barang.harga, kategori_barang.nama_kategori
FROM barang
INNER JOIN kategori_barang 
ON barang.kategori_id = kategori_barang.id;
