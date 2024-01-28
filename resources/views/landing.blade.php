<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    @include('links.style-landing')

    <title>@yield('title')</title>
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
