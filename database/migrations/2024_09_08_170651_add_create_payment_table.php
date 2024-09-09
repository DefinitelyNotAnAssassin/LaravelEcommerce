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
        Schema::create('PaymentLog', function (Blueprint $table) {
            $table->id();
            $table->string('stripe_payment_id')->nullable();
            $table->string('stripe_customer_id')->nullable();
            $table->string('stripe_payment_intent_id')->nullable();
            $table->string('stripe_receipt_url')->nullable();
            $table->string('stripe_status')->nullable();
            $table->string('stripe_payment_method')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('PaymentLog', function (Blueprint $table) {
            //
        });
    }
};
