using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Authentication
{
    public class AuthenticationDb : IdentityDbContext
    {
        public AuthenticationDb(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<ApplicationUser> User { get; set; }
    }
}
