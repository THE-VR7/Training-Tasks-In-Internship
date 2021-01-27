// export class BookingDetail
// {
//     public id! : number;
//     public seatNumber! : number;
//     public showsTimeTableId! : number;
//     public userId! : number;
//     public userMobileNo! : string;
//     public userEmail! : string;
//     public amountPaid! : number;
// }
 

export interface BookingDetail
{
     seatNumbers : Array<number>;
     showId : number;
     userId : string; 
     amountPaid : number; 
}