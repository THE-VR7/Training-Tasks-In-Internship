using Models.CoreModels;
using Models.DataModels;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using PetaPoco;
using System.Linq;
using System.Diagnostics;

namespace Services.Implementations
{
    public class BookingService : IBookingService
    {
        private readonly AutoMapper.IMapper _mapper;
        public Database Db { get; set; }
        public BookingService(AutoMapper.IMapper mapper, Database db)
        {
            this.Db = db;
            _mapper = mapper;
        }

        public List<ShowRecord> GetBookings()
        {
            var bookings = this.Db.Query<ShowRecord>("Select * from Bookings").ToList();
            return bookings;
        }

        public void AddBooking(TicketProfile booking)
        {
            booking.IsBooked = true;
            booking.SeatNumbers.ForEach(seatNumber => {
                var command = "insert into BookingDetails(SeatNumber,ShowId, AmountPaid,UserId,IsBooked)" + $"values( {seatNumber}, @ShowId, @AmountPaid,@UserId,@IsBooked)";
                this.Db.Execute(command, booking);
            });
        }

        public Theatre GetMovieHallById(int id)
        {
            var command = "select * from Theatres where Id=@id";
            Theatre hall = this.Db.Query<Theatre>(command, new { id = id }).FirstOrDefault();
            return hall;
        }

        public List<ShowAllDetails> GetHallForMovieProfiles(int movieId = -1)
        {
            Debug.WriteLine("Reached appdb {0}", movieId);
            DateTime currdate = DateTime.Now;
            //ORDER BY DateOfShow and DateOfShow>={currdate}
            var command = $"Select * from Shows where MovieId=@movieId";
            var selectedShows = this.Db.Query<ShowRecord>(command, new { movieId }).ToList();
            List<ShowAllDetails> showHalls = new List<ShowAllDetails>();
            selectedShows.ForEach((ShowRecord show) =>
            {
                ShowAllDetails currentProfile = new ShowAllDetails();
                currentProfile.TotalSeatsBooked = GetBookedSeats(show.Id);
                currentProfile.MovieHall = GetMovieHallById(show.TheatreId);
                currentProfile.ShowRecord = show;
                showHalls.Add(currentProfile);
            });
            return showHalls;
        }

        public List<ShowRecord> GetShowsTimeTableByMovieId(int movieId)
        {
                var selectedTimeTableRows = this.Db.Query<ShowRecord>("Select * from Shows where ShowId=@movieId", new { movieId = movieId }).ToList();
                return selectedTimeTableRows;
        }

        public List<SeatDetail> GetBookedSeats(int showId)
        {
            
                var selectedSeats = this.Db.Query<SeatDetail>("Select SeatNumber,IsBooked from BookingDetails where ShowId=@showId and IsBooked=1", new { showId }).ToList();
                return selectedSeats;
        }
    }
}
