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
        Schema::table('transaction', function (Blueprint $table) {
            // drop payment_id 
            $table->dropColumn('payment_id');
            $table->foreignId('payment_id')->constrained('payment')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transaction', function (Blueprint $table) {
            //
        });
    }
};
