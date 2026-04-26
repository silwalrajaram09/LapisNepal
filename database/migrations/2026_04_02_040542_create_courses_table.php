<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique(); // url friendly version of title
            $table->enum('category', ['language', 'visa', 'internship']);
            $table->text('description');
            $table->json('chips')->nullable();      // badge tags jlpt 
            $table->json('modules')->nullable();   // [{title, description}]
            $table->json('details')->nullable();   // [{label, value}] duration, level, certification  etc.
            $table->boolean('is_published')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
