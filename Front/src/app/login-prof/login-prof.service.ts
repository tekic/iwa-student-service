import { Injectable } from '@angular/core';
import { Profesor } from '../Class/profesor';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProfService {

  korisnicko_ime: string;
  password: string;

  constructor(private http: HttpClient) { }

  public login(target) {
    this.korisnicko_ime = target.querySelector('input[name=\'username\']').value;
    this.password = target.querySelector('#pass').value;
    if (this.korisnicko_ime !== '' && this.password !== '') {
      return this.http.post('api/proflogin', {'korisnicko_ime': this.korisnicko_ime, 'korisnicka_lozinka': this.password})
        .subscribe( (data: Profesor) => {
          console.log(data);
            localStorage.setItem('user', JSON.stringify(data))
              Swal.fire({
                position: 'top-end',
                width: 600,
                type: 'success',
                title: 'Uspesno se ulogovao korisnik ' + data.ime,
                showConfirmButton: false,
                timer: 2500
              });
              timer(2500).subscribe(t => location.href = '/');
        });
    } else {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'error',
        title: 'Username i password se moraju popuniti ',
        showConfirmButton: false,
        timer: 2000
      });
    }

  }
}
