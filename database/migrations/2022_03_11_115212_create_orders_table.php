<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('delivery_id', 14)->unique();
            $table->integer('user_id');
            $table->string('user_name');
            $table->string('user_phone_number');
            $table->text('user_address');
            $table->integer('total_payment');
            $table->enum('status', ['diproses', 'dikirim', 'diterima'])->default('diproses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
