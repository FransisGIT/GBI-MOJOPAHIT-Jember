<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class kelolauserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::all();
        return view('superadmin.kelola-user', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('superadmin.tambah-user');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        user::create([
            'username'  => $request->username,
            'password' => bcrypt($request->password),
            'role' => $request->role,
            'remember_token' => Str::random(60)
        ]);
        return redirect('/kelola-user')->withToastSuccess('Data telah disimpan!');
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
        $data = user::find($id);
        return view('superadmin.edit-user', compact('data'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $dataUpdate = user::find($id);

        $dataUpdate->update([
            'username' => $request->username,
            'password' => bcrypt($request->password),
            'role' => $request->role,
        ]);

        return redirect('/kelola-user')->withToastSuccess('Data telah disimpan!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = User::find($id);
        $data->delete();
        return back()->withToastSuccess('Data berhasil dihapus!');
    }
}
