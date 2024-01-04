@extends('app')
@section('title', 'GBI MOJOPAHIT | Persembahan')

@section('content')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Persembahan
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
                            class="btn btn-sm btn-primary">Simpan</a>
                    </div>
                    <hr>
                    <figure class="d-flex justify-content-center">
                        <img src="" alt="" class="img-fluid w-60 max-h-32" id="file-preview">
                    </figure>

                    <label>Ubah Gambar</label>
                    <div class="input-group input-group-joined input-group-solid mb-3">
                        <span class="input-group-text"><i data-feather="image"></i></span>
                        <input class="form-control ps-0" type="file" placeholder="Input group prepend..."
                            aria-label="banner-image" id="file-input" oninput="persembahanPreview()" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    @push('script')
        <script>
            function persembahanPreview() {
                const input = document.getElementById('file-input');
                const previewPhoto = () => {
                    const file = input.files;
                    if (file) {
                        const fileReader = new FileReader();
                        const preview = document.getElementById('file-preview');
                        fileReader.onload = function(event) {
                            preview.setAttribute('src', event.target.result);
                        }
                        fileReader.readAsDataURL(file[0]);
                    }
                }
                input.addEventListener("change", previewPhoto);
            }
        </script>
    @endpush
@endsection
