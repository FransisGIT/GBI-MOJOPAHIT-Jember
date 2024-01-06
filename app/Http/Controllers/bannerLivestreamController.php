<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class bannerLivestreamController extends Controller
{
    function index()
    {
        $data = banner_depan_live::all()->first();
        return view('admin.banner-livestream', compact('data'));
    }

    function simpanBannerLive(Request $request, $id)
    {
        $data = banner_depan_live::find($id)->first();
        $data->update($request->except('banner'));

        if ($request->hasFile('banner') && is_array($request->file('banner'))) {
            // Hanya melakukan operasi jika file banner diunggah dan merupakan array

            foreach ($request->file('banner') as $file) {
                if ($file->isValid()) {
                    // Memproses setiap file yang valid
                    $oldImagePath = public_path('storage/' . $data->banner);

                    if (File::exists($oldImagePath)) {
                        File::delete($oldImagePath);
                    }

                    // Memindahkan gambar baru ke folder public
                    $newImagePath = 'storage/' . $file->getClientOriginalName();
                    $file->move(public_path('storage/'), $newImagePath);

                    // Mengupdate nama gambar baru di database
                    $data->banner = $file->getClientOriginalName();
                    $data->save();
                }
            }
        }

        // Jika link_live diisi, update ke database
        if ($request->filled('link_live')) {
            $data->link_live = $request->link_live;
            $data->save();
        }

        return back()->withToastSuccess('Data berhasil disimpan!');
    }
}
