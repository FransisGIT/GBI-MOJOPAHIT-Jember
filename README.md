<p align="center">
  <a href="">
    <img src="https://www.gbimojopahit.org/logo_mojopahit.png" alt="Icon" width="150" height="150">
  </a>
</p>

<h1 align="center">GBI MOJOPAHIT JEMBER</h1>

<span align="center">

Sebuah website gbi mojopahit jember

[![](https://img.shields.io/badge/OS-Windows-blue)](LICENSE)

</span>

<img src="https://lh3.googleusercontent.com/fife/AGXqzDnxxRisBfLd6S4SCqxEzVCN3EyXwH5DkiCB5AcY9-PpAaMJmsXDJzgW-XpGaMQgFbA6Mj4ZZLcptI99KqY1EmaAkm0kDWW-GmfuQkoqdTA2J_qrBf7K6014HDdY4ILZuckgkYC5EUs2zfJfTXOXdVysuBn15PMBaRM9uf-3iic1WwYCxvD8SZ4mhCtjzL6yFgJ-0qiigChi3UikM4-qDoqCPoDH01YMPcm4069BgevDc63x0QaiTIFgddreFpKlJWxsFXi1Jw82D0aoKs4cmqM29WlbVBUvBSYuIaRZ6Bci9Jl3CIBCMBRSq_XDHhxhxTbeY5BRppkueIXTFrZ3JBf6-B2RXKUcHAhAMU5lbtrqRGax7l2f_JlcCFTkHFCAeVfqjzo7N6iXnWicU8R-RKNygPNRmpPUxpJdG9fkXS3mGu2aCwekEodfVOTid0Ueeh_1Y34PSwaXZKL3V46CqFKwonxz5CELSRt6oob2WdpkPor4wI6W2EfZ6buMCBuD-KmDIw5XCsxiB3mCUEA5W-Nz9vLfmCzz_wTopiqiEIjSNK9Rva5CTqnOflcrWHU6ZTsOgqZ4RCimb_uYUm5EoDvPGOhyXBKhOdXkjtD89ioIjl_Ns-0ap36WxPKfm6EohXjgn0GYJ5XeiyXblsTV1rh6WNyxzyJGmej6NB0H-6fkyexQyHqSYAuLOf-ojBhLT3fnKafYovwRU0Qly4L9CY8zMO4Em-YbHNgGUjn0oAoT1P4h6R_izr3dmv1sxdiO1f6NPv0aX3msXqqBf-f8u3fYURjF1M9l7Q50Yn0MKu7VDCR_3smmvAtHtppmfSaJGuKY95hML1GIQsUPZkJ-ZMmiOParCQ0_jCDpjBMrx2M0ubyTxvPGiKv8F25nTwx5IHnqJqPFsJQwVz3AugwlpWP0DID_W_VDLWGN1qi2vNBfCpmwLUAKUgtaYAt8FDCr_6zLXIRF1ypo-zExl2O8vmuznx6T6iVpaEuMacLvsfVds99-vwwQJqNBXATbEsNYTvK0-MDsvYTGNFAiZCL09p_LNGWBcxFlhfzl_lPXAdAXH-_jSsxWj1P-aXMqQSkZ3t59KJNy9Engj9_M8SwZfTWAJMXggQAlEC7Jrfre-nmVIyrGrTKGus4LPVCiZ_tv_m-ZV8ZlANFbd8OqI9GzIY8vHQDhxOIFR_imA7jyej2dA1iMv_CR70utqIsAUTrFuN_NdAIhtRHxkDlFg0MeQc3dVbSx2dUiBxVaI3xWnfVDZmhPM8FDSib-7pFHuju3QD-oiTWffBkgDFktkjBVrjkVZSIVZ3N-W-ZwwrFUbLTSOn58-mAtF1mERE_XsGjACvKZWOotXWtqg1rpEApdHHaS4l2IcNuiGveS_Twq5U5FJlGNA6vlZ_QkJYeR8bERSuNbJmfEqpDEhSkZOokKDLEVY6-znbZbw_XDveljTGPiuhoyZIvg9KI3a6-v_2tjN2NW9KmrSBOhn_sob_pNI4x9zpkXkbC9IyarzyEE0kbNK8I4RX_08TYMYV_yRTgY1KeStE2KKrwJgwk-Opr5pyd9aT5qYV3rKVpG6BQ1C7m3BdUQt1iP=w1366-h617" alt="Icon" width="800" height="380">

<br>

## Requirements

* PHP `^8.1`
* Composer
* Git Bash

## Installation
- Clone repo: `git clone https://github.com/muhamdaily/ppdb-smk.git`
- Run `cd gbi-mojopahit-jember`
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
username: superadmin
password : superadmin
```
- Admin
```bash
username: admin
password : admin
```

## Disclaimer
Aplikasi ini masih dalam tahap pengembangan! Jika anda berminat untuk ikut serta mengembangkan projek **GBI MOJOPAHIT JEMBER** silahkan <a href="mailto:averangefransis@gmail.com">hubungi kami</a>.
