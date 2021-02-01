using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.CoreModels
{
    public class UserDetailProfile
    {
        [Key]
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string MobileNumber { get; set; }
        public bool IsAdmin { get; set; }
        public List<LikesDetail> Likes { get; set; }

    }
}
