@extends('app')
@section('title', 'GBI MOJOPAHIT | Visi & Misi')
@section('content')
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
        <div class="row">
            <div class="col-xl-12 mb-4 my-order-1">
                <!-- Illustration dashboard card example-->
                <div class="row gx-4">
                    <div class="col-lg-12">
                        <div class="card card-header-actions mb-4 mb-lg-0">
                            <div class="card-header h1 fw-bold">
                                Visi
                                <i class="text-muted" data-feather="info" data-bs-toggle="tooltip" data-bs-placement="left"
                                    title="Markdown is supported within the post content editor."></i>
                            </div>
                            <form action="" method="post">
                                <div class="card-body">
                                    <textarea id="visiEditor" placeholder="Tulis visi."></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-12 mb-4 my-order-1">
                <!-- Illustration dashboard card example-->
                <div class="row gx-4">
                    <div class="col-lg-12">
                        <div class="card card-header-actions mb-4 mb-lg-0">
                            <div class="card-header h1 fw-bold">
                                Misi
                                <i class="text-muted" data-feather="info" data-bs-toggle="tooltip" data-bs-placement="left"
                                    title="Markdown is supported within the post content editor."></i>
                            </div>
                            <form action="" method="post">
                                <div class="card-body">
                                    <textarea id="misiEditor" placeholder="Tulis misi."></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
