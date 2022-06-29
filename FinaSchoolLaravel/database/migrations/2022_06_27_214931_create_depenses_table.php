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
        Schema::create('depenses', function (Blueprint $table) {
            $table->id();
            $table->float('montant');
            $table->dateTime('date_creation');
            $table->dateTime('date_modification');
            $table->enum("type_paiement",["mois","heures","autres_charges"]);
            $table->enum("type_depense",["salaries","formateurs","autres_charges"]);
            $table->string('annee_scolaire');
            $table->string('description');
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
        Schema::dropIfExists('depenses');
    }
};
