<!doctype html>
<html lang="en">

<head>
    @include('layout.meta')
    @include('links.style-landing')
    <title>{{ $dataWebsite->title }}</title>
</head>

<body>

    <main>
        @include('layout.navbar-landing')

        @yield('content')
    </main>


    <footer class="site-footer">
        @include('layout.footer-landing')
    </footer>


    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var splide = new Splide('#splide', {
                type: 'loop',
                perPage: 1,
                focus: 'center',
            });

            splide.mount();
        });
    </script>
    @include('links.script-landing')
</body>

</html>
