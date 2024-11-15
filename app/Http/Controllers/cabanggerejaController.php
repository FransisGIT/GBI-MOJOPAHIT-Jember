<?php

namespace App\Http\Controllers;

use App\Models\cabang_gereja;
use App\Models\setting_website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class cabanggerejaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = cabang_gereja::all();
        $dataWebsite = setting_website::firstOrFail();
        return view('admin.cabang-gereja', compact('data', 'dataWebsite'));
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
        cabang_gereja::create([
            'cabang' => $request->cabang,
            'link_cabang' => $request->link_cabang,
        ]);
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
        $dataUpdate = cabang_gereja::find($id);
        $dataUpdate->update($request->all());
        return back()->withToastSuccess('Data berhasil disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = cabang_gereja::find($id);
        $data->delete();

        return back()->withToastSuccess('Data berhasil dihapus!');
    }
}
