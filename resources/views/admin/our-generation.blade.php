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
                        @foreach ($data as $d)
                            <div class="col-lg-4 mb-4">
                                <div class="d-flex align-items-center">
                                    <div class="h-25 w-25">
                                        <figure>
                                            <img class="img-pug img-fluid" src="{{ asset('/storage/' . $d->gambar) }}"
                                                alt="{{ $d->gambar }}" />
                                        </figure>
                                    </div>
                                    <div class="ms-3">
                                        <div class="fs-4 text-dark fw-500">{{ $d->nama_generation }}</div>
                                        <div class="text-muted mb-3">
                                            <a href="{{ $d->youtube }}" class="link" target="_blank">
                                                <i class="fa-brands fa-youtube"></i>
                                                Youtube
                                            </a>
                                            <a href="{{ $d->instagram }}" class="link" target="_blank">
                                                <i class="fa-brands fa-instagram"></i>
                                                Instagram
                                            </a>
                                        </div>
                                        <div class="small text-muted">
                                            <a class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal"
                                                data-bs-target="#edit{{ $d->id }}"><i
                                                    class="fa-solid fa-pen-to-square"></i></a>
                                            <a class="btn btn-sm btn-danger" type="button" data-bs-toggle="modal"
                                                data-bs-target="#delete{{ $d->id }}"><i
                                                    class="fa-solid fa-trash-can"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- TAMBAH --}}
    <div class="modal fade" id="tambah" data-bs-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="/our-generation" method="post" enctype="multipart/form-data">
                        @csrf
                        <figure class="d-flex justify-content-center text-center">
                            <div class="h-50 w-50">
                                <img class="img-pug img-fluid d-none" src="#" id="file-preview" />
                            </div>
                        </figure>
                        <div class="mb-3">
                            <label>Upload gambar</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="file"></i></span>
                                <input class="form-control ps-0" name="gambar[]" type="file" placeholder="Upload Gambar"
                                    aria-label="upload-gambar" id="file-input" src="#" oninput="tambahPreview()" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Nama generation</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="user"></i></span>
                                <input class="form-control ps-0" name="nama_generation" type="text"
                                    placeholder="Masukkan nama generation" aria-label="generation" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Masukkan link Instagram</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="instagram"></i></span>
                                <input class="form-control ps-0" name="instagram" type="text"
                                    placeholder="Masukkan link instagram" aria-label="instagram" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Masukkan link Youtube</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="youtube"></i></span>
                                <input class="form-control ps-0" name="youtube" type="text"
                                    placeholder="Masukkan link youtube" aria-label="youtube" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-light" type="button" data-bs-dismiss="modal">Tutup</button>
                            <button class="btn btn-primary" type="submit">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {{-- EDIT --}}
    @foreach ($data as $edit)
        <div class="modal fade" id="edit{{ $edit->id }}" data-bs-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel"></h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/our-generation/{{ $edit->id }}" method="post">
                            @csrf
                            @method('put')

                            <figure class="d-flex justify-content-center text-center">
                                <div class="h-50 w-50">
                                    <img class="img-pug img-fluid" src="{{ asset('/storage/' . $edit->gambar) }}"
                                        id="edit-preview" />
                                </div>
                            </figure>

                            <div class="mb-3">
                                <label>Upload gambar</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="file"></i></span>
                                    <input class="form-control ps-0" name="gambar[]" type="file"
                                        placeholder="Upload Gambar" aria-label="upload-gambar" id="edit-input"
                                        value="{{ $edit->gambar }}" oninput="editPreview()" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Nama generation</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="instagram"></i></span>
                                    <input class="form-control ps-0" value="{{ $edit->nama_generation }}"
                                        name="nama_generation" type="text" placeholder="Masukkan nama generation"
                                        aria-label="instagram" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Instagram</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="instagram"></i></span>
                                    <input class="form-control ps-0" value="{{ $edit->instagram }}" name="instagram"
                                        type="text" placeholder="Masukkan link instagram" aria-label="instagram" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Youtube</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="youtube"></i></span>
                                    <input class="form-control ps-0" value="{{ $edit->youtube }}" name="youtube"
                                        type="text" placeholder="Masukkan link youtube" aria-label="youtube" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-light" type="button" data-bs-dismiss="modal">Tutup</button>
                                <button class="btn btn-primary" type="submit">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endforeach


    {{-- DELETE --}}
    @foreach ($data as $delete)
        <div class="modal fade" id="delete{{ $delete->id }}" data-bs-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <form action="/our-generation/{{ $delete->id }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('delete')

                            <figure class="d-flex justify-content-center text-center">
                                <div class="h-50 w-50">
                                    <img class=" img-fluid" src="{{ asset('assets/festive/images/trash.gif') }}"
                                        id="edit-preview" />
                                </div>
                            </figure>
                            <div class="mb-3 d-grid text-center">
                                <div class="mb-1 mt-3">
                                    <p class="fw-bolder text-danger fs-1">Hapus Data</p>
                                </div>
                                <div class="mb-1">
                                    <p class="fw-semibold fs-5">Apakah kamu yakin ingin menghapus data ini?</p>
                                </div>
                            </div>
                            <div class="modal-footer border-0 d-flex justify-content-center">
                                <button class="btn btn-light" type="button" data-bs-dismiss="modal">Batal</button>
                                <button class="btn btn-danger" type="submit">Hapus</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

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
