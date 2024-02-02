@extends('landing')
@section('title', $data->judul_renungan . ' | GBI MOJOPAHIT')
@section('content')
    <section class="hero-section position-relative" id="section_1">
        <div class="overlay_renungan"></div>
        <img src="{{ asset('/storage/' . $data->gambar) }}" alt="" class="custom-video border-0 p-0">
        {{-- <div class="header-page position-absolute top-50 start-50 translate-middle text-center w-100">
            <h2 class="text-white">Renungan</h2>
        </div> --}}
    </section>

    <section class="renungan-section" id="section_2">
        <div class="container">
            <h2 class="text-black fs-3 mt-4">{{ $data->judul_renungan }}</h2>
            <h2 class="text-black fs-3 mt-3">{{ $data->renungan_ke }}</h2>
            <div class="line mt-3"></div>
            <div class="isi_renungan mt-3">{!! $htmlContent !!}</div>
        </div>

    </section>
@endsection
