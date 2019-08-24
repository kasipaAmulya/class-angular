import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
players:any=[]
cPlayers:Player[] = []
  constructor() { 
  var p1=new Player();
p1.id=200
p1.name="sachin"
this.cPlayers.push(p1);
  }
  ngOnInit() {
    this.players.push({id:100,name:'dhoni'});

  }
  
}
class Player{
  public id:number;
  name:string;
}
