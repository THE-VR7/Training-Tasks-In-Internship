using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Authentication
{
    public class ApplicationUser : IdentityUser
    {

        [Column(TypeName ="varchar(MAX)")]
        public string FullName { get; set; }
        
        [Column(TypeName ="bit")]
        public bool IsAdmin { get; set; }
    }
}
