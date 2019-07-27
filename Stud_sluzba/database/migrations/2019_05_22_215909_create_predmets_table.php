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
        Schema::create('predmets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('oznaka',30);
            $table->string('naziv',30)->unique();
            $table->bigInteger('broj_mesta');
            $table->bigInteger('espb');
            $table->integer('usmerenje_id');
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
