import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

opertations:string[]=['+','-','*','/'];
currentOperator:string='-'
num1:number=10
num2:number=20
  constructor() { }

  ngOnInit() {
  }
  userOperation(teady){
    console.log(teady)
    this.currentOperator=teady
  }

}
