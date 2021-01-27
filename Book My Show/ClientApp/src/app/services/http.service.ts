import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookingDetail } from '../Models/BookingDetails';
import { LikeDetail } from '../Models/LikeDetail';
import { Movie } from '../Models/Movie';
import { UserDetail } from '../Models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  route: string = 'http://localhost:5000/api';


  constructor(private httpService: HttpClient) { }

    public getMovies = () => { 
      return this.httpService.get(this.route+"/movie"); 
    }

    public getEvents = () => {
      return this.httpService.get(this.route+"/events");
    }

    public getMoviesByName = (name : string) => {
      return this.httpService.get(this.route+"/Search/GetShowsByName/"+name);
    }
    
    public getMovieById = (id : number) => {
      return this.httpService.get(this.route+"/movie/GetMovieById/"+id);
    } 
 
    public getMovieHallsByMovieId = () => {
      return this.httpService.get(this.route);
    } 

    public getShowsTimeTableByMovieId = (movieId : number) => {
      return this.httpService.get(this.route+"/booking/GetHallForMovieProfiles/"+movieId);
    }

    public getBookedSeatsByMovieId = (route : string) => {
      return this.httpService.get(route); 
    }

    savebooking(bookingdetail : BookingDetail) {
      console.log("in save booking service method",bookingdetail);
      return this.httpService.post(this.route+"/Booking" , bookingdetail);   
    }

    userSignup( body : Object)
    {
      console.log("in userSignup method ",body);
      return this.httpService.post(this.route+"/User/Register" , body);
    }

    userLogin(body : Object)
    {
      console.log("in userSignup method ",body);
      return this.httpService.post(this.route+"/User/Login",body);
    }

    userProfile()
    {
      var tokenHeader = new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
      return this.httpService.get(this.route+"/User/GetUserProfile" , {headers : tokenHeader}); 
    }

    addMovie(movie: Movie) {  
      // movie.language = parseInt(""+movie.language);

      console.log("movie is ",movie);
      return this.httpService.post(this.route+"/Movie/SaveMovie", movie );
    }

    addLike(likeDetail : LikeDetail)
    {
      return this.httpService.post(this.route+"/User/AddUserLike",likeDetail);
    }
  
} 
 