@extends('landing')
@section('content')
    <section class="hero-section" id="section_1">
    </section>


    <section class="about-section section-padding" id="section_2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="gambar d-flex align-content-center justify-content-center">
                        <div class="text-center">
                            <img src="{{ asset('/storage/' . $dataPersembahan->gambar) }}"
                                alt="{{ $dataPersembahan->gambar }}" class="w-100 rounded-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
