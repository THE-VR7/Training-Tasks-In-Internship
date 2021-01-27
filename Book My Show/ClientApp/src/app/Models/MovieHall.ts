export interface MovieHall{
    id : number;
    name : string;
    address : string;
    category : string;
    frontRowSeatsPrice : number;
    middleRowSeatsPrice : number;
    lastRowSeatsPrice : number;
    frontRowLastSeat : number,
    lastRowLastSeat : number,
    middleRowLastSeat : number,
    numberOfSeats : number;
}