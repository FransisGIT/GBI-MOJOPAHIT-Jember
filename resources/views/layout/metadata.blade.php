<!-- ========== Meta Tags ========== -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- color of address bar in mobile browser -->
<meta name="theme-color" content="#ffffff">
<meta name="color-scheme" content="light">
<!-- Primary Meta Tags -->
<meta name="keywords" content="{{ $dataWebsite->metadata }}" />
<meta name="author" content="{{ $dataWebsite->author }}" />
<meta name="title" content="{{ $dataWebsite->title }}" />
<meta name="description" content="{{ $dataWebsite->deskripsi }}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ $dataWebsite->url }}" />
<meta property="og:author" content="{{ $dataWebsite->author }}" />
<meta property="og:title" content="{{ $dataWebsite->title }}" />
<meta property="og:description" content="{{ $dataWebsite->deskripsi }}" />
<meta property="og:image" content="{{ $dataWebsite->gambar }}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="{{ $dataWebsite->url }}" />
<meta property="twitter:title" content="{{ $dataWebsite->title }}" />
<meta property="twitter:description" content="{{ $dataWebsite->deskripsi }}" />
<meta property="twitter:image" content="{{ $dataWebsite->gambar }}" />

<!-- ======== Page title ============ -->
<!--<< Favcion >>-->
<link rel="shortcut icon" href="{{ asset('/storage/images/'. $dataWebsite->gambar) }}">
