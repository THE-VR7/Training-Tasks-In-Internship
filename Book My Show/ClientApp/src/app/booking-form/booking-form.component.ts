import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BookingDetail } from '../Models/BookingDetails';
import { SeatType } from '../Models/Enum';
import { SeatDetail } from '../Models/SeatDetails';
import { showhallprofile } from '../Models/showhallprofile';
import { UserDetail } from '../Models/UserDetails';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styles: [
  ]
})
export class BookingFormComponent implements OnInit {
 @Input() currentshowprofile! : showhallprofile;
  bookingForm!: FormGroup;
  userDetails!: UserDetail;
  UserSubscription! : Subscription;
  
  SampleSeats: Array<string> = ['1', '2', '3', '4','5','6','7','8','9'];
  
  // This will store both the booked as well as non booked seats
  selectedSeats : Array<SeatDetail> = [];
  totalAmount : number = 0;
  totalTickets : number = 0;
  finalSeatsValues : Array<number> = [];
  

  SeatType = SeatType;

  public frontSeats : Array<SeatDetail> = [];
  public middleSeats : Array<SeatDetail> = [];
  public lastSeats : Array<SeatDetail> = [];
  


  constructor(private formBuilder : FormBuilder, private auth : AuthenticationService,private toaster : ToastrService, private httpservice : HttpService, public route: ActivatedRoute, private router : Router) 
  { 
    // this.currentshowprofile = history.state;
  }
 
  ngOnInit(): void {
    // console.log(this.currentshowprofile);    
    // this.getAvailableSeats();
    // Authentication service to get the Current Logged In User
    this.UserSubscription = this.auth.currentUser.subscribe(user => {
      this.userDetails = user;
      console.log("the user is ",this.userDetails);
    }); 

  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    this.currentshowprofile = (changes.currentshowprofile.currentValue);
    console.log("in booking form method : ",this.currentshowprofile)  
    this.getAvailableSeats();
  }

  ngOnDestroy()
  {
    this.UserSubscription.unsubscribe();
  }


    getAvailableSeats()
    {
      let totalSeats = this.currentshowprofile?.movieHall?.numberOfSeats;
      var bookedSeats = this.currentshowprofile?.totalSeatsBooked;
      let frontRowlastseat = this.currentshowprofile?.movieHall?.frontRowLastSeat;
      let middleRowlastseat = this.currentshowprofile?.movieHall?.middleRowLastSeat;
      
      let cnt = 0;
      
      for(let i=1 ; i <= totalSeats ; i++)
      {
        var currseat : SeatDetail = {
          seatNumber : i,
          isBooked : false,
          seatType : SeatType.Other
        };

        if(this.checkIfSeatIsBooked(i,bookedSeats) != -1)
        {
          cnt++;
          currseat.isBooked = true; 
        }

        if(i<=frontRowlastseat)
        {
          currseat.seatType = SeatType.FrontRow;
          this.frontSeats.push(currseat);
        }
        else if(i<=middleRowlastseat)
        {
          currseat.seatType = SeatType.MiddleRow;
          this.middleSeats.push(currseat);
        }
        else
        {
          currseat.seatType = SeatType.LastRow;
          this.lastSeats.push(currseat);
        } 
      }
      console.log("front are : ",this.frontSeats," middle seats are ",this.middleSeats," and last seats are : ",this.lastSeats," cnt is ",cnt);
    }

    checkIfSeatIsBooked(seatnumber : number, bookedSeats : Array<SeatDetail>)
    {
      let index : number  = 0;
      let finalIndexValue : number = -1;
      bookedSeats.forEach((seat : SeatDetail) => {
        if(seat.seatNumber == seatnumber)
        {
          finalIndexValue = index;
        }
        index++;
      });
      return finalIndexValue;
    } 

    bookTickets()
    {  
      if( this.userDetails == undefined ||  !this.IsNotNullandUndefined(this.userDetails))
      {
        this.toaster.warning("Login to Book Tickets", "Booking Unsuccessfull");
        this.ngOnDestroy();
        document.getElementById('closeModal')?.click();
        this.router.navigateByUrl('/login');
        return ;
      }
      
      this.getSelectedSeatsValue();

      var bookingDetail : BookingDetail = {
        seatNumbers : this.finalSeatsValues,
        userId : this.userDetails?.id,
        amountPaid : this.totalAmount,
        showId : this.currentshowprofile?.showRecord?.id
      };
      // bookingDetail.seatNumber = this.selectedSeatsValues;

      console.log("booking form value in component - ",bookingDetail);
      this.httpservice.savebooking(bookingDetail)
      .subscribe((result) => 
      {
        console.log("contact saved ",result);
        this.toaster.success("Ticket Booked", "Booking Successful");
        document.getElementById('closeModal')?.click();
        this.router.navigateByUrl('/home');
      }, 
      (error : HttpErrorResponse) => 
      {
        console.error("the error is ",error);
      }
      ); 
    }

    IsNotNullandUndefined(val : any)
    {
      if(val == null || val == undefined)
        {
          return false;
        }
      return true;  
    }

    
    // Toggle the Seat 
    ToggleSeat(seatDetail : SeatDetail) {
      let index : number = this.checkIfSeatIsBooked(seatDetail.seatNumber,this.selectedSeats);
      let price : number = this.getAmountofSeat(seatDetail);
      if(index != -1)
      {
        this.totalAmount = this.totalAmount - price;
        this.selectedSeats.splice(index,1);
      }
      else
      {
        this.totalAmount += price;
        this.selectedSeats.push(seatDetail);
      }
      this.totalTickets = this.selectedSeats.length;
    }

    // Get the Number of Seats which are Booked in the end
    getSelectedSeatsValue() {
      this.selectedSeats.forEach(seat => {
        this.finalSeatsValues.push(seat.seatNumber);
      }); 
    }

    // Get the Amount of the Seat based on the type of the Seat
    getAmountofSeat(seatDetail : SeatDetail) : number
    {
      let price : number = 0;
      switch(seatDetail.seatType)
      {
        case SeatType.FrontRow : price = this.currentshowprofile?.movieHall?.frontRowSeatsPrice;
          break;
        case SeatType.MiddleRow : price = this.currentshowprofile?.movieHall?.middleRowSeatsPrice;
          break;
        case SeatType.LastRow :   price = this.currentshowprofile?.movieHall?.lastRowSeatsPrice;
          break;
        default : price = 0;  
      }
      return price;
    }
}
