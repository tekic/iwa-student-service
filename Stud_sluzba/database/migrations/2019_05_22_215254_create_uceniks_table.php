<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUceniksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uceniks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ime',30);
            $table->string('prezime',30);
            $table->string('broj_indeksa',30)->unique();
            $table->string('korisnicka_lozinka',50);
            $table->float('prosecna_ocena',2,1);
            $table->integer('usmerenje_id');
            $table->string('uloga');
            $table->rememberToken();
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
        Schema::dropIfExists('uceniks');
    }
}
