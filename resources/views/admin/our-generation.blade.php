@extends('app')
@section('title', 'GBI MOJOPAHIT | Our Generation')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Our Generation
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
                    <div class="small text-muted mb-2 d-flex justify-content-end"><a href="" class="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#tambah">Tambah</a>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25">
                                    <figure>
                                        <img class="img-pug img-fluid"
                                            src="{{ asset('assets/festive/images/logo/ga.png') }}" />
                                    </figure>
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{nama generation }</div>
                                    <div class="text-muted mb-3">
                                        <a href="" class="link">
                                            <i class="fa-brands fa-youtube"></i>
                                            Youtube
                                        </a>
                                        <a href="">
                                            <i class="fa-brands fa-instagram"></i>
                                            Instagram
                                        </a>
                                    </div>
                                    <div class="small text-muted">
                                        <a href="" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#edit{{ 1 }}">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Hapus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25">
                                    <figure>
                                        <img class="img-pug img-fluid"
                                            src="{{ asset('assets/festive/images/logo/gps.png') }}" />
                                    </figure>
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{nama generation }</div>
                                    <div class="text-muted mb-3">
                                        <a href="" class="link">
                                            <i class="fa-brands fa-youtube"></i>
                                            Youtube
                                        </a>
                                        <a href="">
                                            <i class="fa-brands fa-instagram"></i>
                                            Instagram
                                        </a>
                                    </div>
                                    <div class="small text-muted">
                                        <a href="" class="btn btn-sm btn-primary">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Hapus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25">
                                    <figure>
                                        <img class="img-pug img-fluid"
                                            src="{{ asset('assets/festive/images/logo/youth.png') }}" />
                                    </figure>
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{nama generation }</div>
                                    <div class="text-muted mb-3">
                                        <a href="" class="link">
                                            <i class="fa-brands fa-youtube"></i>
                                            Youtube
                                        </a>
                                        <a href="">
                                            <i class="fa-brands fa-instagram"></i>
                                            Instagram
                                        </a>
                                    </div>
                                    <div class="small text-muted">
                                        <a href="" class="btn btn-sm btn-primary">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Hapus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- TAMBAH --}}
    <div class="modal fade" id="tambah" data-bs-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <figure class="d-flex justify-content-center text-center">
                        <div class="h-50 w-50">
                            <img class="img-pug img-fluid d-none" src="#" id="file-preview" />
                        </div>
                    </figure>
                    <div class="mb-3">
                        <label>Upload gambar</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="file"></i></span>
                            <input class="form-control ps-0" type="file" placeholder="Upload Gambar"
                                aria-label="upload-gambar" id="file-input" src="#" oninput="tambahPreview()" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Masukkan link Instagram</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="instagram"></i></span>
                            <input class="form-control ps-0" type="text" placeholder="Masukkan link instagram"
                                aria-label="instagram" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Masukkan link Youtube</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="youtube"></i></span>
                            <input class="form-control ps-0" type="text" placeholder="Masukkan link youtube"
                                aria-label="youtube" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-light" type="button" data-bs-dismiss="modal">Tutup</button>
                        <button class="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- EDIT --}}
    <div class="modal fade" id="edit{{ 1 }}" data-bs-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <figure class="d-flex justify-content-center text-center">
                        <div class="h-50 w-50">
                            <img class="img-pug img-fluid" src="#" id="edit-preview" />
                        </div>
                    </figure>
                    <div class="mb-3">
                        <label>Upload gambar</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="file"></i></span>
                            <input class="form-control ps-0" type="file" placeholder="Upload Gambar"
                                aria-label="upload-gambar" id="edit-input" src="#" oninput="editPreview()" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Masukkan link Instagram</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="instagram"></i></span>
                            <input class="form-control ps-0" type="text" placeholder="Masukkan link instagram"
                                aria-label="instagram" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Masukkan link Youtube</label>
                        <div class="input-group input-group-joined input-group-solid ">
                            <span class="input-group-text"><i data-feather="youtube"></i></span>
                            <input class="form-control ps-0" type="text" placeholder="Masukkan link youtube"
                                aria-label="youtube" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-light" type="button" data-bs-dismiss="modal">Tutup</button>
                        <button class="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @push('script')
        <script>
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
