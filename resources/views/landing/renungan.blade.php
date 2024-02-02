@extends('landing')
@section('title', 'GBI MOJOPAHIT')
@section('content')
    <section class="hero-section position-relative" id="section_1">
        <div class="overlay_renungan"></div>
        <img src="https://www.shutterstock.com/image-photo/close-open-bible-cup-coffee-600nw-1062579482.jpg" alt=""
            class="custom-video border-0 p-0">
        <div class="header-page position-absolute top-50 start-50 translate-middle text-center w-100">
            <h2 class="text-white">Renungan</h2>
        </div>
    </section>

    <section class="renungan-section" id="section_2">
        <div class="container">
            <div class="pt-5 w-75 pb-0 m-auto">
                <form action="/renungan" method="GET">
                    <div class="input-group input-group-joined">
                        <span class="input-group-text">
                            <i class="fa-solid fa-search fs-5"></i>
                        </span>
                        <input class="form-control ps-0" type="text" name="searchQuery" value="{{ $searchQuery }}"
                            placeholder=" Cari berdasarkan judul renungan, tanggal, minggu ke-" aria-label="Search">
                        <button type="submit" class="btn btn-primary">Cari</button>
                    </div>
                </form>
            </div>

            @if ($dataRenungan->isNotEmpty())
                <div class="row">
                    @foreach ($dataRenungan as $d)
                        <div class="col d-flex justify-content-center mt-5">
                            <div class="card border-0" style="width: 18rem;">
                                <figure>
                                    <a href="/daftar-renungan/{{ $d->id }}" class="text-decoration-none">
                                        <div class="hover-black">
                                            <img src="{{ asset('/storage/' . $d->gambar) }}" class="card-img-top aspect"
                                                alt="gambar">
                                        </div>
                                    </a>
                                </figure>
                                <div class="card-body text-start">
                                    <a href="/daftar-renungan/{{ $d->id }}" class="text-decoration-none">
                                        <h6 class="card-title text-black fs-4">{{ $d->judul_renungan }}</h6>
                                    </a>
                                    <h5 class="card-text text-black small">
                                        {{ \Carbon\Carbon::parse($d->dibuat)->format('d F Y') }}</h5>
                                    <p class="card-text text-black fs-6" id="isi_renungan">
                                        {{ substr(preg_replace('/[^\p{L}\p{N}\s]/u', '', $d->isi_renungan), 0, 200) }}
                                        <span>
                                            <a href="/daftar-renungan/{{ $d->id }}" class="text-black fw-bold">
                                                Baca Selengkapnya</a>
                                        </span>
                                    </p>
                                    <a href="https://api.whatsapp.com/send?text=Renungan GBI Mojopahit SSS Kunjungi di: {{ urlencode(url('/renungan/' . $d->id)) }}"
                                        class="btn btn-success" target="_blank">
                                        Share WA
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                {{ $dataRenungan->links() }}
            @else
                <div class="my-5">
                    <h5 class="text-center text-black">Data tidak ada!</h5>
                </div>
            @endif
        </div>
    </section>
@endsection
