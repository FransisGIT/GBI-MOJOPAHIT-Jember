@extends('app')
@section('title', 'GBI MOJOPAHIT | Kelola User')
@section('content')
    <header class="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
        <div class="container-xl px-4">
            <div class="page-header-content">
                <div class="row align-items-center justify-content-between pt-3">
                    <div class="col-auto mb-3">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="user"></i></div>
                            Edit User
                        </h1>
                    </div>
                    <div class="col-12 col-xl-auto mb-3">
                        <a class="btn btn-sm btn-light text-primary" href="/kelola-user">
                            <i class="me-1" data-feather="arrow-left"></i>
                            Kembali ke Daftar User
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-4">
        <div class="row">
            {{-- <div class="col-xl-4">
                <!-- Profile picture card-->
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="img-account-profile rounded-circle mb-2"
                            src="assets/img/illustrations/profiles/profile-1.png" alt="" />
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <!-- Profile picture upload button-->
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div> --}}
            <div class="col-xl-12">
                <!-- Account details card-->
                <div class="card mb-4">
                    <div class="card-header">Detail User</div>
                    <div class="card-body">
                        <form action="/kelola-user/{{ $data->id }}" method="POST">
                            @csrf
                            @method('put')
                            <div class="mb-3">
                                <label class="small mb-1" for="inputFirstName">Nama User</label>
                                <input class="form-control" id="inputFirstName" type="text"
                                    placeholder="Masukkan username" name="username" value="{{ $data->username }}" />
                            </div>
                            <!-- Form Group (email address)-->
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">Password</label>
                                <input class="form-control" id="inputEmailAddress" type="text" name="password"
                                    placeholder="Masukkan password" value="" />
                            </div>

                            <!-- Form Group (Roles)-->
                            <div class="mb-3">
                                <label class="small mb-1">Role</label>
                                <select class="form-select" aria-label="Default select" name="role">
                                    <option selected="" disabled="">Pilih role:</option>
                                    <option value="Superadmin" selected="">Superadmin</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <!-- Submit button-->
                            <button class="btn btn-primary" type="submit">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
