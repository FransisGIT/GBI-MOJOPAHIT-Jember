@extends('app')
@section('title', 'GBI MOJOPAHIT | Kelola User')

@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Kelola User
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
                            <div class="small text-muted mb-2 d-flex justify-content-end"><a href="/kelola-user/create"
                                    class="btn btn-primary">Tambah</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        @foreach ($data as $d)
                            <div class="col-lg-3">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-lg"><i class="fa-solid fa-user fs-1"></i></div>
                                    <div class="ms-3">
                                        <div class="fs-4 text-dark fw-500">{{ $d->username }}</div>
                                        <div class="small text-muted">{{ $d->role }}</div>
                                        <div>
                                            <a type="button" class="btn btn-primary"
                                                href="/kelola-user/{{ $d->id }}/edit">
                                                <i class="fa-solid fa-user-pen"></i>
                                            </a>
                                            <a href="{{ route('kelola-user.destroy', $d->id) }}" class="btn btn-danger"
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
                        <form action="/kelola-user/{{ $delete->id }}" method="post" enctype="multipart/form-data">
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
