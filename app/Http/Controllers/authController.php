<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use toast;


class authController extends Controller
{
    public function halamanLogin()
    {
        return view('auth.halamanLogin');
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
        }

        return back()->withToastError([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
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
