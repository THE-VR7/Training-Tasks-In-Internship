using Models.CoreModels;
using Models.DataModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Interfaces
{
    public interface IBookingService
    {
        List<ShowRecord> GetBookings();
        Theatre GetMovieHallById(int id);
        void AddBooking(TicketProfile booking);
        List<ShowAllDetails> GetHallForMovieProfiles(int MovieId);
        List<SeatDetail> GetBookedSeats(int showsTimeTableId);
        List<ShowRecord> GetShowsTimeTableByMovieId(int movieId);
    }
}
