import { SeatType } from "./Enum";

export interface SeatDetail{
    seatNumber : number,
    isBooked : boolean,
    seatType : SeatType
}