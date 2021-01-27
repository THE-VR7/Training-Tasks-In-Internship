import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDetail } from '../Models/UserDetails';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [
  ]
})
export class UserProfileComponent implements OnInit {
  userDetails!: UserDetail;
  UserSubscription! : Subscription;

  constructor(private httpservice : HttpService , private router : Router,private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.UserSubscription = this.auth.currentUser.subscribe(user => {
      this.userDetails = user;
    });    
  }

  ngOnDestroy()
  {
    this.UserSubscription.unsubscribe();
  }

  onLogout()
  {
    this.auth.logout();
  }
}
