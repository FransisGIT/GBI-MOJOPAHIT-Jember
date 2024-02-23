<p align="center">
  <a href="https://ppdb.esemkaprima.com">
    <img src="https://www.gbimojopahit.org/logo_mojopahit.png" alt="Icon" width="75" height="75">
  </a>
</p>

<h1 align="center">GBI MOJOPAHIT JEMBER</h1>

<span align="center">

Sebuah website gbi mojopahit jember

[![](https://img.shields.io/badge/OS-Windows-blue)](LICENSE)

</span>

[![PPDB System](https://raw.githubusercontent.com/muhamdaily/assets/main/esemka-preview.png)](https://github.com/muhamdaily/ppdb-smk)

<br>

## Requirements

* PHP `^8.1`
* Composer
* Git Bash

## Installation
- Clone repo: `git clone https://github.com/muhamdaily/ppdb-smk.git`
- Run `cd ppdb-smk`
- Update dependencies `composer update`
- Done

## Configuration
- Copy file `.env.example` to `.env`
- Isi semua kode seperti contoh dibawah ini :
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=YOUR_DATABASE_NAME
DB_USERNAME=YOUR_USER_NAME
DB_PASSWORD=YOUR_PASSWORD
```
- Setelah mengisi semua file `.env` jalankan perintah ini
```bash
$ php artisan generate:key
```
- Jalankan perintah
```bash
$ php artisan migrate
```
jika kamu belum mempunyai database, akan muncul pertanyaan seperti berikut ini
```bash
WARN  The database 'your_database_name' does not exist
on the 'mysql' connection.  

  Would you like to create it? (yes/no) [no]
❯ 
```
ketik `yes` dan enter.
- Dan terakhir jalankan perintah
```bash
$ php artisan migrate --seed
```
Perintah diatas ini bertujuan untuk membuatkan akun dari role `superadmin` dan `admin`
- Done

### Login Information
- Superadmin
```bash
email : superadmin@gmail.com
username: superadmin
password : superadmin
```
- Admin
```bash
email : admin@gmail.com
username: admin
password : admin
```

## Disclaimer
Aplikasi ini masih dalam tahap pengembangan! Jika anda berminat untuk ikut serta mengembangkan projek **PPDB System** silahkan <a href="mailto:muhampedia.id@gmail.com">hubungi kami</a>.

## License

**PPDB System** dilisensikan di bawah [MIT License](LICENSE)
