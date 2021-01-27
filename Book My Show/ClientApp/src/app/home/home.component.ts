import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/Movie';
import { HttpService } from '../services/http.service';
import { Gender, GenresLabel, LanguageLabel, MovieTypeLabel }  from '../Models/Enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  LanguageLabel = LanguageLabel;
  GenresLabel = GenresLabel;
  MovieTypeLabel = MovieTypeLabel;
  slidemovies : Array<Movie> = [];
  public movies : Array<Movie> = []; 

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies = () => 
  {
    this.httpService.getMovies()
    .subscribe((result) => {
      console.log("res is ",result);
      this.movies = result as Movie[];
      // this.movies = this.movies.sort((m1,m2) => {
      //   if(m1.numberOfLikes >= m2.numberOfLikes)
      //   {
      //     return 1;
      //   }
      //   else
      //   {
      //     return -1;
      //   }
      // });
      this.slidemovies = this.movies;
      console.log("in Home page",this.movies);
    },
    (error) => {
      console.error(error);
    });
  }

}
