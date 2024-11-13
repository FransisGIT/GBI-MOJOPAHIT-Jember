@extends('app')
@section('title', 'Cabang Gereja')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Cabang Gereja
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
                                    {{-- <div class="h-25 w-25">
                                    <figure>
                                        <img class="img-pug img-fluid"
                                            src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" />
                                    </figure>
                                </div> --}}
                                    <div class="ms-3">
                                        <div class="fs-4 text-dark fw-500">{{ $d->cabang }}</div>
                                        <div class="text-muted mb-3">
                                            {{-- <a href="" class="link">
                                            <i class="fa-brands fa-youtube"></i>
                                            Youtube
                                        </a>
                                        <a href="">
                                            <i class="fa-brands fa-instagram"></i>
                                            Instagram
                                        </a> --}}

                                            <a href="{{ $d->link_cabang }}">
                                                <i class="fa-solid fa-link"></i>
                                                Link Gereja Cabang
                                            </a>
                                        </div>
                                        <div class="small text-muted">
                                            <a href="javascript:void(0)" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#edit{{ $d->id }}"><i
                                                    class="fa-solid fa-pen-to-square"></i></a>
                                            <a href="javascript:void(0)" class="btn btn-danger" data-bs-toggle="modal"
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
                    <form action="/cabang-gereja" method="post">
                        @csrf
                        {{-- <figure class="d-flex justify-content-center text-center">
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
                        </div> --}}
                        <div class="mb-3">
                            <label>Cabang</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                                <input class="form-control ps-0" name="cabang" type="text"
                                    placeholder="Masukkan nama cabang" aria-label="cabang" />
                            </div>
                        </div>
                        {{-- <div class="mb-3">
                            <label>Tentang cabang</label>
                            <textarea id="visiEditor" placeholder="Tulis tentang cabang."></textarea>
                        </div>
                        <div class="mb-3">
                            <label id="iframe-text" class="d-none">Preview Lokasi</label>
                            <div class="d-flex justify-content-center">
                                <iframe src="" width="400" height="400" style="border:0;" allowfullscreen=""
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="img-fluid d-none"
                                    id="map-preview"></iframe>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Google Maps</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="map"></i></span>
                                <input class="form-control ps-0" type="text" placeholder="Masukkan link map"
                                    aria-label="maps" id="map-url" oninput="iframePreview()" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label>Instagram</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"><i data-feather="instagram"></i></span>
                                <input class="form-control ps-0" type="text" placeholder="Masukkan link instagram"
                                    aria-label="instagram" />
                            </div>
                        </div> --}}
                        <div class="mb-3">
                            <label>Link Gereja Cabang</label>
                            <div class="input-group input-group-joined input-group-solid ">
                                <span class="input-group-text"> <i class="fa-solid fa-link"></i></span>
                                <input class="form-control ps-0" name="link_cabang" type="text"
                                    placeholder="Masukkan link cabang" aria-label="cabang" />
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
    @foreach ($data as $e)
        <div class="modal fade" id="edit{{ $e->id }}" data-bs-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel"></h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/cabang-gereja/{{ $e->id }}" method="post">
                            @csrf
                            @method('put')
                            {{-- <figure class="d-flex justify-content-center text-center">
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
                                </div> --}}
                            <div class="mb-3">
                                <label>Cabang</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                                    <input class="form-control ps-0" name="cabang" type="text"
                                        placeholder="Masukkan nama cabang" aria-label="instagram"
                                        value="{{ $e->cabang }}" />
                                </div>
                            </div>
                            {{-- <div class="mb-3">
                                    <label>Tentang cabang</label>
                                    <textarea id="visiEditor" placeholder="Tulis tentang cabang."></textarea>
                                </div>
                                <div class="mb-3">
                                    <label id="iframe-text" class="d-none">Preview Lokasi</label>
                                    <div class="d-flex justify-content-center">
                                        <iframe src="" width="400" height="400" style="border:0;" allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="img-fluid d-none"
                                            id="map-preview"></iframe>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label>Google Maps</label>
                                    <div class="input-group input-group-joined input-group-solid ">
                                        <span class="input-group-text"><i data-feather="map"></i></span>
                                        <input class="form-control ps-0" type="text" placeholder="Masukkan link map"
                                            aria-label="maps" id="map-url" oninput="iframePreview()" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label>Instagram</label>
                                    <div class="input-group input-group-joined input-group-solid ">
                                        <span class="input-group-text"><i data-feather="instagram"></i></span>
                                        <input class="form-control ps-0" type="text" placeholder="Masukkan link instagram"
                                            aria-label="instagram" />
                                    </div>
                                </div> --}}
                            <div class="mb-3">
                                <label>Link Gereja Cabang</label>
                                <div class="input-group input-group-joined input-group-solid ">
                                    <span class="input-group-text"> <i class="fa-solid fa-link"></i></span>
                                    <input class="form-control ps-0" value="{{ $e->link_cabang }}" name="link_cabang"
                                        type="text" placeholder="Masukkan link cabang" aria-label="cabang" />
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
                        <form action="/cabang-gereja/{{ $delete->id }}" method="post" enxctype="multipart/form-data">
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

    {{-- @push('script')
            <script>
                function iframePreview() {
                    var mapUrl = document.getElementById("map-url").value
                    document.getElementById("map-preview").src = mapUrl
                    document.getElementById("map-preview").classList.remove('d-none');
                    document.getElementById("iframe-text").classList.remove('d-none');
                }

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
        @endpush --}}
@endsection
