<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePredmetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('predmet', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('oznaka',30);
            $table->string('naziv',30);
            $table->bigInteger('broj_mesta');
            $table->bigInteger('espb');
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
        Schema::dropIfExists('predmets');
    }
}
