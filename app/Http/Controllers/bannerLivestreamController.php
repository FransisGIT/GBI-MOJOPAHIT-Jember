<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class bannerLivestreamController extends Controller
{
    function index()
    {
        return view('admin.banner-livestream');
    }
}