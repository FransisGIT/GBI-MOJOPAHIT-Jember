<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class berandaController extends Controller
{
    function index()
    {
        return view('admin.beranda');
    }
}