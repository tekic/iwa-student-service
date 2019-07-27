import { Usmerenje } from './../Class/usmerenje';
import { Component, OnInit } from '@angular/core';
import { RegProfServiceService } from './reg-prof-service.service';
import { Predmet } from '../Class/predmet';

@Component({
  selector: 'app-registration-prof',
  templateUrl: './registration-prof.component.html',
  styleUrls: ['./registration-prof.component.css']
})
export class RegistrationProfComponent implements OnInit {

  IzabranPredmet: any;
  IzabranoUsmerenje: number;
  predmet: Predmet[] = JSON.parse(localStorage.getItem('predmets'));
  usmerenje: Usmerenje[] = JSON.parse(localStorage.getItem('usmerenje'));

  constructor(private registrationService: RegProfServiceService) { }

  ngOnInit() {
    console.log(this.predmet);
  }

  Userregistration(event) {
    event.preventDefault();
    const target = event.target;
    console.log('Izabran predmet: ' + this.IzabranPredmet.id);

    for(let u in this.usmerenje)
    {
      if(this.usmerenje[u].id === this.IzabranPredmet.usmerenje_id)
      {
        this.IzabranoUsmerenje = this.usmerenje[u].id;
      }
    }
    console.log('Izabrano usmerenje ' + this.IzabranoUsmerenje);
    this.registrationService.registration(target, this.IzabranPredmet.id, this.IzabranoUsmerenje);
  }
}
