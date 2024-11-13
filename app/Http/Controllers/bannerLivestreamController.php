<?php

namespace App\Http\Controllers;

use App\Models\banner_depan_live;
use App\Models\setting_website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class bannerLivestreamController extends Controller
{
    function index()
    {
        $data = banner_depan_live::all()->first();
        $dataWebsite = setting_website::firstOrFail();
        return view('admin.banner-livestream', compact('dataWebsite', 'data'));
    }

    function simpanBannerLive(Request $request, $id)
    {
        $data = banner_depan_live::find($id)->first();
        $data->update($request->except('banner'));

        if ($request->hasFile('banner') && is_array($request->file('banner'))) {
            foreach ($request->file('banner') as $file) {
                if ($file->isValid()) {

                    $oldImagePath = public_path('storage/' . $data->banner);
                    if (File::exists($oldImagePath)) {
                        File::delete($oldImagePath);
                    }

                    // Menghasilkan nama file yang diacak (hash)
                    $hashedFileName = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                    // Memindahkan banner baru ke folder public dengan nama hash
                    $file->move(public_path('storage/'), $hashedFileName);

                    // Menyimpan nama file hash ke database
                    $data->banner = $hashedFileName;
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
