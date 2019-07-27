<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;

    public function ucenik()
    {
       return $this->belongsToMany('App\Ucenik');
    }
    public function predmet()
    {
       return $this->belongsTo('App\Predmet');
    }
    public function usmerenje()
    {
       return $this->belongsTo('App\Usmerenje','usmerenje_id');
    }
}
