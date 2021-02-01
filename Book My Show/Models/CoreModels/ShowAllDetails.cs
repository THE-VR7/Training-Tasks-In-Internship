using Models.DataModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.CoreModels
{
    public class ShowAllDetails
    {
        public List<SeatDetail> TotalSeatsBooked { get; set; }
        public ShowRecord ShowRecord { get; set; }
        public Theatre MovieHall { get; set; }
    }
}
