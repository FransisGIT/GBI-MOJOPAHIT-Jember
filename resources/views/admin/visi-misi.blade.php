@extends('app')
@section('title', 'Visi & Misi')
@section('content')
    @include('sweetalert::alert')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Visi & Misi
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-n10">
        <form action="/visi-misi/{{ $data->id }}" method="post">
            @csrf
            @method('put')
            <div class="row">
                <div class="col-xl-8 mb-4 my-order-1">
                    <!-- Illustration dashboard card example-->
                    <div class="row gx-4">
                        <div class="col-lg-12 my-order-1">
                            <div class="card card-header-actions mb-4">
                                <div class="card-header">
                                    Visi
                                    <i class="text-muted" data-feather="info" data-bs-toggle="tooltip"
                                        data-bs-placement="left" title="Visi."></i>
                                </div>
                                <div class="card-body">
                                    <textarea class="lh-base form-control" name="visi" type="text" placeholder="Tulis visi." rows="4">{{ $data->visi }}</textarea>
                                </div>
                            </div>

                            <div class="card card-header-actions mb-4">
                                <div class="card-header">
                                    Misi
                                    <i class="text-muted" data-feather="info" data-bs-toggle="tooltip"
                                        data-bs-placement="left" title="Misi."></i>
                                </div>
                                <div class="card-body">
                                    <textarea class="lh-base form-control" name="misi" type="text" placeholder="Tulis misi." rows="4">{{ $data->misi }}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mb-3 my-order-button-2">
                    <div class="card card-header-actions">
                        <div class="card-body">
                            <div class="d-grid">
                                <button type="submit" class="fw-500 btn btn-primary">
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
