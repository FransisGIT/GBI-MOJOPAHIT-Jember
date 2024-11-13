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
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
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
                        @if ($data->gambar == 'default.png' || !$data->gambar)
                            <p class="text-center fw-bolder fs-3" id="not-found-text">Gambar tidak ditemukan.</p>
                            <div class="d-flex justify-content-center">
                                <img src="{{ asset('/storage/' . $data->gambar) }}" class="img-thumbnail" id="file-preview"
                                    width="500" style="display: none;">
                            </div>
                        @else
                            <div class="mb-3">
                                <div class="d-flex justify-content-center">
                                    <img src="{{ asset('/storage/' . $data->gambar) }}" alt="{{ $data->gambar }}"
                                        class="img-thumbnail" id="file-preview" width="500">
                                </div>
                            </div>
                        @endif
                        <div class="mb-3">
                            <label class="form-label title">Gambar</label>
                            <input type="file" class="form-control-file" name="gambar[]" id="file-input"
                                accept="image/png, image/jpeg, image/svg, image/webp, image/WebP">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Alamat Website</label>
                            <input type="text" placeholder="Masukkan alamat website" class="form-control"
                                value="{{ $dataWebsite->url }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Keyword</label>
                            <textarea type="text" placeholder="Masukkan keyword" class="form-control">{{ $dataWebsite->keyword }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Deskripsi</label>
                            <input type="text" placeholder="Masukkan deskripsi" class="form-control"
                                value="{{ $dataWebsite->deskripsi }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Judul Website</label>
                            <input type="text" placeholder="Masukkan judul website" class="form-control"
                                value="{{ $dataWebsite->title }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label title">Author</label>
                            <input type="text" placeholder="Masukkan author" class="form-control"
                                value="{{ $dataWebsite->author }}">
                        </div>
                        <div class="d-flex justify-content-end flex-wrap">
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>

                @push('script')
                    <script>
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
                                        preview.style.display = 'block'; // Tampilkan gambar preview
                                        notFoundText.style.display = 'none'; // Sembunyikan teks "Gambar tidak ditemukan"
                                    }
                                    fileReader.readAsDataURL(file[0]);
                                } else {
                                    preview.style.display = 'none'; // Sembunyikan preview jika tidak ada file
                                    notFoundText.style.display = 'block'; // Tampilkan teks "Gambar tidak ditemukan"
                                }
                            }

                            input.addEventListener("change", previewPhoto);
                        }
                    </script>
                @endpush
            @endsection
