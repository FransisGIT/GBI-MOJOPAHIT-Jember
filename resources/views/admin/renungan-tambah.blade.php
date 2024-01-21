@extends('app')
@section('title', 'GBI MOJOPAHIT | Renungan')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
            </div>
        </div>
    </header>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-n10">
        <!-- Illustration dashboard card example-->
        <div class="card lift order-1">
            <div class="container">
                <div class="card-body">
                    <form action="/kelola-renungan" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="d-flex justify-content-end gap-3 flex-wrap">
                            <a href="/kelola-renungan" class="btn btn-light " type="button">Kembali</a>
                            <button type="submit" class="btn btn-primary">Tambah</button>
                        </div>
                        <div class="mt-4">
                            <figure class="d-flex justify-content-center text-center">
                                <img class="img-thumbnail img-fluid w-50 d-none" src="#" id="file-preview" />
                            </figure>
                            <div class="mb-3">
                                <label>Upload gambar</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="file"></i></span>
                                    <input class="form-control ps-0" type="file" placeholder="Upload Gambar"
                                        aria-label="upload-gambar" name="gambar[]" id="file-input" src="#"
                                        oninput="tambahPreview()" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <label>Judul Renungan</label>
                            <div class="input-group input-group-joined input-group-solid">
                                <span class="input-group-text">
                                    <i data-feather="search"></i>
                                </span>
                                <input class="form-control ps-0" type="text" name="judul_renungan"
                                    placeholder="Masukkan judul renungan" aria-label="Search">
                            </div>
                        </div>
                        <div class="mt-4">
                            <label>Renungan Minggu</label>
                            <div class="input-group input-group-joined input-group-solid">
                                <span class="input-group-text">
                                    <i data-feather="search"></i>
                                </span>
                                <input class="form-control ps-0" type="text" name="renungan_ke"
                                    placeholder="Masukkan renungan minggu ke" aria-label="Search">
                            </div>
                        </div>

                        <div class="mt-4">
                            <label>Tanggal Renungan Dibuat</label>
                            <input class="form-control form-control-solid" name="dibuat" id="custom-date-input"
                                placeholder="Masukkan Tanggal Renungan Dibuat">
                        </div>
                        <div class="mt-4">
                            <label>Isi Renungan</label>
                            <textarea name="isi_renungan" id="deskripsi" name="isi_renungan" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    @push('script')
        <script>
            flatpickr("#custom-date-input", {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
            });

            function tambahPreview() {
                const input = document.getElementById('file-input');
                const previewPhoto = () => {
                    const file = input.files;
                    if (file) {
                        const fileReader = new FileReader();
                        const preview = document.getElementById('file-preview');
                        fileReader.onload = function(event) {
                            preview.setAttribute('src', event.target.result);
                            document.getElementById('file-preview').classList.remove('d-none')
                        }
                        fileReader.readAsDataURL(file[0]);
                    }
                }
                input.addEventListener("change", previewPhoto);
            }

            function editPreview() {
                const input = document.getElementById('edit-input');
                const previewPhoto = () => {
                    const file = input.files;
                    if (file) {
                        const fileReader = new FileReader();
                        const preview = document.getElementById('edit-preview');
                        fileReader.onload = function(event) {
                            preview.setAttribute('src', event.target.result);
                            document.getElementById('edit-preview').classList.remove('d-none')
                        }
                        fileReader.readAsDataURL(file[0]);
                    }
                }
                input.addEventListener("change", previewPhoto);
            }
        </script>
    @endpush
@endsection
