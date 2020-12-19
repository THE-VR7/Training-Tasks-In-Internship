import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Contact } from '../Contact';
import { ContactServiceService } from '../Services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: []
})

export class ContactListComponent implements OnInit, OnChanges {

  @Output() messageEvent = new EventEmitter<Contact>();
  @Input() deleteContactCard: Contact;

  // Preloaded Values in the contacts array
  contacts: Contact[] = new Array();
  selectedli: any;
  addService: Subscription;
  isEdit:boolean = false;

  constructor(private service: ContactServiceService) { }

  // This is done to check for the values of the Contact which is to be deleted , if it is changed and is not null or undefined then delete that contact
  ngOnChanges(changes: SimpleChanges): void {
    if (!isNullOrUndefined(this.deleteContactCard)) {
      this.delete_contact_from_list(this.deleteContactCard);
      this.deleteContactCard = null;
      this.display_the_contact_information(this.contacts[0], 0);
    }
  }

  // This will be called when the component is called and initialized
  ngOnInit(): void {
    this.contacts.push(new Contact({name:"Chandemani Arora",email:"chandmani@technovert.net",mobile:9292992929}));
    this.contacts.push(new Contact({name:"Sashi Pagdala",email:"sashipag@technovert.com",mobile:9292992929}));
    this.contacts.push(new Contact({name:"Pravenn Batula",email: "pravenn@technovert.com",mobile: 92929292929,landline: 92929292929,website: "http://technovert.com",address: "123 Now here Sone StreetMadhapur, Hyderabad,500033"}));
    this.contacts.push(new Contact({name:"Vijay Yalamchilli",email: "vijay@technovert.com", mobile:9292992159}));
    // Display the first contact on the initial load of the document
    this.display_the_contact_information(this.contacts[0], 0);
    
    this.addService = this.service.contact.subscribe(newcontact => {
      let contactToBeAdded = newcontact.contact;
      this.isEdit = newcontact.isEdit
      if (!this.isEdit && !isNullOrUndefined(contactToBeAdded) ) {
        this.add_contact_card(contactToBeAdded);
      }
      else {
        this.edit_contact_card(contactToBeAdded);
      }
    })
  }

  // Display the contact information, event emitter will emit the current Contact which is clicked to the parent Home Component
  display_the_contact_information(currentContact: Contact, index) {
    this.selectedli = index;
    this.messageEvent.emit(currentContact);
  }

  // Function to delete the contact card only when it is not undefined
  delete_contact_from_list(contactCard: Contact) {
    if (isNullOrUndefined(contactCard))
      return;
    let index = this.contacts.findIndex(obj => obj.id == contactCard.id);
    if (index != -1) {
      this.contacts.splice(index, 1);
    }
  }

  // Function to add the contact card in the list
  add_contact_card(newGeneratedCard: Contact) {
    this.contacts.push(newGeneratedCard);
    let lastindex = this.contacts.length - 1;
    this.display_the_contact_information(this.contacts[lastindex], lastindex);
  }

  // Function to edit the contact
  edit_contact_card(contact: Contact) {
    if (isNullOrUndefined(contact))
      return;
    let index = this.contacts.findIndex(obj => obj.id == contact.id);
    if (index != -1) {
      this.contacts[index] = contact;
      this.display_the_contact_information(this.contacts[index],index);
    }
  }


}
