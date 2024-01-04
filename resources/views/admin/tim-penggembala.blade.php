@extends('app')
@section('title', 'GBI MOJOPAHIT | Tim Penggembala')

@section('content')
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container-xl px-4">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i data-feather="activity"></i></div>
                            Banner Depan & Livestream
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
                            <div class="small text-muted mb-2">Tim Penggembala: <span class="fw-bold text-black">3</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="small text-muted mb-2 d-flex justify-content-end"><a href=""
                                    class="btn btn-primary">Tambah</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25"><img class="img-pug img-fluid"
                                        src="{{ asset('assets/festive/images/person/foto-0.15418167038501807.png') }}" />
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{ nama penggembala}</div>
                                    <div class="small text-muted">Jabatan</div>
                                    <div class="small text-muted">
                                        <a href="" class="btn btn-sm btn-primary">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Hapus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25"><img class="img-pug img-fluid"
                                        src="{{ asset('assets/festive/images/person/foto-0.16336512361323263.png') }}" />
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{nama penggembala}</div>
                                    <div class="small text-muted">Jabatan</div>
                                    <div class="small text-muted">
                                        <a href="" class="btn btn-sm btn-primary">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Hapus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center">
                                <div class="h-25 w-25"><img class="img-pug img-fluid"
                                        src="{{ asset('assets/festive/images/person/foto-0.3179698737538298.png') }}" />
                                </div>
                                <div class="ms-3">
                                    <div class="fs-4 text-dark fw-500">{nama penggembala}</div>
                                    <div class="small text-muted">Jabatan</div>
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
@endsection
