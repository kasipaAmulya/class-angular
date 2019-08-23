import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
title="teady";
city="hyderabad"
state="telangana"
country="india"
placetosee="charminar ,tank bund"
onBtnClick(city,state){
    this.city=city
    this.state=state
    alert("succesfully submitted") 
    // this.country=country
    // this.placetosee=placetosee

  }
}
