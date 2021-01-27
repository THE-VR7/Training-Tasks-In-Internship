import { Component, OnInit } from '@angular/core';
import { GenresLabel, LanguageLabel, MovieTypeLabel } from '../Models/Enum';
import { Movie } from '../Models/Movie';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {
LanguageLabel = LanguageLabel;
GenresLabel = GenresLabel;
MovieTypeLabel = MovieTypeLabel;
languageFilters : Array<number> = [];
genresFilters : Array<number> = [];
movieTypeFilters : Array<number> = [];

slidemovies : Array<Movie> = [];
allMovies : Array<Movie> = []; 
filterMovies : Array<Movie> = [];

  constructor(private httpService : HttpService) { }
    
  ngOnInit(): void {
    this.getMovies();
  }

  toggleLanguageFilter(val : number)
  {
    if(this.languageFilters.includes(val))
    {
      const index = this.languageFilters.indexOf(val);
      if(index > -1)
      {
        this.languageFilters.splice(index,1);
      }
    }
    else
    {
      this.languageFilters.push(val);
    }
    this.moviesbyFilters();
    // console.log("Language filters are ",this.languageFilters);
  }

  toggleGenersFilter(val : number)
  {
    if(this.genresFilters.includes(val))
    {
      const index = this.genresFilters.indexOf(val);
      if(index > -1)
      {
        this.genresFilters.splice(index,1);
      }
    }
    else
    {
      this.genresFilters.push(val);
    }
    this.moviesbyFilters();
  }

  toggleFormatFilter(val : number)
  {
    if(this.movieTypeFilters.includes(val))
    {
      const index = this.movieTypeFilters.indexOf(val);
      if(index > -1)
      {
        this.movieTypeFilters.splice(index,1);
      }
    }
    else
    {
      this.movieTypeFilters.push(val);
    }
    this.moviesbyFilters();
  }

  public getMovies = () => 
  {
    this.httpService.getMovies()
    .subscribe((result) => {
      console.log("res is ",result);
      this.allMovies = result as Movie[];
      this.slidemovies = this.allMovies;
      this.exploreMovies();
      console.log("in Movies page",this.allMovies);
    },
    (error) => {
      console.error(error);
    });
  }

  comingSoonMovies()
  {
    this.exploreMovies();
    let today = new Date();
    this.filterMovies = this.allMovies;
    this.filterMovies = this.filterMovies.filter(x => {
      let xDate = new Date(x.releaseDate);
      // console.log(xDate,"and ",today);
      return xDate >= today; 
    } );
    // console.log(this.filterMovies);
  }

  exploreMovies()
  {
    this.filterMovies = this.allMovies;
    this.languageFilters = [];
    this.movieTypeFilters = [];
    this.genresFilters = [];
    // console.log("in explore func",this.filterMovies);
  }

  moviesbyFilters()
  {
    // console.log(this.languageFilters,this.movieTypeFilters,this.genresFilters);
    this.filterMovies = this.allMovies;
    if(this.languageFilters.length>0)
    {
      this.filterMovies = this.filterMovies.filter(x => this.languageFilters.includes(x.languague));
    }
    if(this.genresFilters.length>0)
    {
      this.filterMovies = this.filterMovies.filter(x => this.genresFilters.includes(x.gener));
    }
    if(this.movieTypeFilters.length>0)
    {
      this.filterMovies = this.filterMovies.filter(x => this.movieTypeFilters.includes(x.movieType));
    }
    // console.log("filtered movies are ",this.filterMovies);
  }

}
