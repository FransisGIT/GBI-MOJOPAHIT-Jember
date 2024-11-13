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
        Schema::create('setting_websites', function (Blueprint $table) {
            $table->id();
            $table->string('gambar')->nullable();
            $table->longText('url')->nullable();
            $table->longText('keyword')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->longText('title')->nullable();
            $table->longText('author')->nullable();
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('setting_websites');
    }
};
