@extends('app')
@section('title', 'GBI MOJOPAHIT | Panel About')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Panel About
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
                <form action="/panel-about/{{ $data->id }}" method="post" enctype="multipart/form-data" id="simpan">
                    @csrf
                    @method('put')
                    <div class="card-body p-5">
                        <div class="small text-muted mb-2 d-flex justify-content-end">
                            <a type="button" class="btn btn-primary"
                                onclick="document.getElementById('simpan').submit()">Simpan</a>
                        </div>
                        <hr>

                        <div class="d-flex justify-content-center">
                            <iframe id="video-preview" width="1300" height="500" class="d-none mb-3" src=""
                                title="Youtube Video" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <label>Ubah Video</label>
                                <div class="input-group input-group-joined input-group-solid mb-3">
                                    <span class="input-group-text"><i data-feather="video"></i></span>
                                    <input class="form-control ps-0" name="link_video" type="text"
                                        placeholder="Masukkan link video youtube" aria-label="video-youtube" id="video-url"
                                        oninput="iframePreview()" value="{{ $data->link_video }}" />
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-sm btn-primary mt-0 mb-3"
                                    data-bs-target="#tutorial_link_embed" data-bs-toggle="modal">
                                    Tutorial Cara mengambil link embed video youtube
                                </button>
                            </div>
                        </div>

                        <label>Judul</label>
                        <div class="input-group input-group-joined input-group-solid mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                            <input class="form-control ps-0" name="judul" type="text" placeholder="Masukkan judul"
                                aria-label="judul" value="{{ $data->judul }}" />
                        </div>
                        <div class="mb-3">
                            <label>Deskripsi</label>
                            <textarea id="deskripsi" name="isi_konten">{{ $data->deskripsi }}</textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="tutorial_link_embed" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tutorial Cara mengambil link embed video youtube</h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <img src="{{ asset('assets/sbadminpro/assets/img/tutorial/1.png') }}" alt="tutorial-1"
                                class="img-fluid">
                            <label class="fw-bold text-black mt-3 mb-3">Tekan tombol bagikan di video youtube yang ingin
                                diambil</label>
                        </div>
                        <div class="col-6">
                            <img src="{{ asset('assets/sbadminpro/assets/img/tutorial/2.png') }}" alt="tutorial-1"
                                class="img-fluid">
                            <label class="fw-bold text-black mt-3 mb-3">Pilih opsi sematkan/yang pertama</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <img src="{{ asset('assets/sbadminpro/assets/img/tutorial/3.png') }}" alt="tutorial-1"
                                class="img-fluid">
                            <label class="fw-bold text-black mt-3 mb-3">Copy semua teks tersebut</label>
                        </div>
                        <div class="col-6">
                            <img src="{{ asset('assets/sbadminpro/assets/img/tutorial/4.png') }}" alt="tutorial-1"
                                class="img-fluid">
                            <label class="fw-bold text-black mt-3 mb-3">Paste teks yang telah di copy ke editor teks apa
                                saja lalu
                                copy
                                link
                                youtube embednya
                                saja yang tertera pada di gambar</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <img src="{{ asset('assets/sbadminpro/assets/img/tutorial/5.png') }}" alt="tutorial-1"
                                class="img-fluid">
                            <label class="fw-bold text-black mt-3 mb-3">Paste pada input lalu simpan Done 👍</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"><button class="btn btn-primary" type="button"
                        data-bs-dismiss="modal">Tutup</button></div>
            </div>
        </div>
    </div>

    @push('script')
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                iframePreview();
            });

            function iframePreview() {
                var videoUrl = document.getElementById("video-url").value;
                var videoPreview = document.getElementById("video-preview");

                if (videoUrl.trim() !== "") {
                    videoPreview.src = videoUrl;
                    videoPreview.classList.remove('d-none');
                } else {
                    videoPreview.classList.add('d-none');
                }
            }
        </script>
    @endpush
@endsection
