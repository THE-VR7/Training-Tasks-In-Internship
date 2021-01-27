import { BookingDetail } from "./BookingDetails";
import { MovieHall } from "./MovieHall";
import { SeatDetail } from "./SeatDetails";
import { ShowsTimeTable } from "./ShowTimeTable";

export interface showhallprofile 
{
    totalSeatsBooked : Array<SeatDetail>;
    movieHall : MovieHall;
    showRecord : ShowsTimeTable;
}   