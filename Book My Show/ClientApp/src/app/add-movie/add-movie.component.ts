import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gender, Role, Language, Gener, MovieType, CertificateType } from '../Models/Enum';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styles: [
  ]
})
export class AddMovieComponent implements OnInit {

  movieForm! : FormGroup;
  castForm! : FormGroup;
  Gender : typeof Gender = Gender;
  Role : typeof Role = Role;
  Language : typeof Language = Language; 
  Gener : typeof Gener = Gener; 
  MovieType : typeof MovieType = MovieType; 
  CertificateType : typeof CertificateType = CertificateType; 
  
  roleKeys : Array<Role> = [];
  genderKeys : Array<number> = [];
  languageKeys : Array<number> = [];
  generKeys : Array<number> = [];
  movieTypeKeys : Array<number> = [];
  certificateTypeKeys : Array<number> = [];
  

  constructor(private formgroup : FormBuilder, private router : Router ,  private httpservice : HttpService, private toaster : ToastrService) { 
    this.genderKeys = Object.keys(Gender).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    this.roleKeys = Object.keys(Role).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    this.languageKeys = Object.keys(Language).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    this.generKeys = Object.keys(Gener).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    this.movieTypeKeys = Object.keys(MovieType).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    this.certificateTypeKeys = Object.keys(CertificateType).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
  }

  ngOnInit(): void {
    console.log("called");
    this.buildForm();
    this.addCast();
  }

  buildForm()
  {
    this.movieForm = this.formgroup.group
    ({
      name: ['', ],
      movieImageUrl: ['', []],
      posterImageUrl: ['',[]],
      casts : new FormArray([]),
      language : [0,],
      gener : [0,],
      movieType : [0,],
      certificateType : [0,],
      description : ['',],
      movieLength : [0.00,],
      releaseDate : [null,],  
      numberOfLikes : [0]
      });
  }

  get formControls()
  {
    return this.movieForm.controls;
  }

  get formArray()
  {
    return this.formControls.casts as FormArray;
  }

  castFormGroup()
  {
    this.castForm = this.formgroup.group
    ({
      name: ['', ],
      description : ['',],
      profileImageUrl: [''],
      gender : [0,],
      role : [0,],  
    });
    return this.castForm;
  }

  // Add new Cast to the FormArray
  addCast()
  {
    console.log("add cast");
    this.formArray.push(this.castFormGroup());
  }
  // Remove the added Cast from the formArray
  removeCast(i : number)
  {
    this.formArray.removeAt( i );
  }

  onSubmit()
  {
    
    console.log("form is ",this.movieForm.value);
    this.httpservice.addMovie(this.movieForm.value)
    .subscribe((res : any) => 
    { 
      console.log("returned response",res);
      this.toaster.success("Movie Saved", "Submission Successfull");
      // this.router.navigateByUrl('/home');   
    
    },
    (error : HttpErrorResponse) => 
    {
      console.error("the error is ",error);
    }
    );
  }

}
