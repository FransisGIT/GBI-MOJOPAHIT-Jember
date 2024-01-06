@extends('app')
@section('title', 'GBI MOJOPAHIT | Tim Penggembala')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Tim Penggembala
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
                    <div class="row">
                        <div class="col">
                            <div class="small text-muted mb-2">Tim Penggembala: <span
                                    class="fw-bold text-black">{{ $penggembala_count }}</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="small text-muted mb-2 d-flex justify-content-end"><a href=""
                                    class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tambah">Tambah</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        @foreach ($data as $d)
                            <div class="col-lg-4 mb-4">
                                <div class="d-flex align-items-center">
                                    <div class="h-50 w-50 object-fit-cover ">
                                        <img class="img-pug img-fluid object-fit-cover "
                                            src="{{ asset('/storage/' . $d->gambar) }}"
                                            onclick="location.href='{{ asset('/storage/' . $d->gambar) }}'" />
                                    </div>
                                    <div class="ms-3">
                                        <div class="fs-5 text-dark fw-500">Nama</div>
                                        <div style="font-size: 15px; min-width: 170px;" class="text-dark fw-500">
                                            {{ $d->nama }}</div>
                                        <div class="text-muted">Jabatan</div>
                                        <div class="small text-muted">{{ $d->jabatan }}</div>
                                        <div>
                                            <a type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#edit{{ $d->id }}">
                                                <i class="fa-solid fa-user-pen"></i>
                                            </a>
                                            <a href="{{ route('tim-penggembala.destroy', $d->id) }}" class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#delete{{ $d->id }}">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </a>
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

    {{-- DELETE --}}
    @foreach ($data as $delete)
        <div class="modal fade" id="delete{{ $delete->id }}" data-bs-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <form action="/tim-penggembala/{{ $delete->id }}" method="post" enctype="multipart/form-data">
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
                        <form action="/tim-penggembala/{{ $edit->id }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('put')

                            <figure class="d-flex justify-content-center text-center">
                                <div class="h-50 w-50">
                                    <img class="img-thumbnail img-fluid" src="{{ asset('/storage/' . $edit->gambar) }}"
                                        id="edit-preview" />
                                </div>
                            </figure>
                            <div class="mb-3">
                                <label>Upload gambar</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i data-feather="file"></i></span>
                                    <input class="form-control ps-0" type="file" placeholder="Upload Gambar"
                                        aria-label="upload-gambar" name="gambar[]" id="edit-input"
                                        value="{{ $edit->gambar }}" oninput="editPreview()" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Nama</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                                    <input class="form-control ps-0" name="nama" type="text"
                                        placeholder="Masukkan nama" aria-label="nama" value="{{ $edit->nama }}" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Jabatan</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i class="fa-solid fa-users"></i></span>
                                    <input class="form-control ps-0" type="text" placeholder="Masukkan jabatan"
                                        aria-label="jabatan" name="jabatan" value="{{ $edit->jabatan }}" />
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
                    <form action="/tim-penggembala" method="post" enctype="multipart/form-data">
                        @csrf
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
                        <div class="mb-3">
                            <label>Nama</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                                <input class="form-control ps-0" name="nama" type="text"
                                    placeholder="Masukkan nama" aria-label="nama" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Jabatan</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i class="fa-solid fa-users"></i></span>
                                <input class="form-control ps-0" name="jabatan" type="text"
                                    placeholder="Masukkan jabatan" aria-label="jabatan" />
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
