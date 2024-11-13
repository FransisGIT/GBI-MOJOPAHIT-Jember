<div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
                <!-- Sidenav Menu Heading (Core)-->
                <div class="sidenav-menu-heading">Fitur Website</div>
                <!-- Sidenav Accordion (Dashboard)-->
                <a class="nav-link {{ Request::is('beranda') ? 'active' : '' }}" href="/beranda">
                    <div class="nav-link-icon">
                        <i data-feather="grid" class="fs-5"></i>
                    </div>
                    Beranda
                </a>
                <!-- Sidenav Heading (Custom)-->
                @if (auth()->check() &&
                        auth()->user()->hasRole('Superadmin'))
                    <div class="sidenav-menu-heading">Fitur Superadmin</div>
                    <a class="nav-link {{ Request::is('kelola-user') ? 'active' : '' }}" href="/kelola-user">
                        <div class="nav-link-icon">
                            <i class="fa-solid fa-user fs-5"></i>
                        </div>
                        Kelola User
                    </a>
                    <a class="nav-link {{ Request::is('setting-website') ? 'active' : '' }}" href="/setting-website">
                        <div class="nav-link-icon">
                            <i class="fa-solid fa-user fs-5"></i>
                        </div>
                        Setting Website
                    </a>
                @endif

                <div class="sidenav-menu-heading">Kelola Halaman Depan</div>
                <!-- Sidenav Accordion (Pages)-->
                <a class="nav-link {{ Request::is('banner-livestream-edit') ? 'active' : '' }}"
                    href="/banner-livestream-edit">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-newspaper fs-5"></i>
                    </div>
                    Banner Depan & Live
                </a>

                <!-- Sidenav Accordion (Applications)-->
                <a class="nav-link {{ Request::is('panel-about') ? 'active' : '' }}" href="/panel-about">
                    <div class="nav-link-icon">
                        <i class="fa-regular fa-newspaper fs-5"></i>
                    </div>
                    Panel About
                </a>

                <a class="nav-link {{ Request::is('visi-misi') ? 'active' : '' }}" href="/visi-misi">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-lightbulb fs-5"></i>
                    </div>
                    Visi & Misi
                </a>
                <!-- Sidenav Accordion (Flows)-->
                <a class="nav-link {{ Request::is('tim-penggembala') ? 'active' : '' }}" href="/tim-penggembala">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-people-group fs-5"></i>
                    </div>
                    Tim Penggembala
                </a>


                <a class="nav-link {{ Request::is('our-generation') ? 'active' : '' }}" href="/our-generation">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-sitemap fs-5"></i>
                    </div>
                    Our Generation
                </a>

                <a class="nav-link {{ Request::is('info-kontak') ? 'active' : '' }}" href="/info-kontak">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-phone-volume fs-5"></i>
                    </div>
                    Sosmed & Kontak
                </a>

                <a class="nav-link {{ Request::is('cabang-gereja') ? 'active' : '' }}" href="/cabang-gereja">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-people-roof fs-5"></i>
                    </div>
                    Cabang Gereja
                </a>

                <a class="nav-link {{ Request::is('kelola-persembahan') ? 'active' : '' }}" href="/kelola-persembahan">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-hands-holding fs-5"></i>
                    </div>
                    Persembahan
                </a>

                <a class="nav-link {{ Request::is('kelola-renungan') ? 'active' : '' }}" href="/kelola-renungan">
                    <div class="nav-link-icon">
                        <i class="fa-solid fa-book-bible fs-5"></i>
                    </div>
                    Renungan
                </a>
            </div>
        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
            <div class="sidenav-footer-content">
                <div class="sidenav-footer-subtitle">Login sebagai:</div>
                <div class="sidenav-footer-title">{{ Auth::user()->username }}</div>
            </div>
        </div>
        <div class="p-3">
            <a href="/logout" class="btn btn-sm btn-danger w-100" type="button">Logout</a>
        </div>
    </nav>
</div>
