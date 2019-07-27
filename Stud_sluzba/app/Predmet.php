<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{
    /*
      Koristi se pivot jer je to dodata jos jedna kolona u vezi "VISE na VISE" pa da bi se
      moglo pristupiti toj koloni u zajednickoj tabeli 
    */
    public function ucenik()
    {
       return $this->belongsToMany('App\Ucenik')->withPivot(['ocena']);
    }

    public function profesor()
    {
       return $this->hasMany('App\Profesor');
    }
    public function usmerenje()
    {
       return $this->belongsTo('App\Usmerenje');
    }
}
