# Ujian Tengah Semester Praktikkum Pemrograman Web - Website E-Commerce Headphone/Earphone

## Nama dan NIM

### Rasyiditya Inoriboeing Santosa - 23.01.55.0013

## URL Website 

### file:///C:/xampp/htdocs/e-commerce_headphone_web/index.html

## Penjelasan Fitur

### 1. index.html

File ini adalah halaman utama dari website StudioNada yang menampilkan produk headphone dan earphone. Berikut fitur dan fungsi dari halaman ini:
- Navbar: Menyediakan navigasi utama dengan tautan ke halaman "Home", "Product", dan "Order". Ada juga tombol "Login" yang mengarah ke halaman login.
- Hero Section: Bagian awal halaman dengan video latar belakang yang autoplay dan berulang. Terdapat teks promosi serta tombol untuk scroll ke bagian berikutnya.
- Produk Populer: Menampilkan daftar produk dengan gambar, harga, dan tombol “Detail” yang membuka deskripsi lengkap produk dalam modal (pop-up).
- Animasi AOS (Animate on Scroll): Menggunakan pustaka AOS untuk memberi efek fade-in pada elemen yang muncul ketika pengguna scroll ke bawah.
- Footer: Menyediakan informasi toko, kontak, dan ikon media sosial untuk menghubungkan pengguna ke platform seperti Facebook dan Instagram.

### 2. login.html

Halaman ini adalah halaman Login bagi pengguna.
- Tampilan Sederhana: Berisi formulir login dengan kotak input untuk Username dan Password, serta tombol login.
Redirect Setelah Submit: Setelah pengguna mengisi data login dan klik tombol "Login", halaman akan dialihkan kembali ke index.html.
- Tautan "Forgot Password": Terdapat tautan untuk memulihkan password jika pengguna lupa.
- Animasi Hover: Tombol login berubah warna saat di-hover sebagai efek transisi.

### 3. main.js

File ini berisi JavaScript yang menangani interaksi dan fungsionalitas tertentu di situs.
- Buka Modal Produk: Menangani tombol “Detail” pada produk. Ketika pengguna mengkliknya, skrip ini membuka modal yang menampilkan informasi produk lengkap (gambar, judul, deskripsi, dan harga).
- Interaksi Modal Pesanan: Mengelola modal konfirmasi pesanan pada halaman order. Modal akan muncul saat tombol "Proses Pesanan" diklik, menampilkan pesan “Pesanan Berhasil” dan menutup modal setelah klik tombol "Tutup" atau area luar modal.
- Event Handler: Menangkap event klik pada tombol modal dan area luar modal untuk membuka/menutup modal.

### 4. order.html

Halaman ini adalah Checkout atau halaman pemesanan.
- Formulir Data Pembeli: Pengguna mengisi data lengkap seperti nama, email, telepon, dan alamat. Data ini diperlukan untuk proses pengiriman.
- Metode Pembayaran: Menyediakan tiga opsi pembayaran, yaitu Transfer Bank, E-Wallet, dan Cash on Delivery (COD). Pengguna bisa memilih salah satu sesuai preferensi.
- Ringkasan Pesanan: Bagian ini menampilkan detail produk yang dibeli (gambar, nama, harga) dan subtotal serta ongkos kirim. Total pembayaran dihitung dan ditampilkan di sini.
- Tombol Proses Pesanan: Saat diklik, menampilkan modal konfirmasi pesanan yang mengonfirmasi pesanan berhasil diproses.
- Animasi Transisi: Tidak ada animasi tambahan, tetapi gaya dan efek responsif membuat halaman mudah diakses di perangkat seluler.

### 5. products.html

Halaman ini menampilkan daftar lengkap produk yang dijual.
- Carousel Gambar Produk: Setiap produk menggunakan carousel (slider gambar) untuk menunjukkan berbagai tampilan produk (contoh: warna berbeda).
- Deskripsi dan Spesifikasi Produk: Terdapat tombol untuk melihat detail deskripsi dan spesifikasi produk, seperti merek, warna, dan kualitas suara.
- Selector Jumlah Produk: Pengguna bisa menambah atau mengurangi jumlah produk dengan tombol "+" dan "-" di samping produk.
- Tambah ke Keranjang: Tombol "Tambah ke Keranjang" mengarahkan pengguna ke halaman order untuk memproses pembelian.
- Animasi AOS: Sama seperti index.html, halaman ini juga menggunakan pustaka AOS untuk animasi scroll pada konten produk.

## Cara menjalankan website

1. Clone repository ini unduh semua file
2. Buka file index.html
3. Pastikan semua file sudah diunduh dan ada dalam folder yang benar sesuai dengan nama filenya


## Sumber gambar/aset yang digunakan

### Sumber gambar/aset yang digunakan ada pada folder /properti
