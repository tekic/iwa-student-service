import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { timer } from 'rxjs/internal/observable/timer';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  headers: any;
  options: any;

  firstName: string;
  lastName: string;
  index: string;
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

  public registration(target) {
    this.firstName = target.querySelector('input[name=\'nameR\']').value;
    this.lastName = target.querySelector('input[name=\'surname\']').value;
    this.index = target.querySelector('input[name=\'brIndexa\']').value;
    this.password = target.querySelector('input[name=\'passR\']').value;
    console.log('UZEO');
    if (this.firstName !== '' && this.lastName !== '' && this.index !== '' && this.password !== '') {
      return this.http.post('api/userRegistration', {'ime': this.firstName, 'prezime': this.lastName, 'broj_indeksa': this.index,
         'korisnicka_lozinka': this.password, 'prosecna_ocena': '0'}, this.options).subscribe(data => {
           Swal.fire({
          position: 'top-end',
          width: 600,
          type: 'success',
          title: 'Uspesno ste se registrovali',
          showConfirmButton: false,
          timer: 2500
        });
          timer(2500).subscribe(t => location.href = '/login'); }
      );
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
