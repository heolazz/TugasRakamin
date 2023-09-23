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

-- Query Insert data barang
INSERT INTO barang (nama_barang, harga, kategori_id) VALUES 
('Lato-lato', 50.00, 1);
('Mobil Balap', 39.99, 2),
('Puzzle Abjad', 9.99, 3);


-- Query Select data barang
SELECT * FROM barang;

-- Query Update data barang
UPDATE barang
SET harga = 55.00
WHERE id = 1;

-- Query Insert data kategori_barang
INSERT INTO kategori_barang (nama_kategori)
VALUES ('Mainan Puzzle');

-- Query Select data kategori_barang
SELECT * FROM kategori_barang;

-- Query Update data kategori_barang
UPDATE kategori_barang
SET nama_kategori = 'Mainan Elektronik'
WHERE id = 1;

