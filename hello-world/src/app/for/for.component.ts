import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
   
  public wishlist:string[]=["iphone","redmi","honor6x"];

  constructor(private movieObj:Movie) {
    this.movieObj.movieName ="bahubali"
   }

  ngOnInit() {
  }

}
