using Models.CoreModels;
using Models.DataModels;
using Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Services.Interfaces;

namespace BookMyShow.Controllers
{
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly ILogger<BookingController> _logger;

        private readonly IBookingService _service;
        public BookingController(ILogger<BookingController> logger, IBookingService service)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public List<ShowRecord> GetBookings()
        {
            var bookings = _service.GetBookings();
            return bookings;
        }

        [HttpPost]
        [Route("api/[controller]")]
        public Boolean AddBooking([FromBody] TicketProfile bookingdetail)
        {
            bookingdetail.IsBooked = true;
            //Debug.WriteLine("called this action method addbooking {0} {1}", bookingdetail?.SeatNumber, bookingdetail?.ShowsTimeTableId);
            _service.AddBooking(bookingdetail);
            return true;
        }

        [HttpGet("{movieId}")]
        [Route("api/[controller]/GetHallForMovieProfiles/{movieId}")]
        public List<ShowAllDetails> GetHallForMovieProfiles([FromRoute]int movieId)
        {
            Debug.WriteLine("called this action method gethall for movie profiles {0}",movieId);
            var halls = _service.GetHallForMovieProfiles(movieId);
            return halls;
        }

        [HttpGet("{showsTimeTableId}")]
        [Route("api/[controller]/GetBookedseats/{showsTimeTableId}")]
        public List<SeatDetail> GetBookedseats([FromRoute]int showsTimeTableId)
        {
            var seats = _service.GetBookedSeats(showsTimeTableId);
            return seats;
        }

        [HttpGet]
        [Route("api/[controller]/showstimetable")]
        public List<ShowRecord> GetShowTimeTableByMovieId([FromRoute]int movieid)
        {
            var seats = _service.GetShowsTimeTableByMovieId(movieid);
            return seats;
        }

    }
}
