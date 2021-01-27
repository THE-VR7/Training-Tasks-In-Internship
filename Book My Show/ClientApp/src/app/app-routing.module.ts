import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { TheatreComponent } from './theatre/theatre.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesComponent  } from './movies/movies.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'navbar',component:HeadersComponent},
  {path: 'showdetail/:id',component:ShowDetailComponent},
  {path: 'theatre/:id',component:TheatreComponent},
  {path: 'bookingform',component:BookingFormComponent},
  {path: 'signup',component: SignupComponent },
  {path: 'login',component: LoginComponent },
  {path: 'userprofile',component: UserProfileComponent, canActivate:[AuthguardGuard] },
  {path: 'addmovie',component: AddMovieComponent },
  {path: 'slideshow',component: SlideshowComponent },
  {path: 'movies',component: MoviesComponent },
  
  {path:'',redirectTo:'/home','pathMatch':'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]
