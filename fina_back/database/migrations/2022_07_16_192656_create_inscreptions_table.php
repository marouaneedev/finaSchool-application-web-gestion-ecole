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
        Schema::create('inscreptions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email');
            $table->string('firstName');
            $table->string('lastName');
            $table->string('city');
            $table->integer('phoneNumber');
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
        Schema::dropIfExists('inscreptions');
    }
};
