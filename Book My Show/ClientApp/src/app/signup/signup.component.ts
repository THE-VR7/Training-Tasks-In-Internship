import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup ;
  validationMessages: any;

  constructor(private formgroup : FormBuilder, private router : Router ,  private httpservice : HttpService, private toaster : ToastrService) 
  {  }

  ngOnInit(): void {
    this.buildForm();
    this.errorMessages();
  }

  errorMessages(){
    this.validationMessages = {
      UserName: [
        { type: 'required', message: 'Name is required.' },
        { type: 'minlength', message:'Enter atleast 4 Characters' }
      ],
      FullName: [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message:'Enter atleast 4 Characters' }
    ],
      Email: [
          { type: 'required', message: 'email is required.' },
          { type: 'pattern', message: 'Please enter a valid email' },
      ],
      MobileNumber:[
        { type: 'required', message:'Mobile Number is required' },
        { type: 'minlength', message:'Enter atleast 10 digits' },
        { type: 'pattern', message: 'Only Numbers Allowed' }
      ],
      lalndline:[
        { type: 'minlength', message:'Enter 10 digits' },
        { type: 'pattern', message: 'Only Numbers Allowed' }
      ],
      website:[
        { type: 'pattern', message:'(Wrong Format) Ex : www.mp3.com' }
      ],
    }
  }


  buildForm()
  {
    console.log("called");
    this.signupForm = this.formgroup.group
    ({
      UserName: ['', Validators.required],
      Email: ['', [Validators.email,Validators.required]],
      FullName: [''],
      MobileNumber : ['',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*")]],
      Passwords: this.formgroup.group
        ({
          Password: ['', [Validators.required, Validators.minLength(4)]],
          ConfirmPassword: ['', Validators.required]
        },
        { validator: this.comparePasswords })
    });
  }

  // Custom validation to compare the password and Confirm Password
  comparePasswords(formgroup : FormGroup)
  {
    let confirmPassword = formgroup.get('ConfirmPassword');

    if(confirmPassword?.errors == null || 'passwordMismatch' in confirmPassword.errors)
    {
      if(formgroup.get('Password')?.value != confirmPassword?.value)
      {
        confirmPassword?.setErrors({passwordMismatch : true})
      }
      else
      {
        confirmPassword?.setErrors(null);
      }
    }
  }

  // Submit Method which will be called When the User presses the Submit Button after Form Completion
  onSubmit()
  {
    var body = 
    {
      UserName: this.signupForm.value.UserName,
      Email: this.signupForm.value.Email,
      FullName: this.signupForm.value.FullName,
      Password: this.signupForm.value.Passwords.Password,
      MobileNumber : this.signupForm.value.MobileNumber
    };

    this.httpservice.userSignup( body)
    .subscribe((res : any) => 
    { 
      console.log("returned response",res);
      if(res.succeeded)
      {
        this.signupForm.reset();
        this.toaster.success("New User Created", "User Registration Successfull");
        this.router.navigateByUrl('/login');
      }
      else
      {
        res.errors.forEach
        (
          (element: { code: any; description : any; }) => 
          {
            this.toaster.error(element.description,element.code);
          }
        );
      }      
    },
    (error : HttpErrorResponse) => 
    {
      console.error("the error is ",error);
    }
    );
  }

}
