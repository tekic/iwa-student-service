<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profesor;
use App\Ucenik;
use App\Usmerenje;
use App\Predmet;
use App\Predmet_ucenik;

class ProfesorController extends Controller
{
    public function login(Request $request)
    {
            $this->validate($request,['korisnicko_ime' => 'required',
                                'korisnicka_lozinka' => 'required']);
            $credentials = $request->only('korisnicko_ime', 'korisnicka_lozinka');
            //uzimamo profesora ciji se username poklapa
            $profesor = Profesor::where('korisnicko_ime','=',$request['korisnicko_ime'])->first();
            error_log($profesor);
            error_log('Korisnicka lozinka '. $request['korisnicka_lozinka']);
            if($profesor->korisnicka_lozinka === $request['korisnicka_lozinka'])
            {
                return $profesor;
            }else
            {
                return response('Greska',401);
            }
    }

    public function registration(Request $request)
    {
        $this->validate($request,[
            'ime' => 'required|max:30',
            'prezime' => 'required|max:30',
            'jmbg' => 'required|max:13',
            'korisnicko_ime' => 'required|max:30',
            'korisnicka_lozinka' => 'required|min:8|max:50',
        	'predmet_id' => 'required',
        	'usmerenje_id' => 'required']);
        $ime=$request['ime'];
        $prezime=$request['prezime'];
        $jmbg=$request['jmbg'];
        $korisnicko_ime = $request['korisnicko_ime'];
        $korisnicka_lozinka=$request['korisnicka_lozinka'];
        $usmerenje = $request['usmerenje_id'];
        $predmet = $request['predmet_id'];

        $usmerenjeIzabrano = Usmerenje::find($request['usmerenje_id']);
            
        $izabranPredmet = Predmet::find($request['predmet_id']);
           
        $allProfesor = Profesor::all();
        $postoji=false;
        if($allProfesor !== null)
        {
            foreach($allProfesor as $prof)
            {
                if($prof->jmbg === $jmbg)
                {
                    $postoji=true;
                    break;
                }
            }
        }
        if(!$postoji)
        {
            $profesor = new Profesor();

            $profesor->ime=$ime;
            $profesor->prezime=$prezime;
            $profesor->jmbg = $jmbg;
            $profesor->korisnicko_ime = $korisnicko_ime;
            $profesor->korisnicka_lozinka=$korisnicka_lozinka;
            $profesor->uloga = 'profesor';
            
            //omogucava povezivanje tabela na osnovu definisanih funkcija u modelu
            $usmerenjeIzabrano->profesor()->save($profesor);
            
            $izabranPredmet->profesor()->save($profesor);
            
            
        }else
        {
            return response('Postoji vec u bazi',406);
        }
        

    }

    //funckija koja omogucava promenu lozinke
    public function changePass(Request $request)
    {
        $this->validate($request,['oldPassword' => 'required',
                                  'newPassword' => 'required']);
        $profesor = Profesor::find($request['id']);

        error_log($profesor);
        error_log('Stari password ' . $request['oldPassword']);
        error_log('Novi password' . $request['newPassword']);

        if($profesor['korisnicka_lozinka'] === $request['oldPassword'])
        {
            $profesor['korisnicka_lozinka'] = $request['newPassword'];
            $profesor->update();
        }else
        {
            return response('Greska u promeni password-a',402);
        }
    }

    //funkcija koja omogucava promeni nekih podataka korisnika
    public function changeInfo(Request $request)
    {
        $this->validate($request,['ime' => 'required',
                                  'prezime' => 'required',
                                  'korisnicko_ime' => 'required']);

        $profesor = Profesor::find($request['id']);

        $profesor->ime = $request['ime'];
        $profesor->prezime = $request['prezime'];
        $profesor->koriscnicko_ime = $request['korisnicko_ime'];

        $profesor->update();
    }

    //sluzi za preuzimanje svih ucenika koji su na odgovarajucem usmerenju
    public function uzimanjeSvihUcenika(Request $request,$id)
    {
     
        $profesor = Profesor::find($id);
        
        $usmerenje = $profesor->usmerenje;
        $ucenici = $usmerenje->ucenikUsm;
        
        return $ucenici;

    }

    //omogucava ocenjivanje ucenika
    public function ocenjivanje(Request $request)
    {
        $this->validate($request,['idUcenika' => 'required',
                                  'ocena' => 'required',
                                  'idPredmeta' => 'required']);

        error_log("Vrednosti: " . $request['idUcenika'] . " " . $request['ocena'] . " " . $request['idPredmeta']);

        $ucenik = Ucenik::find($request['idUcenika']);
        $predmetUcenika = $ucenik->predmet;
        
        foreach($predmetUcenika as $pred)
        {
            if($pred->id === $request['idPredmeta'])
            {
                
                $pred->ucenik()->where('ucenik_id',$ucenik->id)->update(array('ocena' => $request['ocena'] ));
                $uc = $pred->ucenik()->where('ucenik_id',$ucenik->id)->first();
                return response(200);
            }
        }
        return response(410);
    }
}
