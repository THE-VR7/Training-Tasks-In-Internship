using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using PetaPoco;
using Models.CoreModels;
using System.Linq;
using Models.DataModels;

namespace Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly AutoMapper.IMapper _mapper;
        public Database Db { get; set; }
        public UserService(AutoMapper.IMapper mapper, Database db)
        {
            this.Db = db;
            _mapper = mapper;
        }

        public List<TicketProfile> GetBookingsByUserId(int userId)
        {
            var selectedTickets = this.Db.Query<Ticket>("Select * from BookingDetails where UserId=@userId ", new { userId }).ToList();
            List<TicketProfile> ticketProfilesList = new List<TicketProfile>();
            return null;
        }


        public List<LikesDetail> GetLikesOfUser(string userId)
        {
            var likes = this.Db.Query<LikesDetail>("Select * from Likes where UserId=@userId ", new { userId }).ToList();
            return likes;
        }

        public void AddLike(LikesDetail like)
        {
            this.Db.Insert("Likes", "Id", like);
        }



        //public ApplicationUser GetUserByEmail(string email)
        //{
        //    using (IDatabase dbconnection = Connection)
        //    {
        //        var command = "select * from Users where Email=@email";
        //        ApplicationUser user = _db.Query<ApplicationUser>(command, new { Email = email }).FirstOrDefault();
        //        return user;
        //    }
        //}

        //public void UpdateUser(ApplicationUser user)
        //{
        //    using (IDatabase dbConnection = Connection)
        //    {
        //        _db.Update(user);
        //    }
        //}

        //public void DeleteUser(ApplicationUser user)
        //{
        //    using (IDatabase dbConnection = Connection)
        //    {
        //        _db.Delete(user);
        //    }
        //}

        //ApplicationUser IAppDb.UpdateUser(ApplicationUser user)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
