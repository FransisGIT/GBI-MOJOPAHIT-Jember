@extends('app')
@section('title', 'GBI MOJOPAHIT | Banner & Livestream')

@section('content')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Banner Depan & Livestream
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
                    <div class="small text-muted mb-2 d-flex justify-content-end"><a href=""
                            class="btn btn-primary">Simpan</a>
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
                        <input class="form-control ps-0" type="text" placeholder="Masukkan link video youtube"
                            aria-label="video-youtube" id="video-url" oninput="iframePreview()" />
                    </div>
                    <label>Judul</label>
                    <div class="input-group input-group-joined input-group-solid mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                        <input class="form-control ps-0" type="text" placeholder="Masukkan judul" aria-label="judul" />
                    </div>
                    <div class="mb-3">
                        <label>Isi Konten</label>
                        <textarea id="visiEditor" placeholder="Masukkan isi konten."></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @push('script')
        <script>
            function iframePreview() {
                var videoUrl = document.getElementById("video-url").value
                document.getElementById("video-preview").src = videoUrl
                document.getElementById("video-preview").classList.remove('d-none');
            }
        </script>
    @endpush
@endsection
