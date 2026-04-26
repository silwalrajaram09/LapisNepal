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
        Schema::create('timetable_entries', function (Blueprint $table) {
            $table->id();
            $table->string('programme');
            $table->string('level');
            $table->string('days');
            $table->string('time');
            $table->string('batch_label');
            $table->string('instructor');
            $table->enum('status', ['open', 'filling', 'full'])->default('open');
            $table->boolean('is_visible')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timetable_entries');
    }
};
