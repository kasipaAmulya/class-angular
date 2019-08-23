import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public username:string;
  public pwd:string;
  public loginStatus:string;
  public Login(){
    if(this.username=='amulya' && this.pwd=='sai'){
      this.loginStatus="Login successful";
    }
  }

}
