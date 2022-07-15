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
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullName');
            $table->string('gender');
            $table->date('dateOfBirthday');
            $table->string('cin');
            $table->text('address');
            $table->integer('phoneNumber');
            $table->string('email');
            $table->string('formation');
            $table->string('yearOfFormation');
            $table->integer('totatAmount');
            $table->integer('payrollAmount');
            $table->string('typePayment');
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
        Schema::dropIfExists('students');
    }
};
