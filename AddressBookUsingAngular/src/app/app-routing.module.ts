import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent} from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'header',component:HeaderComponent },
  {path:'navbar',component:NavbarComponent},
  {path:'contactform/:formfunction',component:ContactFormComponent},
  {path:'contactlist',component:ContactListComponent},
  {path:'',redirectTo:'/','pathMatch':'full'},
  {path:'contactdetail' , component:ContactDetailsComponent},
  { path: '**', redirectTo:'/','pathMatch':'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,NavbarComponent,ContactFormComponent,HomeComponent,ContactListComponent,ContactDetailsComponent]