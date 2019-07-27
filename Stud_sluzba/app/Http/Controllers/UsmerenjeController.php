<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Usmerenje;
class UsmerenjeController extends Controller
{
	//preuzimanje svih usmerenja
    public function allUsmerenje(Request $request)
    {
    	$usmerenje = Usmerenje::all();

    	return $usmerenje; 
    }
}
