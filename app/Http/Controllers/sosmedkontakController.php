<?php

namespace App\Http\Controllers;

use App\Models\sosmed_kontak;
use Illuminate\Http\Request;

class sosmedkontakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = sosmed_kontak::all()->first();
        return view('admin.sosmed-kontak', compact('data'));
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
        $dataUpdate = sosmed_kontak::find($id);
        $dataUpdate->update([
            'instagram' => htmlspecialchars($request->instagram),
            'youtube' => htmlspecialchars($request->youtube),
            'email' => htmlspecialchars($request->email),
            'facebook' => htmlspecialchars($request->facebook),
            'tiktok' => htmlspecialchars($request->tiktok),
            'telepon' => htmlspecialchars($request->telepon),
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
