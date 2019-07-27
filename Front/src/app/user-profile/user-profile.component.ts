import { Usmerenje } from './../Class/usmerenje';
import { UserProfileService } from './user-profile.service';
import { Profesor } from './../Class/profesor';
import { Ucenik } from './../Class/ucenik';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Predmet } from '../Class/predmet';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  uloga: any = JSON.parse(localStorage.getItem('user'));
  OdabraniPredmeti: Predmet[] = JSON.parse(localStorage.getItem('predmets'));
  user: Ucenik = null;
  profesor: Profesor = null;
  u = false;
  p = false;
  ime: string;
  prezime: string;
  korisnicko_ime: string;
  korisnicka_lozinka: string;
  jmbg: number;
  prosecna_ocena: number;
  broj_indeksa: number;
  oldPass: string;
  newPass: string;
  ucenici: Ucenik[];
  predmeti: Predmet[] = JSON.parse(localStorage.getItem('predmets'));
  usmerenje: Usmerenje[] = JSON.parse(localStorage.getItem('usmerenje'));
  idUcenika: number;

  constructor(private userService: UserProfileService) { }

  ngOnInit() {

    if(this.uloga.uloga === 'ucenik')
    {
      this.user = JSON.parse(localStorage.getItem('user'));
    }else if(this.uloga.uloga === 'profesor')
    {

      this.profesor = JSON.parse(localStorage.getItem('user'));
      this.userService.getAllUceniks(this.profesor.id);
      for(let p in this.predmeti)
      {
        if(this.predmeti[p].id === this.profesor.id)
        {
          this.profesor.predmet_naziv = this.predmeti[p].naziv;
          for(let u in this.usmerenje)
          {
            if(this.usmerenje[u].id === this.predmeti[p].usmerenje_id)
            {
              this.profesor.usmerenje_naziv = this.usmerenje[u].naziv;
            }
          }
        }
      }
    }
  }

  public ChangePass(event) {
    event.preventDefault();
    const target = event.target;
    this.oldPass = target.querySelector('input[name=\'oldPass\']').value;
    this.newPass = target.querySelector('input[name=\'newPass\']').value;
    if (this.oldPass !== '' && this.newPass !== '') {
      if(this.user !== null)
      {
        this.userService.changePassword(this.user.id, this.oldPass, this.newPass);
      }else
      {
        this.userService.changePassword(this.profesor.id, this.oldPass, this.newPass);
      }

    } else {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'error',
        title: 'Polja se moraju popuniti',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  public changePersonInfo(event) {
    event.preventDefault();
    const target = event.target;

    this.ime = target.querySelector('input[name=\'firstNameProfile\']').value;
    this.prezime = target.querySelector('input[name=\'lastNameProfile\']').value;
    this.broj_indeksa = target.querySelector('input[name=\'brojIndeksaProfile\']').value;
    this.prosecna_ocena = target.querySelector('input[name=\'prosecnaOcenaProfile\']').value;
    this.uloga = target.querySelector('input[name=\'ulogaProfile\']').value;


    if (this.ime !== '' && this.prezime !== '' && this.broj_indeksa !== 0 && this.prosecna_ocena !== 0 && this.uloga !== '') {
      this.userService.changeInfoProfile(this.user.id, this.ime, this.prezime);
    } else {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'error',
        title: 'Sva polja oznacena sa * se moraju popuniti',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  public changeProfesorInfo(event) {
    event.preventDefault();
    const target = event.target;

    this.ime = target.querySelector('input[name=\'firstNameProfile\']').value;
    this.prezime = target.querySelector('input[name=\'lastNameProfile\']').value;
    this.jmbg = target.querySelector('input[name=\'jmbg\']').value;
    this.korisnicko_ime = target.querySelector('input[name=\'korisnickoImeProfile\']').value;
    this.uloga = target.querySelector('input[name=\'uloga\']').value;


    if (this.ime !== '' && this.prezime !== '' && this.jmbg !== 0 && this.korisnicko_ime !== '' && this.uloga !== '') {
      this.userService.changeInfoProfileProfesor(this.profesor.id, this.ime, this.prezime, this.korisnicko_ime);
    } else {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'error',
        title: 'Sva polja oznacena sa * se moraju popuniti',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  public izabraniPredmeti()
  {
      this.OdabraniPredmeti = JSON.parse(localStorage.getItem('izabraniPredmeti'));
  }

  public prikaziUcenike()
  {
    this.ucenici = JSON.parse(localStorage.getItem('ucenici'));

  }
  Ocenjivanje(id: number)
  {
    this.idUcenika = id;
  }

  posaljiOcenu(event)
  {
    event.preventDefault();
    let target = event.target;
    let ocena = target.querySelector('#ocena').value;

    if(ocena >= 5 && ocena <= 10)
    {
      this.userService.Ocenjivanje(this.idUcenika, ocena, this.profesor.predmet_id);
    }else
    {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'error',
        title: 'Ocene su od 5 do 10',
        showConfirmButton: false,
        timer: 2500
      });
    }
  }

}
