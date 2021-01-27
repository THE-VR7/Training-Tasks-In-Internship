import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../Models/Movie';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})

export class SlideshowComponent implements OnInit,OnChanges {
@Input() slideMovies : Movie[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    this.slideMovies = (changes.slideMovies.currentValue);
    console.log("in ngonchanges method : ",this.slideMovies)
    // if(this.slideMovies.length != 0)
    // {
    //   this.slideMovies.sort((a,b) => b.numberOfLikes - a.numberOfLikes );
    //   this.slideMovies = this.slideMovies.splice(0,3);  
    // console.log("after sorting : ",this.slideMovies);
    // }
  }

}
