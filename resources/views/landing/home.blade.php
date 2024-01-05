@extends('landing')

@section('content')
    <section class="hero-section" id="section_1">

        <style>
            .live_iframe {
                position: absolute;
                top: 80px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                width: 52%;
                height: 66%;
                margin: auto;
                border-radius: 25px;
                z-index: 3;
            }

            .text-live {
                text-align: center;
                position: absolute;
                /* top: 80px; */
                bottom: 400px;
                left: 0px;
                right: 0px;
                width: 14%;
                height: 0;
                margin: auto;
                border-radius: 25px;
                z-index: 3;
                color: white;
            }

            @media (max-width:991px) {
                .live_iframe {
                    width: 71%;
                    height: 49%;
                    bottom: -54px;
                }

                .text-live {
                    width: 30%;
                    height: 21%;
                    bottom: 10px;
                    text-align: center;
                    color: white;
                    font-size: medium;
                }
            }
        </style>
        @if (pathinfo($data->banner, PATHINFO_EXTENSION) === 'mp4')
            <video autoplay loop muted class="custom-video border-0 p-0">
                <source src="{{ asset('/storage/' . $data->banner) }}" type="video/mp4">
            </video>
        @elseif (in_array(pathinfo($data->banner, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png'], true))
            <img src="{{ asset('/storage/' . $data->banner) }}" alt="" class="custom-video border-0 p-0">
        @endif

        @if ($data->link_live)
            <iframe class="custom-video border-0 p-0 live_iframe" src="{{ $data->link_live }}" title="YouTube video player"
                frameborder="0"
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

                <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center order-1">
                    <div class="services-info">
                        <h3 class="text-white mb-4">INI JUDUL</h3>

                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero
                            magnam quo commodi quae? Id veniam placeat alias porro cum, commodi sint neque repellat,
                            hic sed provident, perferendis eaque in? Incidunt, non nostrum eius labore in totam
                            magni similique maiores impedit sequi iure atque adipisci neque distinctio alias
                            quibusdam optio voluptate quisquam velit nam recusandae? Quae maiores aliquam
                            consectetur tenetur et veritatis non facere voluptatem, expedita quod earum corrupti
                            repellat ea labore ullam recusandae quaerat harum suscipit voluptate, delectus sint
                            explicabo. Sequi facere minus consectetur ab eos commodi impedit voluptatibus, quas at
                            eveniet temporibus perspiciatis dolor quae ullam. Libero, minus?.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-12 order-0">
                    <div class="about-text-wrap d-flex align-content-center justify-content-center">

                        <iframe width="560" height="355" class="about-image"
                            src="https://www.youtube.com/embed/gEzyb_07fJY?si=hVLyP5sXiT1jm3CQ?t=669&autoplay=1&mute=0"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

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
                    <p class="fs-5 fw-normal text-white">Menjadi Gereja yang Memenuhi Perintah Agung dan Amanat
                        Agung untuk Pergi
                        dan
                        Menjadikan Semua
                        Bangsa Menjadi Murid Kristus
                    </p>
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
                            <li class="splide__slide"><img
                                    src="{{ asset('assets/festive/images/person/foto-0.16336512361323263.png') }}"
                                    class="d-block w-100 person" alt="..." width="500" height="500">
                                <h4 class="text-white text-center mb-5 tim">Gembala</h4>
                            </li>
                            <li class="splide__slide"> <img
                                    src="{{ asset('assets/festive/images/person/foto-0.15418167038501807.png') }}"
                                    class="d-block w-100 person" alt="..." width="500" height="500">
                                <h4 class="text-white text-center mb-5 tim">Tim Penggembala</h4>
                            </li>
                            <li class="splide__slide"><img
                                    src="{{ asset('assets/festive/images/person/foto-0.3179698737538298.png') }}"
                                    class="d-block w-100 person" alt="..." width="500"height="500">
                                <h4 class="text-white text-center mb-5 tim">Tim Penggembala</h4>
                            </li>
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
                    <div class="col">
                        <img src="{{ asset('assets/festive/images/logo/gps.png') }}" class="d-block w-100 person"
                            alt="..." width="200" height="200">
                        <div class="text-center">
                            <a href="" class="link"><i class="fa-brands fa-youtube"></i></i> Youtube</a>
                            <a href=""><i class="fa-brands fa-instagram"></i></i>
                                Instagram</a>
                        </div>
                    </div>
                    <div class="col">
                        <img src="{{ asset('assets/festive/images/logo/ga.png') }}" class="d-block w-100 person"
                            alt="..." width="200" height="200">
                        <div class="text-center">
                            <a href="" class="link"><i class="fa-brands fa-youtube"></i></i> Youtube</a>
                            <a href=""><i class="fa-brands fa-instagram"></i></i>
                                Instagram</a>
                        </div>
                    </div>
                    <div class="col">
                        <img src="{{ asset('assets/festive/images/logo/youth.png') }}" class="d-block w-100 person"
                            alt="..." width="200"height="200">
                        <div class="text-center">
                            <a href="" class="link"><i class="fa-brands fa-youtube"></i></i> Youtube</a>
                            <a href=""><i class="fa-brands fa-instagram"></i></i>
                                Instagram</a>
                        </div>
                    </div>
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
                <div class="col-lg-6 col-12 mb-4 mb-lg-0 order-1 contact-content">
                    <div class="row mb-3">
                        <div class="col">
                            <div class="services-info">
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Bondowoso</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Ranting Kasiyan</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Rambipuji</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Panti</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Sukowono</p>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="services-info">
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Bondowoso</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Ranting Kasiyan</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Rambipuji</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Panti</p>
                                </a>
                                <br>
                                <a href="">
                                    <p class="text-white"><i class="fa-solid fa-location-dot"></i> Sukowono</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-12 mb-4 mb-lg-0 order-0 contact-content">
                    <div class="services-info text-center">
                        <a href="">
                            <img src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" alt=""
                                width="200">
                        </a>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center contact-content mt-5 mb-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.107505203393!2d113.66091437390902!3d-8.19192458214727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69153c83ddf77%3A0xbeb42df6eff295b8!2sGBI%20Mojopahit%20Jember!5e0!3m2!1sid!2sid!4v1704482015247!5m2!1sid!2sid"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>


    <section>
        <div>
            <img src="{{ asset('assets/festive/images/section-background2.jpg') }}" alt="" class="img-fluid">
        </div>
    </section>
@endsection
