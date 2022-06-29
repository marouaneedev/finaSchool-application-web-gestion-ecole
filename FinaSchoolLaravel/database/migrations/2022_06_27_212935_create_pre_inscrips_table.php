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
        Schema::create('pre_inscrips', function (Blueprint $table) {
            $table->id();
            $table->string('Email');
            $table->string('First_Name');
            $table->string('Last_Name');
            $table->string('City');
            $table->string('Phone_Number');
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
        Schema::dropIfExists('pre_inscrips');
    }
};
