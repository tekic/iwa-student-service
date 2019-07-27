import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) { }

  ngOnInit() {
  }

  public Userlogin(event)
  {
    event.preventDefault();
    const target = event.target;
    this.loginService.login(target);

  }

}
