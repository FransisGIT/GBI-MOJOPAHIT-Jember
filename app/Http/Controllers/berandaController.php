<?php

namespace App\Http\Controllers;

use App\Models\cabang_gereja;
use App\Models\renungan;
use App\Models\setting_website;
use App\Models\User;
use Illuminate\Http\Request;

class berandaController extends Controller
{
    function index()
    {
        $countRenungan = renungan::count();
        $countCabangGereja = cabang_gereja::count();
        $countUser = User::count();
        $dataWebsite = setting_website::firstOrFail();
        return view('admin.beranda', compact('countRenungan', 'countCabangGereja', 'countUser', 'dataWebsite'));
    }
}
