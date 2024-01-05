<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use Illuminate\Http\Request;

class landingController extends Controller
{
    public function halamanHome()
    {
        $data = banner_depan_live::all()->first();
        return view('landing.home', compact('data'));
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
