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
        Schema::create('etudiants', function (Blueprint $table) {
            $table->id();
            $table->string("First_name",120);
            $table->string("Last_name",80);
            $table->string("email",80);
            $table->integer("age")->unsigned();
            $table->string("phone_number",120);
            $table->enum("gender",["male","female"]);
            $table->string("adresse",40);
            $table->string("annee_scolaire");
            $table->float("montant_total");
            $table->enum("type_paiement",["mensuelle","anuel","session","aucune"]);
            $table->enum("paiement_statut",["payé","en_cours","non_payé"]);
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
        Schema::dropIfExists('etudiants');
    }
};
