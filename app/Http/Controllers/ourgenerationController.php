<?php

namespace App\Http\Controllers;

use App\Models\our_generation;
use App\Models\setting_website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ourgenerationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = our_generation::all();
        $dataWebsite = setting_website::firstOrFail();
        return view('admin.our-generation', compact('data', 'dataWebsite'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = our_generation::create([
            'nama_generation' => $request->nama_generation,
            'instagram' => $request->instagram,
            'youtube' => $request->youtube
        ]);

        if ($request->hasFile('gambar') && is_array($request->file('gambar'))) {
            foreach ($request->file('gambar') as $file) {
                if ($file->isValid()) {

                    // Menghasilkan nama file yang diacak (hash)
                    $hashedFileName = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                    // Memindahkan gambar baru ke folder public dengan nama hash
                    $file->move(public_path('storage/'), $hashedFileName);

                    // Menyimpan nama file hash ke database
                    $data->gambar = $hashedFileName;
                    $data->save();
                }
            }
        } else {
            $data->gambar = 'default.png';
            $data->save();
        }

        return back()->withToastSuccess('Data berhasil disimpan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = our_generation::find($id);
        $data->update([
            'nama_generation' => $request->nama_generation,
            'instagram' => $request->instagram,
            'youtube' => $request->youtube
        ]);

        if ($request->hasFile('gambar') && is_array($request->file('gambar'))) {
            foreach ($request->file('gambar') as $file) {
                if ($file->isValid()) {

                    if ($data->gambar !== 'default.png') {
                        $oldImagePath = public_path('storage/' . $data->gambar);
                        if (File::exists($oldImagePath)) {
                            File::delete($oldImagePath);
                        }
                    }

                    $hashedFileName = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                    $file->move(public_path('storage/'), $hashedFileName);

                    $data->gambar = $hashedFileName;
                    $data->save();
                }
            }
        } else {
            $data->save();
        }

        return back()->withToastSuccess('Data berhasil disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = our_generation::find($id);

        if ($data->gambar !== 'default.png') {
            $oldImagePath = public_path('storage/' . $data->gambar);
            File::delete($oldImagePath);
        }
        $data->delete();

        return back()->withToastSuccess('Data berhasil dihapus!');
    }
}
