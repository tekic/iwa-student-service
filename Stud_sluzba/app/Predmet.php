<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{


    public function ucenik()
    {
        $this->belongsToMany('App\Ucenik');
    }

    public function profesor()
    {
        $this->belongsTo('App\Profesor');
    }
    public function usmerenje()
    {
        $this->belongsTo('App\Usmerenje');
    }
}
