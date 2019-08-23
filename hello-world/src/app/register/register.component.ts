import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public username:string;
  public pwd:string;
  public registerStatus:string;
  public Register(pStatus){
    // if(this.username=='amulya' && this.pwd=='sai'){
      this.registerStatus="registeration successful ";
      pStatus.style="color:green";

    }
  }


