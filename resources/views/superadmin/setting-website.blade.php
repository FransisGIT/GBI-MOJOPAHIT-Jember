@extends('app')
@section('title', 'Setting Website')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i class="fa-solid fa-cog fs-1"></i></div>
                            Setting Website
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
                <div class="card-body">
                    <hr>
                    <form action="/setting-website/{{ $dataWebsite->id }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        @if ($dataWebsite->gambar == 'default.png' || !$dataWebsite->gambar)
                            <p class="text-center fw-bolder fs-3" id="not-found-text">Gambar tidak ditemukan.</p>
                            <div class="d-flex justify-content-center">
                                <img src="{{ asset('/storage/' . $dataWebsite->gambar) }}" class="img-thumbnail"
                                    id="file-preview" width="500" style="display: none">
                            </div>
                        @else
                            <div class="mb-3">
                                <div class="d-flex justify-content-center">
                                    <img src="{{ asset('/storage/' . $dataWebsite->gambar) }}"
                                        alt="{{ $dataWebsite->gambar }}" class="img-thumbnail" id="file-preview"
                                        width="500">
                                </div>
                            </div>
                        @endif
                        <div class="mb-3">
                            <label class="form-label title">Gambar</label>
                            <input type="file" class="form-control-file" name="gambar[]" id="file-input"
                                oninput="imagePreview()" accept="image/png, image/jpeg, image/svg, image/webp, image/WebP">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Alamat Website</label>
                            <input type="text" placeholder="Masukkan alamat website" name="url" class="form-control"
                                value="{{ $dataWebsite->url }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-labelitle">Keyword</label>
                            <textarea type="text" placeholder="Masukkan keyword" name="keyword" class="form-control">{{ $dataWebsite->keyword }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Deskripsi</label>
                            <input type="text" placeholder="Masukkan deskripsi" name="deskripsi" class="form-control"
                                value="{{ $dataWebsite->deskripsi }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Judul Website</label>
                            <input type="text" placeholder="Masukkan judul website" name="title" class="form-control"
                                value="{{ $dataWebsite->title }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Author</label>
                            <input type="text" placeholder="Masukkan author" name="author" class="form-control"
                                value="{{ $dataWebsite->author }}">
                        </div>
                        <div class="d-flex justify-content-end flex-wrap">
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @push('script')
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                imagePreview();
            });

            function imagePreview() {

                const input = document.getElementById('file-input');
                const preview = document.getElementById('file-preview');
                const notFoundText = document.getElementById('not-found-text');

                const previewPhoto = () => {
                    const file = input.files;

                    if (file && file.length > 0) {
                        const fileReader = new FileReader();
                        fileReader.onload = function(event) {
                            preview.setAttribute('src', event.target.result);
                            preview.style.display = 'block';
                            notFoundText.style.display = 'none';
                        }
                        fileReader.readAsDataURL(file[0]);
                    } else {
                        preview.style.display = 'none';
                        notFoundText.style.display = 'block';
                    }
                }

                input.addEventListener("change", previewPhoto);
            }
        </script>
    @endpush
@endsection
