using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DataModels
{
    class Show
    {
        public int Id { get; set; }
        public int ShowId { get; set; }
        public int CostOfShow { get; set; }
        public DateTime DateOfShow { get; set; }
        public int MovieHallId { get; set; }
        public TimeSpan ShowTiming { get; set; }
    }
}
