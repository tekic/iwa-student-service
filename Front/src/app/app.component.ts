import { Profesor } from './Class/profesor';
import { PredmetService } from './predmet/predmet.service';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { Ucenik } from './Class/ucenik';
import { UserProfileService } from './user-profile/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Studentska sluzba';

  uloga: any = JSON.parse(localStorage.getItem('user'));
  ime: String;
  user: Ucenik = null;
  profesor: Profesor = null;
  constructor(private predmetService: PredmetService, private userService: UserProfileService ) {}

  ngOnInit() {
    console.log(this.uloga);
    this.predmetService.AllPredmets();
    this.predmetService.AllUsmerenje();

    if(this.uloga.uloga === 'ucenik')
    {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userService.ProsecnaOcena(this.user.id);
      this.predmetService.izabraniPredmetiOcene(this.user.id);

    }else if(this.uloga.uloga === 'profesor')
    {

      this.profesor = JSON.parse(localStorage.getItem('user'));

    }
    if (this.user != null) {
      this.ime = this.user.ime;
    }else if (this.profesor != null)
    {
      this.ime = this.profesor.ime;
    }

    }

  SignOut($event) {
    Swal.fire({
      position: 'top-end',
      width: 600,
      type: 'success',
      title: 'Uspesno ste se izlogovali ',
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.removeItem('user');
    timer(1500).subscribe(t => location.href = '/');
  }
}
