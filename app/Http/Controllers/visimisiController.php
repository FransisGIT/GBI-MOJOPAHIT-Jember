<?php

namespace App\Http\Controllers;

use App\Models\visi_misi;
use Illuminate\Http\Request;

class visimisiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = visi_misi::all()->first();
        return view('admin.visi-misi', compact('data'));
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
        $dataUpdate = visi_misi::find($id);
        $dataUpdate->update([
            'visi' => $request->visi,
            'misi' => $request->misi
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
