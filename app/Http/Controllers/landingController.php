<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class landingController extends Controller
{
    public function halamanHome()
    {
        return view('landing.home');
    }

    public function halamanPersembahan()
    {
        return view('landing.persembahan');
    }

    public function halamanRenungan()
    {
        return view('landing.renungan');
    }

    public function halamanKontak()
    {
        return view('landing.kontak');
    }
}
