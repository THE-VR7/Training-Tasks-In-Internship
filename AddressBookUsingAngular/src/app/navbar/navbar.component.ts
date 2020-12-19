import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../Services/contact-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private service : ContactServiceService) { }

  ngOnInit() {
  }

  // Pass an undefined contact to service when we have to add a form 
  add_contact(){
    this.service.addContact(undefined);
  }

}
