<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfesorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profesors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ime',30);
            $table->string('prezime',30);
            $table->char('jmbg',13)->unique();
            $table->string('korisnicko_ime',50)->unique();
            $table->string('korisnicka_lozinka',50);
            $table->bigInteger('usmerenje_id');
            $table->bigInteger('predmet_id')->default(0);
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
        Schema::dropIfExists('profesors');
    }
}
