import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AuthenticationService} from '../services/authentication.service';
import { Observable, of, Subscription } from 'rxjs';
import { UserDetail } from '../Models/UserDetails';
import { Movie } from '../Models/Movie';
import { fromEvent } from 'rxjs';
import { map,debounceTime,filter,distinctUntilChanged } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styles: [
  ]
})
export class HeadersComponent implements OnInit,OnDestroy {
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef;
  isAuthenticated! : Observable<boolean>;
  userDetails! : UserDetail;
  UserSubscription! : Subscription;
  searchedMovies : Array<Movie> = [];
  timer!: any;
  isSearching: boolean = false;
  noMovieFound: boolean = false;
;

  constructor(private router : Router, private httpservice : HttpService, private toaster : ToastrService , public auth : AuthenticationService) 
  { }
  
  ngOnInit(): void {
    console.log("called headers");
    this.isAuthenticated = this.auth.isUserLoggedIn;
    this.UserSubscription = this.auth.currentUser.subscribe(user => {
      console.log("user details are ",this.userDetails); 
      this.userDetails = user;
    });  

    fromEvent(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        map( (event : any) => {
          return event.target.value;
        }),
        filter(res => res.length >= 0),
        debounceTime(500),
        distinctUntilChanged()
        ).subscribe((name : string) => {
          this.isSearching = true;

          this.httpservice.getMoviesByName(name)
          .subscribe( (res) => {
          this.searchedMovies = res as Movie[];
          this.isSearching = false;
          if(this.searchedMovies.length == 0 && name.length>0)
          {
            this.noMovieFound = true;
          }
          else
          {
            this.noMovieFound = false;
          }
          console.log("movies searched are ",this.searchedMovies);
          },
          (err) => {
          console.log("error in showdetails ",err);
          }
          );
        });

  }

  ngOnDestroy()
  {
    this.UserSubscription.unsubscribe();
  }

  onLogout()
  {
    this.auth.logout();
    this.toaster.success("User LoggedOut", "LogOut Successfull");
  }

  // getMovies(event:any)
  // {
  //   // This will any previous call to the timer method if it is called before 500 miliseconds
  //   clearTimeout(this.timer);

  //   this.timer = setTimeout( () => {
  //     let name = event.target.value;
  //     name = name.trim();
  //     console.log(name); 
  //     let route: string = 'http://localhost:5000/api/Search/GetShowsByName'+'/'+name;

  //     this.httpservice.getMoviesByName(route)
  //     .subscribe( (res) => {
  //     this.searchedMovies = res as Movie[];
  //     console.log("movies searched are ",this.searchedMovies);
  //     },
  //     (err) => {
  //     console.log("error in showdetails ",err);
  //     }
  //     );
  //   },500);
  // } 

}
