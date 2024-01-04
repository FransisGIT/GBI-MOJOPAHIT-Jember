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
    }
}
