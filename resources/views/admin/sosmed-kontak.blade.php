@extends('app')
@section('title', 'Sosmed & Kontak')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Sosmed & Kontak
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-n10">
        <!-- Illustration dashboard card example-->
        <div class="card lift order-1">
            <div class="container">
                <div class="card-body p-3">
                    <form action="/info-kontak/{{ $data->id }}" method="post" id="simpan">
                        @csrf
                        @method('put')

                        <div class="small text-muted mb-2 d-flex justify-content-end">
                            <a class="btn btn-primary" onclick="document.getElementById('simpan').submit()"
                                type="button">Simpan</a>
                        </div>
                        <hr>

                        <label>Instagram</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i data-feather="instagram"></i></span>
                            <input class="form-control ps-0" name="instagram" value="{{ $data->instagram }}" type="text"
                                placeholder="Masukkan link instagram" aria-label="livestream" />
                        </div>
                        <label>Youtube</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i data-feather="youtube"></i></span>
                            <input class="form-control ps-0" name="youtube" value="{{ $data->youtube }}" type="text"
                                placeholder="Masukkan link youtube" aria-label="livestream" />
                        </div>
                        <label>Email</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input class="form-control ps-0" name="email" value="{{ $data->email }}" type="text"
                                placeholder="Masukkan link email" aria-label="livestream" />
                        </div>
                        <label>Facebook</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i data-feather="facebook"></i></span>
                            <input class="form-control ps-0" name="facebook" value="{{ $data->facebook }}" type="text"
                                placeholder="Masukkan link facebook" aria-label="livestream" />
                        </div>
                        <label>Tiktok</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i class="fa-brands fa-tiktok"></i></span>
                            <input class="form-control ps-0" name="tiktok" value="{{ $data->tiktok }}" type="text"
                                placeholder="Masukkan link tiktok" aria-label="livestream" />
                        </div>
                        <label>Telepon</label>
                        <div class="input-group input-group-joined input-group-solid mb-4">
                            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                            <input class="form-control ps-0" name="telepon" value="{{ $data->telepon }}" type="text"
                                placeholder="Masukkan nomor tellepon" aria-label="livestream" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
