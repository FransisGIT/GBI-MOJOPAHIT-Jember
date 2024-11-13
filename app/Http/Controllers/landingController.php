<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use App\Models\cabang_gereja;
use App\Models\our_generation;
use App\Models\panel_about;
use App\Models\persembahan;
use App\Models\renungan;
use App\Models\setting_website;
use App\Models\sosmed_kontak;
use App\Models\tim_penggembala;
use App\Models\visi_misi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Parsedown;
use ParsedownExtra;

class landingController extends Controller
{
    protected $dataSosmedKontak;
    protected $dataWebsite;

    public function __construct()
    {

        $this->dataSosmedKontak = sosmed_kontak::all()->first();
        $this->dataWebsite = setting_website::firstOrFail();
        View::share('dataSosmedKontak', $this->dataSosmedKontak);
        View::share('dataWebsite', $this->dataWebsite);
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

    public function halamanRenungan(Request $request)
    {
        $searchQuery = $request->input('searchQuery');

        $query = renungan::query();
        if ($searchQuery) {
            $query->where('judul_renungan', 'like', '%' . $searchQuery . '%')
                ->orWhere('renungan_ke', 'like', '%' . $searchQuery . '%')
                ->orWhere('dibuat', 'like', '%' . $searchQuery . '%');
        }

        $dataRenungan =  $query->latest()->paginate(9);
        return view('landing.renungan', compact('dataRenungan', 'searchQuery'));
    }

    public function daftarRenungan(Request $request, $id)
    {
        $data = renungan::find($id);
        $parsedown = new Parsedown();

        $htmlContent = $parsedown->text($data->isi_renungan);

        $htmlContent = str_replace('<p>', '<p style="color: black;font-weight: 400;">', $htmlContent);
        $htmlContent = str_replace('<h1>', '<h1 style="color: black;">', $htmlContent);
        $htmlContent = str_replace('<h2>', '<h2 style="color: black;">', $htmlContent);
        $htmlContent = str_replace('<h3>', '<h3 style="color: black;">', $htmlContent);
        $htmlContent = str_replace('<h4>', '<h4 style="color: black;">', $htmlContent);
        $htmlContent = str_replace('<h5>', '<h5 style="color: black;">', $htmlContent);
        $htmlContent = str_replace('<h6>', '<h6 style="color: black;font-weight: semibold;">', $htmlContent);

        return view('landing.daftar-renungan', compact('data', 'htmlContent'));
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
