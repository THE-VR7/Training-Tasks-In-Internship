import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Contact } from '../Contact';
import {ContactServiceService} from '../Services/contact-service.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: []
})
export class ContactFormComponent implements OnInit,OnDestroy {
// regeex for the website address
re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+[\.][a-zA-Z]{2,5}[\.]{0,1}$/; 

isEdit:boolean = false;
newContact:Contact;
editService: Subscription;
originalCardId : number;
contactForm: FormGroup;
isFormSubmitted: boolean;
validationMessages:any;

constructor(private formBuilder : FormBuilder , private route : Router, private service : ContactServiceService) { }

  ngOnInit() {
    // Initializing the error messages
    this.errorMessages();

    this.editService = this.service.contact.subscribe(newcontact => {
      this.newContact = newcontact.contact;
      this.isEdit = newcontact.isEdit;
      if(this.isEdit && !isNullOrUndefined(this.newContact))
      {
        this.originalCardId = this.newContact.id;
        this.buildForm(this.newContact);
      }
      else
      {
        this.buildForm(undefined);
      }
    })
  }

  ngOnDestroy(): void {
    this.editService.unsubscribe();
  }

  errorMessages(){
    this.validationMessages = {
      name: [
        { type: 'required', message: 'Name is required.' },
        { type: 'minlength', message:'Enter atleast 4 Characters' }
    ],
      email: [
          { type: 'required', message: 'email is required.' },
          { type: 'pattern', message: 'Please enter a valid email' },
      ],
      mobile:[
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

buildForm(contact: Contact = null){
this.contactForm = this.formBuilder.group({
  name   : [!isNullOrUndefined(contact) ? contact.name : '',[Validators.required,Validators.minLength(4)]],
  email  : [!isNullOrUndefined(contact) ? contact.email : '',[Validators.required,Validators.pattern("^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+([.]+[a-zA-Z0-9]+)+$")]],
  mobile : [!isNullOrUndefined(contact) ? contact.mobile : '',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*")]],
  landline : [!isNullOrUndefined(contact) ? contact.landline : '',[Validators.minLength(10),Validators.pattern("[0-9]*")]],
  website : [!isNullOrUndefined(contact) ? contact.website : '',[Validators.pattern(this.re)]],
  address : [!isNullOrUndefined(contact) ? contact.address : '']
});
}

saveContact(){
this.isFormSubmitted = true;
if(!this.isEdit)
  this.service.addContact(new Contact(this.contactForm.value))
else
{
  this.contactForm.value['id'] = this.originalCardId;
  this.service.editContact(new Contact(this.contactForm.value))
}  
this.close_modal();
}

// Close this model and Route to Home Page
close_modal(){
  this.route.navigateByUrl('/');
}

}
