<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cabang_gerejas', function (Blueprint $table) {
            $table->id();
            $table->string('gambar')->nullable();
            $table->string('cabang')->nullable();
            $table->string('tentang_cabang')->nullable();
            $table->string('google_maps')->nullable();
            $table->string('instagram')->nullable();
            $table->string('youtube')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cabang_gerejas');
    }
};
