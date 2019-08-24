import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:Movie[]=[]
  movie: Movie;
  constructor() { 
    
    this.movie={
      id:1,
      title:'dhoni',
      heroname:'msd'
    };
  }

  ngOnInit() {
  }

}
