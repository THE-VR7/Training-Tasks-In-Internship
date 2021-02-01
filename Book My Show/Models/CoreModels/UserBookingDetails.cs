using System;
using System.Collections.Generic;
using System.Text;

namespace Models.CoreModels
{
    public class UserBookingDetails
    {
        public List<int> SeatNumbers { get; set; }
        public ShowRecord Show { get; set; }
        public string UserId { get; set; }
        public int AmountPaid { get; set; }
        public bool IsBooked { get; set; }
    }
}
