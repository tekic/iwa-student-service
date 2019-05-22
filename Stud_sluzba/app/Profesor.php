<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;

    public function ucenik()
    {
        $this->belongsToMany('App\Ucenik');
    }
    public function predmet()
    {
        $this->hasMany('App\Predmet');
    }
    public function usmerenje()
    {
        $this->belongsToMany('App\Usmerenje');
    }
}
