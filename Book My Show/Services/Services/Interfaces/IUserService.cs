using Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Interfaces
{
    public interface IUserService
    {
        public List<LikesDetail> GetLikesOfUser(string userId);
        public void AddLike(LikesDetail like);

        // User Controller Methods
        //ApplicationUser GetUserByEmail(string email);
        //void AddUser(ApplicationUser user);

        //ApplicationUser UpdateUser(ApplicationUser user);
        //void DeleteUser(ApplicationUser user);
    }
}
