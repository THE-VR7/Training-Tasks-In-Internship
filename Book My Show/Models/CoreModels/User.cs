using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Models.CoreModels
{
    public class User
     {
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        //public int AlternateNumber { get; set; }
        //public DateTime DateOfBirth { get; set; }
        //public string Gender { get; set; }
        //public string Married { get; set; }
        //public string Address { get; set; }
        //public string Image { get; set; }

        public string Password { get; set; }

    }
}
