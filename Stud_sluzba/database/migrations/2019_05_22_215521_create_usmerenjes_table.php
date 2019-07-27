<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsmerenjesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usmerenjes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('sifra',30)->unique();
            $table->string('naziv',30);
            $table->string('oblast',30);
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
        Schema::dropIfExists('usmerenjes');
    }
}
