<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use App\Models\panel_about;
use App\Models\visi_misi;
use Illuminate\Http\Request;

class landingController extends Controller
{
    public function halamanHome()
    {
        $dataBannerLive = banner_depan_live::all()->first();
        $dataPanelAbout = panel_about::all()->first();
        $dataVisiMisi = visi_misi::all()->first();
        return view('landing.home', compact('dataBannerLive', 'dataPanelAbout', 'dataVisiMisi'));
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
