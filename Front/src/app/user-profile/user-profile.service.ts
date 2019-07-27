import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  changePassword(id,oldPass, newPass)
  {
    return this.http.put('api/changePass', {'id': id, 'oldPassword': oldPass, 'newPassword': newPass})
      .subscribe( data => {
        Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'success',
        title: 'Uspesno se promenili password',
        showConfirmButton: false,
        timer: 2000
      });
      localStorage.removeItem('user');
      timer(2000).subscribe(t => location.href = '/login'); });
  }
  changeInfoProfile(id, ime, prezime) {
    return this.http.put('api/changeInfo', {'id': id, 'ime': ime, 'prezime': prezime})
      .subscribe(data =>{
        Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'success',
        title: 'Uspesno ste izvrsili promenu',
        showConfirmButton: false,
        timer: 2500
      });
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
  changeInfoProfileProfesor(id, ime, prezime,korisnickoIme) {
    return this.http.put('api/changeInfoProf', {'id': id, 'ime': ime, 'prezime': prezime, 'korisnicko_ime': korisnickoIme})
      .subscribe(data =>{
        Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'success',
        title: 'Uspesno ste izvrsili promenu',
        showConfirmButton: false,
        timer: 2500
      });
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
  getAllUceniks(id: number)
  {
    return this.http.get('api/uzimanjeSvihUcenika/' + id).subscribe(data => { localStorage.setItem('ucenici', JSON.stringify(data)) });
  }
  Ocenjivanje(broj_indeksa: number , ocena: number, id: number)
  {
    return this.http.put('api/ocenjivanje', {'idUcenika': broj_indeksa, 'ocena': ocena, 'idPredmeta': id}).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'success',
        title: 'Uspesno ste ocenili',
        showConfirmButton: false,
        timer: 2500
      });
      timer(3000).subscribe(t => location.href = '/userProfile');
    });
  }

  ProsecnaOcena(id: number)
  {
    return this.http.post('api/prosecnaOcena', {'id': id}).subscribe( data => {localStorage.setItem('user', JSON.stringify(data))});
  }

}
