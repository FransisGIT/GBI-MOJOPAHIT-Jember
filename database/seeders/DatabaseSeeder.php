<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'username' => 'admin',
            'name' => 'Fransisco',
            'password' => bcrypt('admin'),
            'remember_token' => Str::random(60),
        ]);

        \App\Models\banner_depan_live::create([
            'banner' => 'banner.png',
            'link_live' => 'https://www.youtube.com/embed/AqeThhvK6IY?si=z-RhdZ_QRe32SOzU',
        ]);

        \App\Models\panel_about::create([
            'link_video' => 'https://www.youtube.com/embed/AqeThhvK6IY?si=z-RhdZ_QRe32SOzU',
            'judul' => 'its our home',
            'isi_konten' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo debitis hic perspiciatis blanditiis quia modi reprehenderit magni, molestias vitae ratione.',
        ]);

        \App\Models\visi_misi::create([
            'visi' => 'Menjadi Gereja yang Memenuhi Perintah Agung dan Amanat Agung untuk Pergi dan Menjadikan Semua Bangsa Menjadi Murid Kristus',
            'misi' => 'Perjumpaan dengan Allah, Mengalami Kemerdekaan, Menemukan Tujuan Allah, & Mengemban Amanat Agung'
        ]);

        \App\Models\persembahan::create([
            'gambar' => 'default.png',
        ]);
    }
}
