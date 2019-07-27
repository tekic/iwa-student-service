<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usmerenje extends Model
{
    public function ucenikUsm()
    {
        return $this->hasMany('App\Ucenik');
    }
    public function predmet()
    {
       return  $this->hasMany('App\Predmet');
    }
    public function profesor()
    {
       return $this->hasMany('App\Profesor');
    }
}
