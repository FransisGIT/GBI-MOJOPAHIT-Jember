@extends('landing')
@section('title', 'GBI MOJOPAHIT')

@section('content')
    <section class="hero-section" id="section_1">
        @if (pathinfo($dataBannerLive->banner, PATHINFO_EXTENSION) === 'mp4')
            <video autoplay loop muted class="custom-video border-0 p-0">
                <source src="{{ asset('/storage/' . $dataBannerLive->banner) }}" type="video/mp4">
            </video>
        @elseif (in_array(pathinfo($dataBannerLive->banner, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png'], true))
            <img src="{{ asset('/storage/' . $dataBannerLive->banner) }}" alt="" class="custom-video border-0 p-0">
        @endif

        @if ($dataBannerLive->link_live)
            <iframe class="custom-video border-0 p-0 live_iframe" src="{{ $dataBannerLive->link_live }}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <h3 class="custom-video border-0 p-0 text-live">
                Live Now
            </h3>
        @endif
    </section>


    <section class="about-section section-padding" id="section_2">
        <div class="space"></div>
        {{-- <div class="text-overlay" class="custom-video">
            <div class="d-flex align-content-center justify-content-center">
                <iframe class="img-contain"
                    src="https://www.youtube.com/embed/gEzyb_07fJY?si=hVLyP5sXiT1jm3CQ?t=669&autoplay=1&mute=0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div> --}}
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 mb-4 d-flex align-items-center order-1">
                    <div class="services-info konten text-white" style="max-width: 100%;">
                        <div class="w-full">
                            <h3 class="text-white mb-4">{{ $dataPanelAbout->judul }}</h3>
                        </div>
                        <div class="h-50 isi_konten text-white">
                            <h4>{!! $parsedown->text($dataPanelAbout->deskripsi) !!}</h4>
                        </div>
                    </div>
                </div>


                <div class="col-lg-6 col-12 order-0">
                    <div class="about-text-wrap d-flex align-content-center justify-content-center">
                        <iframe width="100%" height="355" class="about-image" src="{{ $dataPanelAbout->link_video }}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="artists-section section-padding" id="section_3"
        style="background-color: black;object-fit: cover;width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;">
        <div class="container">
            <div class="row justify-content-center visi-misi">
                <div class="col-lg-5 col-12 text-center pb-4">
                    <h3 class="text-white">Visi</h3>
                    <p class="fs-5 fw-normal text-white">
                        {{ $dataVisiMisi->visi }}
                    </p>
                </div>

                <div class="col-lg-5 col-12 text-center text-white">
                    <h3 class="text-white">Misi</h3>
                    <p class="fs-5 fw-normal text-white">
                        {{ $dataVisiMisi->misi }}
                    </p>
                </div>

            </div>
        </div>
    </section>


    {{-- <section class="schedule-section section-padding" id="section_4">
            <div class="container">
                <div class="row justify-content-center visi-misi">
                    <div class="col-lg-5 col-12 text-center pb-4">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="{{ asset('assets/festive/images/person/foto-0.15418167038501807.png') }}"
                                        class="d-block w-100" alt="..." width="500" height="500">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="{{ asset('assets/festive/images/person/foto-0.16336512361323263.png') }}"
                                        class="d-block w-100" alt="..." width="500" height="500">
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('assets/festive/images/person/foto-0.3179698737538298.png') }}"
                                        class="d-block w-100" alt="..." width="500"height="500">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-5 col-12 text-center text-white">
                        <h3 class="text-white">Misi</h3>
                        <p class="fs-5 fw-normal text-white">Perjumpaan dengan Allah, Mengalami Kemerdekaan, Menemukan
                            Tujuan
                            Allah,
                            &
                            Mengemban Amanat
                            Agung</p>
                    </div>

                </div>
            </div>
        </section> --}}



    <section class="schedule-section tim-penggembala" id="section_4">
        <div class="container">
            <div class="justify-content-center visi-misi">
                <h3 class="text-white mb-4 text-center">Tim Penggembala</h3>
                <div id="splide" class="splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            @foreach ($dataTimPenggembala as $tim_penggembala)
                                <li class="splide__slide"><img src="{{ asset('/storage/' . $tim_penggembala->gambar) }}"
                                        class="d-block w-100 person" alt="..." width="500" height="500">
                                    <h4 class="text-white text-center mb-5 tim">{{ $tim_penggembala->jabatan }}</h4>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="pricing-section section-padding" id="section_5">
        <div class="container">
            <div class="justify-content-center">
                <h3 class="text-white mb-4 text-center">Our Generation</h3>
                <div class="row">
                    @foreach ($dataOurGeneration as $our_generation)
                        <div class="col">
                            <img src="{{ asset('/storage/' . $our_generation->gambar) }}" class="d-block w-100 person"
                                alt="{{ $our_generation->gambar }}" width="200" height="200">
                            <div class="text-center">
                                <a href="{{ $our_generation->youtube }}" class="link"><i
                                        class="fa-brands fa-youtube"></i></i> Youtube</a>
                                <a href="{{ $our_generation->instagram }}"><i class="fa-brands fa-instagram"></i></i>
                                    Instagram</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>


    <section class="contact-section section-padding" id="section_6">
        <div class="container relative">
            <div class="overlay"></div>
            <div class="row">
                <div class="col-lg-8 col-12 mx-auto contact-content">
                    <h3 class="text-center mb-5 text-white">Cabang Gereja</h3>
                </div>
                <div class="col-lg-6 col-12 mb-2 mb-lg-0 order-1 contact-content">
                    <div class="row mb-3">
                        <style>

                        </style>

                        @foreach ($dataCabangGereja as $cabang_gereja)
                            <div class="col-6">
                                <div class="services-info">
                                    <br />
                                    <a href="{{ $cabang_gereja->link_cabang }}" class="text-white link hover-color">
                                        <i class="fa-solid fa-location-dot"></i> {{ $cabang_gereja->cabang }}
                                    </a>
                                    <br />
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

                <div class="col-lg-6 col-12 mb-0 pt-4 mb-lg-0 order-0 contact-content">
                    <div class="services-info text-center">
                        <a href="">
                            <img src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" alt=""
                                width="200">
                        </a>
                    </div>
                </div>
            </div>

            <div class="about-text-wrap d-flex align-content-center justify-content-center contact-content">
                <iframe width="650" height="500" class="about-image"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.107505203393!2d113.66091437390902!3d-8.19192458214727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69153c83ddf77%3A0xbeb42df6eff295b8!2sGBI%20Mojopahit%20Jember!5e0!3m2!1sid!2sid!4v1704482015247!5m2!1sid!2sid"
                    title="YouTube video player" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>


    <section>
        <div>
            <img src="{{ asset('assets/festive/images/section-background2.jpg') }}" alt="" class="img-fluid">
        </div>
    </section>
@endsection
