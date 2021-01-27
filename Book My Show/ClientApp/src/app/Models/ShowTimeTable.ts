import { Time } from "@angular/common";

export interface ShowsTimeTable
{
    id : number;
    movieId : number;
    theatreId : number;
    showTiming : Time;
    dateOfShow : Date;
}
