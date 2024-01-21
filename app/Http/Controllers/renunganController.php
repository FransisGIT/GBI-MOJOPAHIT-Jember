<?php

namespace App\Http\Controllers;

use App\Models\renungan;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\File;

class renunganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('searchQuery');

        $query = renungan::query();
        if ($searchQuery) {
            $query->where('judul_renungan', 'like', '%' . $searchQuery . '%')
                ->orWhere('renungan_ke', 'like', '%' . $searchQuery . '%')
                ->orWhere('dibuat', 'like', '%' . $searchQuery . '%');
        }

        // Ambil data terbaru dan terapkan paginasi
        $data = $query->latest()->paginate(9);

        // Ambil total jumlah renungan (jika tidak melakukan pencarian)
        $countRenungan = $searchQuery ? $data->total() : renungan::count();

        return view('admin.renungan', compact('data', 'countRenungan', 'searchQuery'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.renungan-tambah');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = renungan::create([
            'judul_renungan' => $request->judul_renungan,
            'renungan_ke' => $request->renungan_ke,
            'isi_renungan' => $request->isi_renungan,
            'dibuat' => $request->dibuat
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

        return redirect('/kelola-renungan')->withToastSuccess('Data berhasil disimpan!');
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
        $data = renungan::find($id);
        return view('admin.renungan-edit', compact('data'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataUpdate = renungan::find($id);
        $dataUpdate->update([
            'judul_renungan' => $request->judul_renungan,
            'renungan_ke' => $request->renungan_ke,
            'isi_renungan' => $request->isi_renungan,
            'dibuat' => $request->dibuat,
            'diupdate' => now()->setTimezone('Asia/Jakarta')
        ]);

        if ($request->hasFile('gambar') && is_array($request->file('gambar'))) {
            foreach ($request->file('gambar') as $file) {
                if ($file->isValid()) {

                    if ($dataUpdate->gambar !== 'default.png') {
                        $oldImagePath = public_path('storage/' . $dataUpdate->gambar);
                        if (File::exists($oldImagePath)) {
                            File::delete($oldImagePath);
                        }
                    }

                    $hashedFileName = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                    $file->move(public_path('storage/'), $hashedFileName);

                    $dataUpdate->gambar = $hashedFileName;
                    $dataUpdate->save();
                }
            }
        } else {
            $dataUpdate->save();
        }

        return redirect('/kelola-renungan')->withToastSuccess('Data berhasil disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = renungan::find($id);

        if ($data->gambar !== 'default.png') {
            $oldImagePath = public_path('storage/' . $data->gambar);
            File::delete($oldImagePath);
        }
        $data->delete();

        return back()->withToastSuccess('Data berhasil dihapus!');
    }
}
