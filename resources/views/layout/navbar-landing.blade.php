    <header>
        <nav class="navbar navbar-expand-lg pl-3 pr-3">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="{{ asset('assets/festive/images/logo/logo_gbijember.png') }}" alt="gbi-logo" srcset=""
                        width="65" height="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li class="nav-item">
                            <a class="nav-link  {{ Request::is('/') ? 'active' : '' }}" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="live">Live</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('persembahan') ? 'active' : '' }}"
                                href="/persembahan">Persembahan</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#section_4">Workshop</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('renungan') ? 'active' : '' }}"
                                href="/renungan">Renungan</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/kontak">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
