import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LanguageLabel, GenresLabel, MovieTypeLabel, RoleLabel } from '../Models/Enum';
import { LikeDetail } from '../Models/LikeDetail';
import { Movie } from '../Models/Movie';
import { UserDetail } from '../Models/UserDetails';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styles: [
  ]
})
export class ShowDetailComponent implements OnInit {
  LanguageLabel = LanguageLabel;
  GenresLabel = GenresLabel;
  MovieTypeLabel = MovieTypeLabel;
  RoleLabel = RoleLabel;

  userDetails! : UserDetail;
  hasUserLiked : boolean = false;
  UserSubscription! : Subscription;
  

  public movie! : Movie ;
  public id : number =0;
  isLoggedIn: boolean = false;
  constructor(private httpservice : HttpService,private toaster : ToastrService, private activateroute : ActivatedRoute,public auth : AuthenticationService) { }

  ngOnInit(): void {

    this.id = this.activateroute.snapshot.params.id;
    this.activateroute.params.subscribe(params => {
      this.id = params['id'];
      this.getMovieById();
    });

    this.UserSubscription = this.auth.currentUser.subscribe(user => {
      console.log("user details are ",this.userDetails); 
      this.userDetails = user;
      this.getLikeStatus();
    }); 
  }

  getMovieById() 
  {
    this.httpservice.getMovieById(this.id)
    .subscribe( 
      (res) => 
      {
        this.movie = res as Movie;
        this.getLikeStatus();
        console.log(this.movie);
      },
      (err) => 
      {
        console.log("error in showdetails ",err);
      }
    );
  }

  getLikeStatus()
  {
    if(this.userDetails != undefined  && this.movie != undefined )
    {
      this.isLoggedIn = true;
      this.userDetails.likes.forEach((like) => {
      if(like.movieId == this.movie.id)
      {
        this.hasUserLiked = true;
      }
    });
    }
  }

  changeUserLikeStatus()
  {
    this.hasUserLiked = !this.hasUserLiked;
  }

  likeTheMovie()
  {
    if(this.userDetails == undefined)
    {
      this.toaster.warning("Login to Like the Movie", "Like Unsuccessfull");
      return;
    }

    this.movie.numberOfLikes++;
    this.changeUserLikeStatus();
    var like : LikeDetail = {
      isLiked : true,
      movieId : this.movie.id,
      userId : this.userDetails.id,
      id : 0
    }
    this.httpservice.addLike(like)
    .subscribe( (res) => {
      console.log(res);
    },
    (err) => { 
      console.log("error in showdetails adding like ",err);
    }
    );
  }

}