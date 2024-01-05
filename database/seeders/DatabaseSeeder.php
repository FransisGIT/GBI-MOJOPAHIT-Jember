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
            'banner' => 'admin',
            'link_live' => 'https://www.youtube.com/embed/AqeThhvK6IY?si=z-RhdZ_QRe32SOzU',
        ]);
    }
}