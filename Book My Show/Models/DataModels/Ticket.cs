using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DataModels
{
    public class Ticket
    {
        public int Id { get; set; }
        public string SeatNumber { get; set; }
        public string ShowId { get; set; }
        public string UserId { get; set; }
        public string AmountPaid { get; set; }
        public string IsBooked { get; set; }
        public DateTime IsCreated { get; set; }
        public DateTime IsUpdated { get; set; }
    }
}
