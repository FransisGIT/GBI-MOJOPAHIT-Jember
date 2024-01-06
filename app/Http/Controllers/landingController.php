<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use App\Models\panel_about;
use App\Models\persembahan;
use App\Models\tim_penggembala;
use App\Models\visi_misi;
use Illuminate\Http\Request;

class landingController extends Controller
{
    public function halamanHome()
    {
        $dataBannerLive = banner_depan_live::all()->first();
        $dataPanelAbout = panel_about::all()->first();
        $dataVisiMisi = visi_misi::all()->first();
        $dataTimPenggembala = tim_penggembala::all();
        return view('landing.home', compact('dataBannerLive', 'dataPanelAbout', 'dataVisiMisi', 'dataTimPenggembala'));
    }

    public function halamanPersembahan()
    {
        $dataPersembahan = persembahan::all()->first();
        return view('landing.persembahan', compact('dataPersembahan'));
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
