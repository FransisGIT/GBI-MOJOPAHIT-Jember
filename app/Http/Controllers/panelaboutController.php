<?php

namespace App\Http\Controllers;

use App\Models\panel_about;
use Illuminate\Http\Request;

class panelaboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = panel_about::all()->first();
        return view('admin.panel-about', compact('data'));
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
        //
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
        $dataUpdate = panel_about::find($id);
        $dataUpdate->update([
            'link_video' => htmlspecialchars($request->link_video),
            'judul' => htmlspecialchars($request->judul),
            'isi_konten' => htmlspecialchars($request->isi_konten)
        ]);

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
