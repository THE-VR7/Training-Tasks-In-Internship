import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { Contact } from '../Contact';
import {ContactServiceService} from '../Services/contact-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: []
})
export class ContactDetailsComponent implements OnInit {

  @Output() contactDeleteEvent = new EventEmitter<Contact>();
  @Input() contact:Contact; 
  editService: any;
  constructor( private service : ContactServiceService) { }

  ngOnInit() {
  }


  // Function to delete the contact card
  delete_the_contact_card(){
    let contactToBeDeleted = this.contact;
    this.contactDeleteEvent.emit(contactToBeDeleted);
  }
  
  edit_contact_bttn(){
    this.service.editContact(this.contact);
  }

};


