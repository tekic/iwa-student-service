<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Ucenik extends Model  implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;

    public function predmet()
    {
        $this->belongsToMany('App\Predmet');
    }
    public function usmerenje()
    {
        $this->belongsTo('App\Usmerenje');
    }
    public function profesor()
    {
        $this->belongsToMany('App\Profesor');
    }
}
