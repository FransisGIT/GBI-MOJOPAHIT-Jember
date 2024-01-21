<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use App\Models\cabang_gereja;
use App\Models\our_generation;
use App\Models\panel_about;
use App\Models\persembahan;
use App\Models\renungan;
use App\Models\sosmed_kontak;
use App\Models\tim_penggembala;
use App\Models\visi_misi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Parsedown;

class landingController extends Controller
{
    protected $dataSosmedKontak;

    public function __construct()
    {

        $this->dataSosmedKontak = sosmed_kontak::all()->first();
        View::share('dataSosmedKontak', $this->dataSosmedKontak);
    }
    public function halamanHome()
    {
        $dataBannerLive = banner_depan_live::all()->first();
        $dataPanelAbout = panel_about::all()->first();
        $dataVisiMisi = visi_misi::all()->first();
        $dataTimPenggembala = tim_penggembala::all();
        $dataOurGeneration = our_generation::all();
        $dataCabangGereja = cabang_gereja::all();

        $parsedown = new Parsedown();

        return view('landing.home', compact('dataBannerLive', 'dataPanelAbout', 'dataVisiMisi', 'dataTimPenggembala', 'dataOurGeneration', 'dataCabangGereja', 'parsedown'));
    }

    public function halamanPersembahan()
    {
        $dataPersembahan = persembahan::all()->first();
        return view('landing.persembahan', compact('dataPersembahan'));
    }

    public function halamanRenungan()
    {
        $dataRenungan =  renungan::latest()->paginate(21);
        return view('landing.renungan', compact('dataRenungan'));
    }

    public function halamanCabangGereja(Request $request, $id)
    {
        $data = cabang_gereja::find($id);
        return view('landing.cabang-gereja', compact('data'));
    }

    public function halamanKontak()
    {
        return view('landing.kontak');
    }
}
