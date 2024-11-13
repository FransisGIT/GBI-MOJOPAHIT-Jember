<?php

namespace App\Http\Controllers;

use App\Models\setting_website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use toast;


class authController extends Controller
{
    public function halamanLogin()
    {
        $data = setting_website::firstOrFail();
        return view('auth.halamanLogin', compact('data'));
    }

    public function fungsiLogin(Request $request)
    {
        $validasi = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ], [
            'username.required' => 'Username harus diisi',
            'password.required' => 'Password harus diisi'
        ]);

        if (Auth::attempt($validasi)) {
            $request->session()->regenerate();
            return redirect('/beranda')->withToastSuccess('Selamat datang di beranda!');;
        } else {
            return back()->withToastError('Username atau Kata sandi salah');
        }
    }

    function fungsiLogout(Request $request)
    {
        session_abort();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin')->withToastError('Anda telah logout!');;
    }
}
