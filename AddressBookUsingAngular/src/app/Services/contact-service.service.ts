import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Contact } from '../Contact';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor() { }
  contactView : ContactCardView  = new ContactCardView({contact:undefined, isEdit:false});
  private messageSource = new BehaviorSubject<ContactCardView>(this.contactView);
  contact = this.messageSource.asObservable();


  addContact(contact:Contact)
  {
    this.messageSource.next(new ContactCardView({contact: contact, isEdit: false}));
  }

  editContact(contact:Contact)
  {
    this.messageSource.next(new ContactCardView({contact: contact, isEdit: true}));
  }
}

export class ContactCardView{
  contact: Contact;
  isEdit: boolean;

  constructor(args){
    this.contact = args.contact;
    this.isEdit = args.isEdit;
  }
}
