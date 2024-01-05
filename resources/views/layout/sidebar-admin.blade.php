<div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
                <!-- Sidenav Menu Heading (Core)-->
                <div class="sidenav-menu-heading">Core</div>
                <!-- Sidenav Accordion (Dashboard)-->
                <a class="nav-link {{ Request::is('beranda') ? 'active' : '' }}" href="/beranda">
                    <div class="nav-link-icon"><i data-feather="activity"></i></div>
                    Beranda
                </a>
                <!-- Sidenav Heading (Custom)-->
                <div class="sidenav-menu-heading">Kelola Halaman Depan</div>
                <!-- Sidenav Accordion (Pages)-->
                <a class="nav-link {{ Request::is('banner-livestream-edit') ? 'active' : '' }}"
                    href="/banner-livestream-edit">
                    <div class="nav-link-icon"><i data-feather="grid"></i></div>
                    Banner Depan & Live Stream
                </a>

                <a class="nav-link {{ Request::is('panel-about') ? 'active' : '' }}" href="/panel-about">
                    <div class="nav-link-icon"><i data-feather="grid"></i></div>
                    Panel About
                </a>
                <!-- Sidenav Accordion (Applications)-->
                <a class="nav-link {{ Request::is('visi-misi') ? 'active' : '' }}" href="/visi-misi">
                    <div class="nav-link-icon"><i data-feather="globe"></i></div>
                    Visi & Misi
                </a>
                <!-- Sidenav Accordion (Flows)-->
                <a class="nav-link {{ Request::is('tim-penggembala') ? 'active' : '' }}" href="/tim-penggembala">
                    <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                    Tim Penggembala
                </a>

                <a class="nav-link {{ Request::is('kelola-persembahan') ? 'active' : '' }}" href="/kelola-persembahan">
                    <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                    Persembahan
                </a>

                <a class="nav-link {{ Request::is('our-generation') ? 'active' : '' }}" href="/our-generation">
                    <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                    Our Generation
                </a>

                <a class="nav-link {{ Request::is('info-kontak') ? 'active' : '' }}" href="/info-kontak">
                    <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                    Sosmed & Kontak
                </a>

                <a class="nav-link {{ Request::is('cabang-gereja') ? 'active' : '' }}" href="/cabang-gereja">
                    <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                    Cabang Gereja
                </a>
                <!-- Sidenav Heading (Addons)-->
                <div class="sidenav-menu-heading">Plugins</div>
                <!-- Sidenav Link (Charts)-->
                <a class="nav-link" href="charts.html">
                    <div class="nav-link-icon"><i data-feather="bar-chart"></i></div>
                    Charts
                </a>
                <!-- Sidenav Link (Tables)-->
                <a class="nav-link" href="tables.html">
                    <div class="nav-link-icon"><i data-feather="filter"></i></div>
                    Tables
                </a>
            </div>
        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
            <div class="sidenav-footer-content">
                <div class="sidenav-footer-subtitle">Login sebagai:</div>
                <div class="sidenav-footer-title">{{ Auth::user()->name }}</div>
            </div>
        </div>
        <div class="p-3">
            <a href="/logout" class="btn btn-sm btn-danger w-100" type="button">Logout</a>
        </div>
    </nav>
</div>
