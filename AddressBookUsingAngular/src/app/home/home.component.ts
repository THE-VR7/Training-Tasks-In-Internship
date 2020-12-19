import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  public currentContact : Contact;
  public contactToBeDeleted : Contact;
  constructor() { }

  ngOnInit() {
  }

  receiveContact(event)
  {
    // console.log("Info send is ",event);
    this.currentContact = event;
  }

  deleteContact(event)
  {
    // console.log("event triggered",event);
    this.contactToBeDeleted = event;
  }

}
