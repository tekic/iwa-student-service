import { Predmet } from './../Class/predmet';
import { Component, OnInit } from '@angular/core';
import { Usmerenje } from './../Class/usmerenje';
import { Ucenik } from '../Class/ucenik';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { PredmetService } from './predmet.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  predmeti: Predmet[] = JSON.parse(localStorage.getItem('predmets'));
  UsmerenjePredmeti: Predmet[];
  predmetCopy: Predmet[];
  predmetCopy1: Predmet[];
  usmerenje: Usmerenje[] = JSON.parse(localStorage.getItem('usmerenje'));
  user: Ucenik = JSON.parse(localStorage.getItem('user'));


  constructor(private predmetService: PredmetService) { }

  ngOnInit() {
    this.predmetCopy1 = this.predmeti;
    console.log(this.user.usmerenje_id);
    if(this.user.usmerenje_id !== 0)
    {
      Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'info',
        title: 'Nije moguce ponovno birati usmerenje! ',
        showConfirmButton: false,
        timer: 3000
      });
      timer(3500).subscribe(t => location.href = '/');
    }
  }

  PrikaziPredmete(id: number)
  {
    this.predmetCopy = this.predmeti;
    this.predmetCopy1 = this.predmeti;

    this.predmetCopy1 = this.predmetCopy.filter(predmet => predmet.usmerenje_id === id);

  }
  Odaberi(id: number)
  {

    this.predmetService.izborUsmerenja(this.user.id, id);
  }

}
