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
        Schema::create('salaries', function (Blueprint $table) {
            $table->id();
            $table->string("First_name",15);
            $table->string("Last_name",15);
            $table->string("email",40);
            $table->integer("age")->unsigned();
            $table->string("phone_number",120);
            $table->string("annee",20);
            $table->enum("gender",["male","Female"]);
            $table->enum("type_salarie",["salarie","formateur","autres"]);
            $table->string("adresse",80);
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
        Schema::dropIfExists('salaries');
    }
};
