<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>GBI MOJOPAHIT JEMBER | LOGIN</title>
    <link href="{{ asset('assets/sbadminpro/css/styles.css') }}" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" />
    <script data-search-pseudo-elements="" defer=""
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" crossorigin="anonymous">
    </script>
</head>


<body class="bg-primary">
    @include('sweetalert::alert')
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container-xl px-4 py-5">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                            <!-- Social login form-->
                            <div class="card my-10">
                                <div class="card-body p-5 text-center pb-2 pt-4">
                                    <div class="h1 fw-semibold mb-3 fs-1"><span class="fw-bolder fw-700">Admin</span>
                                        GBI
                                        Mojopahit</div>
                                </div>
                                <hr class="my-0" />
                                <div class="card-body p-5 pt-4">
                                    <div class="h3 fw-light mb-4 fs-6 text-center">Masukkan akun anda</div>
                                    <!-- Login form-->
                                    <form method="POST" action="/login">
                                        @csrf
                                        <!-- Form Group (email address)-->
                                        <div class="mb-3">
                                            <div class="input-group input-group-joined input-group-solid">
                                                <span class="input-group-text">
                                                    <i data-feather="user"></i>
                                                </span>
                                                <input class="form-control ps-0" type="text"
                                                    placeholder="Masukkan Username" aria-label="username"
                                                    name="username" onfocus>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="input-group input-group-joined input-group-solid">
                                                <span class="input-group-text">
                                                    <i data-feather="key"></i>
                                                </span>
                                                <input class="form-control ps-0" type="password"
                                                    placeholder="Masukkan Username" aria-label="password"
                                                    name="password">
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-0">
                                            <button class="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
    <script src="{{ asset('assets/sbadminpro/js/scripts.js') }}"></script>

    <script src="https://assets.startbootstrap.com/js/sb-customizer.js"></script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194"
        integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw=="
        data-cf-beacon='{"rayId":"750b4b9fdd8f073a","token":"6e2c2575ac8f44ed824cef7899ba8463","version":"2022.8.1","si":100}'
        crossorigin="anonymous"></script>
</body>

</html>
