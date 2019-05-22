<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Ucenik extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request,[	'broj_indexa' => 'required',
            'korisnicka_lozinka' => 'required']);

        if(Auth::attempt(['broj_indexa' => $request['broj_indexa'],'korisnicka_lozinka' => $request['korisnicka_lozinka']]))
        {
            return http_response_code(200);
            //return redirect()->route('home');
        }else
        {
            return http_response_code(404);
            //return redirect()->back();
        }
    }

    public function registration(Request $request)
    {
        $this->validate($request,[
            'ime' => 'required|max:30',
            'prezime' => 'required|max:30',
            'broj_indeksa' => 'required|max:30',
            'korisnicka_lozinka' => 'required|min:8|max:50']);
        $ime=$request['ime'];
        $prezime=$request['prezime'];
        $broj_indeksa=$request['broj_indeksa'];
        $korisnicka_lozinka=$request['korisnicka_lozinka'];

        $user = new \App\Ucenik();
        $user->ime=$ime;
        $user->prezime=$prezime;
        $user->broj_indeksa =$broj_indeksa;
        $user->korisnicka_lozinka=bcrypt($korisnicka_lozinka);
        $user->prosecna_ocena=0;
        $user->save();

        //Auth::login($user);

        //return redirect()->route('home');
    }
}
