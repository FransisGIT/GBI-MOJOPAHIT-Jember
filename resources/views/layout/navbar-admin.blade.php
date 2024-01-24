<nav class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
    id="sidenavAccordion">
    <!-- Sidenav Toggle Button-->
    <button class="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><i
            data-feather="menu"></i></button>
    <!-- Navbar Brand-->
    <!-- * * Tip * * You can use text or an image for your navbar brand.-->
    <!-- * * * * * * When using an image, we recommend the SVG format.-->
    <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px-->
    <a class="navbar-brand pe-3 ps-4 ps-lg-2" href="/">GBI MOJOPAHIT</a>
    <!-- Navbar Items-->
    @if (request()->is('beranda'))
    @else
        <div class="badge badge-dark text-black fs-6" id="jam"></div>
        <div class="badge badge-dark text-black fs-6" id="tanggal" hidden></div>
    @endif


    <ul class="navbar-nav align-items-center ms-auto">

        <!-- User Dropdown-->
        <li class="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
            <a class="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage"
                href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img class="img-fluid"
                    src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" /></a>
            <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                aria-labelledby="navbarDropdownUserImage">
                <h6 class="dropdown-header d-flex align-items-center">
                    <a href="/setting-akun">
                        <img class="dropdown-user-img"
                            src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" />
                    </a>
                    <a href="/setting-akun">
                        <div class="dropdown-user-details">
                            <div class="dropdown-user-details-name">{{ Auth::user()->username }}</div>
                            <div class="dropdown-user-details-email">{{ Auth::user()->role }}</div>
                        </div>
                    </a>
                </h6>
                <div class="dropdown-divider"></div>
                {{-- <a class="dropdown-item" href="/setting-akun">
                    <div class="dropdown-item-icon"><i data-feather="settings"></i></div>
                    Setting Akun
                </a> --}}
                <a class="dropdown-item" href="/logout">
                    <div class="dropdown-item-icon"><i data-feather="log-out"></i></div>
                    Logout
                </a>
            </div>
        </li>
    </ul>
</nav>
