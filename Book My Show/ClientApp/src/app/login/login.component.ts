import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, public auth : AuthenticationService, private toaster : ToastrService ,private httpservice : HttpService,public route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
      {
        this.router.navigateByUrl('/');
      }
    this.buildForm();
  }

  buildForm(){
    this.loginForm = this.formBuilder.group({
      username  : ['',[Validators.required]],
      password : ['',[Validators.required]],
      });
    }

    onSubmit()
    {
      var body = 
    {
      UserName: this.loginForm.value.username,
      Password: this.loginForm.value.password
    };


      this.httpservice.userLogin(body)
      .subscribe((result : any) => 
      {
        console.log("contact saved ",result);
        localStorage.setItem('token',result.token);
        this.toaster.success("User LoggedIn", "Authentication Successfull");
        this.auth.isloggedin();
        this.router.navigateByUrl('/');
      },
      (error : HttpErrorResponse) => 
      {
        console.error("the error is ",error);
        if(error.status == 400)
        {
          this.toaster.error("Incorrect UserName or Password","Authentication Failed");
        }
      }
      );
    }

}
