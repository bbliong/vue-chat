# Deskripsi
Ini aplikasi realtime chat sederhana menggunakan laravel - vue.js (Vuex) - socket.io (Laravel Echo) - Redis

# Cara Install
Pertama-tama pastikan komputer  anda sudah terinstall
1. composer
2. Node
3. redis (kalau pengguna windows 10 bisa pakai ubuntu windows, dapat dicari di store windows)  ini link buat cobanya https://redislabs.com/blog/redis-on-windows-10/
kalau sudah diinstall bisa lanjut ke tahap selanjutnya yaitu clone project ini dah ikuti langkah dibawah ini

```bash
#  cd vue-chat
#  composer install
#  npm install
#  Hapus laravel-echo-server.json - lalu init ulang dengan cara laravel-echo-server init
#  untuk init bisa ikuti defaultnya, di Yes kan semua, untuk url ganti menjadi http://localhost:8000 jika menggunakan artisan
```

## Konfigurasi ENV
Ada beberapa settingan tambahan di ENV, duplicate saja dari yang .env.example, lalu buat database, dan ganti  BROADCAST_DRIVER=redis

## Sedikit Konfigurasi Tambahan


```bash
#  php artisan migrate => Migrate struktur database
#  php artisan storage:link => membuat link untuk upload file
#  php artisan key:generate => membuat link untuk upload file
```

# Runing Program
```bash
#  php artisan serve
#  npm run prod => kalau mau lebih ringan
#  laravel-echo-server start
#  di ubuntu windows redis-server
```
