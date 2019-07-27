<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Predmet;

class PredmetController extends Controller
{
	//uzimanje svih predmeta
    public function all(Request $request)
    {
    	$predmeti = Predmet::all();

    	return $predmeti;
    }
}
