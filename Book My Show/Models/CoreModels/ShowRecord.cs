using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Models.CoreModels
{
    public class ShowRecord
    {
        [Key]
        public int Id { get; set; }
        public int MovieId { get; set; }
        public DateTime DateOfShow { get; set; }
        public int TheatreId { get; set; }
        public TimeSpan ShowTiming { get; set; }
    }
}
