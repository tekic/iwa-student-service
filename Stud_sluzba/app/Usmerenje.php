<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usmerenje extends Model
{
    public function ucenik()
    {
        $this->hasMany('App\Ucenik');
    }
    public function predmet()
    {
        $this->hasMany('App\Predmet');
    }
    public function profesor()
    {
        $this->belongsToMany('App\Profesor');
    }
}
