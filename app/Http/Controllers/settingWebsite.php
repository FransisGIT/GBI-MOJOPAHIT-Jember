<?php

namespace App\Http\Controllers;

use App\Models\setting_website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class settingWebsite extends Controller
{
    /**
     * Display a listing of the resource
     */
    public function index()
    {
        $dataWebsite = setting_website::firstOrFail();
        return view('superadmin.setting-website', compact('dataWebsite'));
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
    public function store(Request $request) {}

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
        $data = setting_website::findOrFail($id);
        $data->update($request->except('gambar'));

        if ($request->hasFile('gambar') && is_array($request->file('gambar'))) {
            foreach ($request->file('gambar') as $file) {
                if ($file->isValid()) {

                    $oldImagePath = public_path('storage/' . $data->gambar);
                    if (File::exists($oldImagePath)) {
                        File::delete($oldImagePath);
                    }
                    $hashedFileName = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('storage/'), $hashedFileName);
                    $data->gambar = $hashedFileName;
                    $data->save();
                }
            }
        }

        return back()->withToastSuccess('Data berhasil disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
