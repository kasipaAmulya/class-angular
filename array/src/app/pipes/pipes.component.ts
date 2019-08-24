import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(1997, 0, 8);
  title:string="amulya"
  public person:Person

  constructor() { }

  ngOnInit() {
   this.person=new Person();
   this.person.id=1;
   this.person.name="raminisai";
   this.person.designation="technical associate"
  }


}
class Person{
  id :number
  name:string
  designation:string

}