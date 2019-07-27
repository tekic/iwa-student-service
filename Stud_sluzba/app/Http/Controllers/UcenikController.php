<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Ucenik;
use App\Usmerenje;
use App\Predmet;

class UcenikController extends Controller
{
    public function login(Request $request)
    {
            $this->validate($request,['broj_indeksa' => 'required',
                                'korisnicka_lozinka' => 'required']);
            $credentials = $request->only('broj_indeksa', 'korisnicka_lozinka');
            //uzimamo ucenika ciji se broj indexa poklapa
            $ucenik = Ucenik::where('broj_indeksa','=',$request['broj_indeksa'])->first();
           
            error_log('Korisnicka lozinka '. $request['korisnicka_lozinka']);
            if($ucenik->korisnicka_lozinka === $request['korisnicka_lozinka'])
            {
                return $ucenik;
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
            'broj_indeksa' => 'required|max:30',
            'korisnicka_lozinka' => 'required|min:8|max:50']);
        $ime=$request['ime'];
        $prezime=$request['prezime'];
        $broj_indeksa=$request['broj_indeksa'];
        $korisnicka_lozinka=$request['korisnicka_lozinka'];

        $user = new Ucenik();
        $user->ime=$ime;
        $user->prezime=$prezime;
        $user->broj_indeksa =$broj_indeksa;
        $user->korisnicka_lozinka=$korisnicka_lozinka;
        $user->usmerenje_id = 0;
        $user->prosecna_ocena=0;
        $user->uloga = 'ucenik';
        $user->save();

    }

    public function changePass(Request $request)
    {
        $this->validate($request,['oldPassword' => 'required',
                                  'newPassword' => 'required']);
        $ucenik = Ucenik::find($request['id']);

        error_log($ucenik);
        error_log('Stari password ' . $request['oldPassword']);
        error_log('Novi password' . $request['newPassword']);

        if($ucenik['korisnicka_lozinka'] === $request['oldPassword'])
        {
            $ucenik['korisnicka_lozinka'] = $request['newPassword'];
            $ucenik->update();
        }else
        {
            return response('Greska u promeni password-a',402);
        }
    }

    public function changeInfo(Request $request)
    {
        $this->validate($request,['ime' => 'required',
                                  'prezime' => 'required']);

        $ucenik = Ucenik::find($request['id']);

        $ucenik->ime = $request['ime'];
        $ucenik->prezime = $request['prezime'];

        $ucenik->update();
    }

    //omogucava da ucenik odabere usmerenje kao i predmete koji idu uz to usmerenje
    public function izborUsmerenja(Request $request)
    {
        $this->validate($request,['id' => 'required', 
                                'usmerenje' => 'required']);

        $ucenik = Ucenik::find($request['id']);
        $usmerenje = Usmerenje::find($request['usmerenje']);
        
        //u korisniku se cuva id od usmerenja koji je izabrao
        $usmerenje->ucenikUsm()->save($ucenik);

        $predmet = $usmerenje->predmet()->get();

        //u zajednicku tabelu predmet_ucenik se unosi ucenik_id i predmet_id iz datog usmerenja
        foreach($predmet as $p)
        {
            $p->ucenik()->save($ucenik);
        }

        return $ucenik;
    }

    /*
        Sluzi za racunanje prosecne ocene na osnovu polozenih predmeta tj gledaju se samo predmeti
        koji imaju ocenu vecu od 5 a manju od 10    
    */
    public function prosecnaOcena(Request $request)
    {
        $this->validate($request,['id' => 'required']);

        $ucenik = Ucenik::find($request['id']);

        $predmet = $ucenik->predmet;
        $suma = 0;
        $ukupnoPredmeta = 0;
        foreach($predmet as $p)
        {
            if($p->pivot->ocena > 5 && $p->pivot->ocena < 10)
            {
                $suma+=$p->pivot->ocena;
                $ukupnoPredmeta+=1;
            }
        }
        if($ukupnoPredmeta !== 0)
        {   
            $prosecnaOcena = $suma/$ukupnoPredmeta;
            error_log("Prosecna ocena " . $prosecnaOcena);
            $ucenik->prosecna_ocena = $prosecnaOcena;
            $ucenik->update();

        }
        return $ucenik;
        
    }

    /*
        Funkcija omogucava da se za svakog ucenika uzmu svi predmeti
        koje slusa i njihove ocene koje je dobio od profesora
    */
    public function OcenePredmet(Request $request)
    {
        $this->validate($request,['id' => 'required']);

        $ucenik = Ucenik::find($request['id']);

        $predmeti = $ucenik->predmet;

        error_log("Predmeti: " . $predmeti);

        return $predmeti;
    }
}
