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
                            <iframe id="video-preview" width="420" height="345" class="d-none mb-3" src=""
                                title="Youtube Video" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>

                        <label>Ubah Video</label>
                        <div class="input-group input-group-joined input-group-solid mb-3">
                            <span class="input-group-text"><i data-feather="video"></i></span>
                            <input class="form-control ps-0" name="link_video" type="text"
                                placeholder="Masukkan link video youtube" aria-label="video-youtube" id="video-url"
                                oninput="iframePreview()" value="{{ $data->link_video }}" />
                        </div>
                        <label>Judul</label>
                        <div class="input-group input-group-joined input-group-solid mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                            <input class="form-control ps-0" name="judul" type="text" placeholder="Masukkan judul"
                                aria-label="judul" value="{{ $data->judul }}" />
                        </div>
                        <div class="mb-3">
                            <label>Isi Konten</label>
                            <textarea class="form-control" cols="30" rows="10" name="isi_konten" placeholder="Masukkan isi konten.">{{ $data->isi_konten }}</textarea>
                        </div>
                    </div>
                </form>
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
