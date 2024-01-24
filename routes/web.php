<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\bannerLivestreamController;
use App\Http\Controllers\berandaController;
use App\Http\Controllers\cabanggerejaController;
use App\Http\Controllers\kelolauserController;
use App\Http\Controllers\landingController;
use App\Http\Controllers\ourgenerationController;
use App\Http\Controllers\panelaboutController;
use App\Http\Controllers\persembahanController;
use App\Http\Controllers\renunganController;
use App\Http\Controllers\sosmedkontakController;
use App\Http\Controllers\timPenggembala;
use App\Http\Controllers\visimisiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RodhuteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [landingController::class, 'halamanHome'])->name('halamanHome');

Route::get('/persembahan', [landingController::class, 'halamanPersembahan'])->name('halamanPersembahan');

Route::get('/renungan', [landingController::class, 'halamanRenungan'])->name('halamanRenungan');

Route::get('/kontak', [landingController::class, 'halamanKontak'])->name('halamanKontak');

Route::get('cabang/{id}', [landingController::class, 'halamanCabangGereja'])->name('halamanCabangGereja');

Route::middleware(['guest'])->group(function () {
    Route::controller(authController::class)->group(function () {
        Route::get('/admin', 'halamanLogin')->name('halamanLogin');
        Route::post('/login',  'fungsiLogin')->name('fungsiLogin');
    });
});

Route::get('/logout', [authController::class, 'fungsiLogout'])->name('fungsiLogout');

Route::middleware(['auth'])->group(function () {

    Route::controller(bannerLivestreamController::class)->group(function () {
        Route::get('/banner-livestream-edit', 'index');
        Route::post('/banner-livestream-simpan/{id}', 'simpanBannerLive');
    });

    Route::controller(berandaController::class)->group(function () {
        Route::get('/beranda', 'index');
    });

    Route::resource('panel-about', panelaboutController::class);

    Route::resource('visi-misi', visimisiController::class);

    Route::resource('tim-penggembala', timPenggembala::class);

    Route::resource('kelola-persembahan', persembahanController::class);

    Route::resource('our-generation', ourgenerationController::class);

    Route::resource('info-kontak', sosmedkontakController::class);

    Route::resource('cabang-gereja', cabanggerejaController::class);

    Route::resource('kelola-renungan', renunganController::class);

    Route::middleware(['superadmin'])->group(function () {
        Route::resource('kelola-user', kelolauserController::class);
    });
});
