<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Ucenik extends Model  implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;
    
    public function predmet()
    {
       return $this->belongsToMany('App\Predmet')->withPivot(['ocena']);
    }
    public function usmerenjeUcenik()
    {
       return $this->belongsTo('App\Usmerenje');
    }
    public function profesor()
    {
       return $this->belongsToMany('App\Profesor');
    }
}
