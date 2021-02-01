using System;
using System.Collections.Generic;
using System.Text;

namespace Models.CoreModels
{
    public class TicketProfile
    {
        public List<int> SeatNumbers { get; set; }
        public int ShowId { get; set; }
        public string UserId { get; set; }
        public int AmountPaid { get; set; }
        public bool IsBooked { get; set; }

    }
}
