import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { Ucenik } from '../Class/ucenik';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  broj_indeksa: string;
  password: string;

  constructor(private http: HttpClient) { }

  public login(target) {
    this.broj_indeksa = target.querySelector('input[name=\'username\']').value;
    this.password = target.querySelector('#pass').value;

    if (this.broj_indeksa !== '' && this.password !== '') {
      return this.http.post('api/userlogin', {'broj_indeksa': this.broj_indeksa, 'korisnicka_lozinka': this.password})
        .subscribe( (data: Ucenik) => {
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
