import { LoginProfService } from './login-prof.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrls: ['./login-prof.component.css']
})
export class LoginProfComponent implements OnInit {

  constructor(private loginService: LoginProfService) { }

  ngOnInit() {
  }

  public Userlogin(event)
  {
    event.preventDefault();
    const target = event.target;
    this.loginService.login(target);

  }
}
