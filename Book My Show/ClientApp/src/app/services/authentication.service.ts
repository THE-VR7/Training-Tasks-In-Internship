import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetail } from '../Models/UserDetails';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router : Router, private httpservice : HttpService) { 
    this.isloggedin();
  }
  defaultUser! : UserDetail;

  UserLoggedInSource = new BehaviorSubject(false);
  UserDetailSource = new BehaviorSubject<UserDetail>(this.defaultUser);
  
  isUserLoggedIn = this.UserLoggedInSource.asObservable();
  currentUser = this.UserDetailSource.asObservable();

  isloggedin()
  {
    if(localStorage.getItem('token'))
    {
      this.getuser()
      .subscribe((res) => {
        this.UserDetailSource.next(<UserDetail>res);
        // console.log(this.currentUser);
      },
      (err) => {
        this.UserDetailSource.next(this.defaultUser);
        console.log("error in userdetails ",err);
      }
      )
      this.UserLoggedInSource.next(true);
    }
    else
    {
      this.UserDetailSource.next(this.defaultUser);
      this.UserLoggedInSource.next(false);
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    this.UserLoggedInSource.next(false);
    this.router.navigate(['/home']);
  }

  getuser() : Observable<Object>
  {
      return this.httpservice.userProfile();    
  }

}
