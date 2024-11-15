@extends('app')
@section('title', 'Banner & Livestream')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Banner Depan & Live
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
                <div class="card-body p-5">
                    <form action="/banner-livestream-simpan/{{ $data->id }}" method="post"
                        enctype="multipart/form-data" id="simpan">
                        @csrf
                        <div class="small text-muted mb-2 d-flex justify-content-end">
                            <a type="button" class="btn btn-primary"
                                onclick="document.getElementById('simpan').submit()">Simpan
                            </a>
                        </div>
                        <hr>
                        <figure class="d-flex justify-content-center">
                            @if (pathinfo($data->banner, PATHINFO_EXTENSION) === 'mp4')
                                <video controls loop muted class="custom-video border-0 p-0">
                                    <source src="{{ asset('/storage/' . $data->banner) }}" type="video/mp4">
                                </video>
                            @elseif (in_array(pathinfo($data->banner, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png'], true))
                                <img src="{{ asset('/storage/' . $data->banner) }}" alt="{{ $data->banner }}"
                                    class="img-fluid w-60 max-h-32" id="file-preview">
                            @endif
                        </figure>

                        <label>Ubah Banner</label>
                        <div class="input-group input-group-joined input-group-solid mb-3">
                            <span class="input-group-text"><i data-feather="image"></i></span>
                            <input class="form-control ps-0" type="file" placeholder="Input group prepend..."
                                aria-label="banner-image" name="banner[]" id="file-input" oninput="bannerPreview()" />
                            <!-- <label class="text-black-50">Support PNG,JPG,MP4,GIF</label> -->
                        </div>

                        <div class="d-flex justify-content-center">
                            <iframe id="video-preview" width="1300" height="500" class="mb-3 d-none"
                                title="Youtube Video" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>

                        <label>Link video youtube untuk LIVE</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="link"></i></span>
                            <input class="form-control ps-0" name="link_live" type="text"
                                placeholder="Masukkan link video" aria-label="livestream" id="video-url"
                                oninput="iframePreview()" value="{{ $data->link_live }}" />
                        </div>
                        <button type="button" class="btn btn-sm btn-primary mt-3" data-bs-target="#tutorial_link_embed"
                            data-bs-toggle="modal">
                            Tutorial Cara mengambil link embed video youtube
                        </button>
                    </form>
                </div>
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
                bannerPreview();
                iframePreview();
            });

            function bannerPreview() {
                const input = document.getElementById('file-input');
                const previewPhoto = () => {
                    const file = input.files;
                    const preview = document.getElementById('file-preview');
                    if (file && file.length > 0) {
                        const fileReader = new FileReader();
                        fileReader.onload = function(event) {
                            preview.setAttribute('src', event.target.result);
                            preview.classList.remove('d-none');
                        }
                        fileReader.readAsDataURL(file[0]);
                    } else {
                        preview.classList.add('d-none');
                    }
                }
                input.addEventListener("change", previewPhoto);
            }

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
