import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegProfServiceService {

  headers: any;
  options: any;

  firstName: string;
  lastName: string;
  jmbg: string;
  korisnicko_ime: string;
  password: string;
  constructor(private http: HttpClient)
  {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'X-CSRF-TOKEN': '123456'
    });
    this.options = {
      headers: this.headers
    }
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Access-Control-Allow-Credentials', 'true');

    this.headers.append('Access-Control-Allow-Headers', '*');
    this.headers.append('X-XSRF-TOKEN', 'asdsada');
  }

  public registration(target, IzabranPredmet, IzabranoUsmerenje) {
    this.firstName = target.querySelector('input[name=\'nameR\']').value;
    this.lastName = target.querySelector('input[name=\'surname\']').value;
    this.jmbg = target.querySelector('input[name=\'jmbg\']').value;
    this.korisnicko_ime = target.querySelector('input[name=\'username\']').value;
    this.password = target.querySelector('input[name=\'passR\']').value;
    console.log('Korisnicko ime: ' +  this.korisnicko_ime);

    if (this.firstName !== '' && this.lastName !== '' && this.jmbg !== '' && this.korisnicko_ime !== '' && this.password !== '') {
      if(this.jmbg.length === 13)
      {
        return this.http.post('api/profRegistration', {'ime': this.firstName, 'prezime': this.lastName, 'jmbg': this.jmbg,
        'korisnicko_ime': this.korisnicko_ime, 'korisnicka_lozinka': this.password,
         'predmet_id': IzabranPredmet, 'usmerenje_id': IzabranoUsmerenje}).subscribe(data => {
          Swal.fire({
         position: 'top-end',
         width: 600,
         type: 'success',
         title: 'Uspesno ste se registrovali',
         showConfirmButton: false,
         timer: 2500
       });
         timer(2500).subscribe(t => location.href = '/loginProf'); }
     );
      }else
      {
        Swal.fire({
          position: 'top-end',
          width: 600,
          type: 'error',
          title: 'JMBG mora imati 13 brojeva',
          showConfirmButton: false,
          timer: 2500
        });
      }

    } else {
        Swal.fire({
          position: 'top-end',
          width: 600,
          type: 'error',
          title: 'Sva polja oznacena sa * se moraju popuniti',
          showConfirmButton: false,
          timer: 2500
        });
    }
  }
}
