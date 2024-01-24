@extends('app')
@section('title', 'GBI MOJOPAHIT | Beranda')
@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Beranda
                        </h1>
                    </div>
                </div>
                <div class="row d-flex flex-wrap">
                    <div class="col mt-4 content-end content-center">
                        <div class="input-group input-group-joined border-0 lift" style="width: 16.5rem">
                            <span class="input-group-text" style="background-color: #E0E5EC"><i class="text-primary"
                                    data-feather="calendar"></i></span>
                            <div class="form-control ps-0 pr-5" style="background-color: #E0E5EC" id="tanggal" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4 content-start content-center">
                        <div class="input-group input-group-joined border-0 lift" style="width: 16.5rem">
                            <span class="input-group-text" style="background-color: #E0E5EC"><i class="text-primary"
                                    data-feather="clock"></i></span>
                            <div class="form-control ps-0 pr-5" style="background-color: #E0E5EC" id="jam" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-n10">
        <div class="row">
            <div class="col-xl-4 mb-4 my-order-2">
                <!-- Dashboard example card 1-->
                <a class="card lift h-100">
                    <div class="card-body d-flex justify-content-center flex-column">
                        <div class="me-3">
                            <div class="row">
                                <div class="col-7">
                                    <i class="feather-xl text-primary mb-3" data-feather="book"></i>
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder fs-1 pl-3 float-end">{{ $countRenungan }}</div>
                                </div>
                            </div>
                            <h3>Total Renungan</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-4 mb-4 my-order-3">
                <!-- Dashboard example card 2-->
                <a class="card lift h-100">
                    <div class="card-body d-flex justify-content-center flex-column">
                        <div class="me-3">
                            <div class="row">
                                <div class="col-7">
                                    <i class="feather-xl text-primary mb-3" data-feather="home"></i>
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder fs-1 pl-3 float-end">{{ $countCabangGereja }}</div>
                                </div>
                            </div>
                            <h3>Total Cabang Gereja</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-4 mb-4 my-order-4">
                <!-- Dashboard example card 3-->
                <a class="card lift h-100">
                    <div class="card-body d-flex justify-content-center flex-column">
                        <div class="me-3">
                            <div class="row">
                                <div class="col-7">
                                    <i class="feather-xl text-primary mb-3" data-feather="user"></i>
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder fs-1 pl-3 float-end">{{ $countUser }}</div>
                                </div>
                            </div>
                            <h3>Total User</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-12 mb-4 my-order-1">
                <!-- Illustration dashboard card example-->
                <div class="card lift order-1">
                    <div class="card-body p-5">
                        <div class="row">
                            <div class="col">
                                <img class="img-fluid mb-4"
                                    src="{{ asset('assets/sbadminpro/assets/img/illustrations/team-spirit.svg') }}"
                                    alt="" style="max-width: 15.25rem" />
                            </div>
                            <div class="col">
                                <p class="mb-4 h-20 fs-1 font-responsive">Selamat Datang di halaman Beranda
                                    {{ Auth::user()->role }} {{ Auth::user()->username }}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @push('script')
        <script>
            // Mendapatkan elemen dengan ID "tanggal" dan "jam"
            var tanggalElement = document.getElementById('tanggal');
            var jamElement = document.getElementById('jam');

            // Fungsi untuk mengupdate waktu setiap detik
            function updateWaktu() {
                var tanggalSekarang = new Date();
                var hari = tanggalSekarang.getDay();
                var tanggal = tanggalSekarang.getDate();
                var bulan = tanggalSekarang.getMonth() + 1;
                var tahun = tanggalSekarang.getFullYear();
                var jam = padZero(tanggalSekarang.getHours());
                var menit = padZero(tanggalSekarang.getMinutes());
                var detik = padZero(tanggalSekarang.getSeconds());

                var formatHari = getHariIndonesia(hari);
                var formatTanggal = formatHari + ', ' + tanggal + ' ' + getBulanIndonesia(bulan) + ' ' + tahun;
                var formatJam = jam + ':' + menit + ':' + detik;

                tanggalElement.innerHTML = formatTanggal;
                jamElement.innerHTML = formatJam;
            }

            // Memanggil fungsi updateWaktu setiap detik
            setInterval(updateWaktu, 1000);

            // Fungsi untuk menambahkan angka nol di depan angka tunggal (misalnya, 1 menjadi 01)
            function padZero(angka) {
                return (angka < 10 ? '0' : '') + angka;
            }

            // Fungsi untuk mendapatkan nama bulan dalam bahasa Indonesia berdasarkan angka bulan
            function getBulanIndonesia(bulan) {
                var namaBulan = [
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
                ];

                return namaBulan[bulan - 1];
            }

            // Fungsi untuk mendapatkan nama hari dalam bahasa Indonesia berdasarkan angka hari
            function getHariIndonesia(hari) {
                var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

                return namaHari[hari];
            }
        </script>
    @endpush
@endsection
