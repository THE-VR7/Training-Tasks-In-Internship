import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BookingDetail } from '../Models/BookingDetails';
import { Movie } from '../Models/Movie';
import { MovieHall } from '../Models/MovieHall';
import { ShowsTimeTable } from '../Models/ShowTimeTable';
import { HttpService } from '../services/http.service';
import { showhallprofile } from '../Models/showhallprofile';
import { LanguageLabel, GenresLabel, MovieTypeLabel } from '../Models/Enum';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styles: [
  ]
})
export class TheatreComponent implements OnInit {

  public movie! : Movie ;
  public id : number = 0;
  public movieHallProfiles! : showhallprofile[];
  public allMovieHallProfiles : showhallprofile[] = [];

  LanguageLabel = LanguageLabel;
  GenresLabel = GenresLabel;
  MovieTypeLabel = MovieTypeLabel;

  leastPriceArray : Array<number> = [0,100,200,300,500];
  highestPriceArray : Array<number> = [100,200,300,500,Number.POSITIVE_INFINITY];
  startTimings : Array<string> = ["12:00","12:00 PM","4:00 PM","8:00 PM"];
  startTimeNumb : Array<number> = [0.00,12.0,16.0,20.00];
  endTimeNumb : Array<number> = [11.59,15.59,19.59,23.59];
  endTimings : Array<string> = ["11:59 AM","3.59 PM","7.59 PM","11.59 PM"];
  timeArray : Array<string> = ["Morning","AfterNoon","Evening","Night"];
  
  priceFilters : Array<number> = [];
  timimgsFilters : Array<number> = []; 

  currentDiv : number = -1;
 
  showselected! : showhallprofile;

  
  constructor(private httpservice : HttpService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMovieById();
    this.getShowsHallsProfile();
  }

  getMovieById() {
    this.httpservice.getMovieById(this.id)
    .subscribe( (res) => {
      this.movie = res as Movie;
      console.log(this.movie); 
    },
    (err) => {
      console.log("error in showdetails ",err);
    }
    );
  }
  
  getShowsHallsProfile()
  {
    var movieId = this.id;
    console.log("movieId is ",movieId); 
    this.httpservice.getShowsTimeTableByMovieId(movieId)
    .subscribe( (res) => {
      this.movieHallProfiles = res as showhallprofile[];
      this.allMovieHallProfiles = this.movieHallProfiles;
      this.movieHallProfiles = this.movieHallProfiles.filter(x => x.totalSeatsBooked.length != x.movieHall.numberOfSeats);
      console.log("the show time table is  : ",this.movieHallProfiles);
    },
    (err) => { 
      console.log("error in showdetails ",err);
    }
    );
  }

  navigate(index : number) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            moviehallprofile : this.movieHallProfiles[index]
        }
    }
    this.router.navigate(['bookingform'], navigationExtras);
}

AddPriceFilters(val :number)
{
  if(this.priceFilters.includes(val))
    {
      const index = this.priceFilters.indexOf(val);
      if(index > -1)
      {
        this.priceFilters.splice(index,1);
      }
    }
    else
    {
      this.priceFilters.push(val);
    }
    this.filterMovieHallProfiles();
}

filterMovieHallProfiles()
{
  this.movieHallProfiles = this.allMovieHallProfiles;
  if(this.priceFilters.length>0)
  {
    this.movieHallProfiles = this.movieHallProfiles.filter(x => {
      let flag  = false;
      this.priceFilters.forEach((priceIndex) => {
        if(x.movieHall.frontRowSeatsPrice >= this.leastPriceArray[priceIndex] &&  x.movieHall.lastRowSeatsPrice <= this.highestPriceArray[priceIndex])
        {
          flag=true;
        }
      });
      return flag;
    });
    // console.log("movieprofiles are : ",this.movieHallProfiles);
  }
  if(this.timimgsFilters.length > 0)
  {
    this.movieHallProfiles = this.movieHallProfiles.filter(x => {
      let flag  = false;
      this.timimgsFilters.forEach((timingIndex) => {
        let currTime = parseFloat(""+x.showRecord.showTiming.hours) + (x.showRecord.showTiming.minutes)/100.00
        if(currTime >= this.startTimeNumb[timingIndex] &&  currTime <= this.endTimeNumb[timingIndex])
        {
          flag=true;
        }
      });
      return flag;
    });
  }
}


AddTimingsFilters(val :number)
{
  if(this.timimgsFilters.includes(val))
    {
      const index = this.timimgsFilters.indexOf(val);
      if(index > -1)
      {
        this.timimgsFilters.splice(index,1);
      }
    }
    else
    {
      this.timimgsFilters.push(val);
    }
    this.filterMovieHallProfiles();
}

passShowProfile(index : number)
{
  this.showselected = this.movieHallProfiles[index];
  // this.showselected = this.movieHallProfiles[index];
}


}
