using Models.CoreModels;
using Models.DataModels;
using Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Models;
using Models.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Services.Interfaces;

namespace BookMyShow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        private readonly IUserService _service;

        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;
        private readonly AutoMapper.IMapper _mapper;

        public UserController(AutoMapper.IMapper mapper, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ILogger<UserController> logger, IUserService service, IOptions<ApplicationSettings> appSettings)
        {
            _mapper = mapper;
            _service = service;
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Register")]
        // : /api/User/Register
        public async Task<Object> PostApplicationUser(User user)
        {
            var applicationUser = _mapper.Map<ApplicationUser>(user);
            try
            {
                var result = await _userManager.CreateAsync(applicationUser, user.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        [HttpPost]
        [Route("Login")]
        public async Task<Object> Login(UserLoginProfile user)
        {
            var selecteduser = await _userManager.FindByNameAsync(user.UserName);
            if(selecteduser != null && await _userManager.CheckPasswordAsync(selecteduser, user.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim("UserID", selecteduser.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_SECRET)), SecurityAlgorithms.HmacSha256Signature)

                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "Username or Password is incorrect" });
            }
        }

        [Route("GetUserProfile")]
        [HttpGet]
        [Authorize]
        public async Task<UserDetailProfile> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var applicationuser = await _userManager.FindByIdAsync(userId);
            var userDetailProfile = _mapper.Map<UserDetailProfile>(applicationuser);
            userDetailProfile.Likes = _service.GetLikesOfUser(applicationuser.Id);
            return userDetailProfile;
        }


        [Route("AddUserLike")]
        [HttpPost]
        public bool AddUserLike([FromBody]LikesDetail like)
        {
            this._service.AddLike(like);
            return true;
        }





























        //[HttpGet("{email}")]
        //public void GetUserByEmail(string email)
        //{
        //    _service.GetUserByEmail(email);
        //}

        //[HttpPost]
        //public void AddUser(User user)
        //{
        //    _service.AddUser(user);
        //}

        //[HttpPost]
        //public void DeleteUser(User user)
        //{
        //    _service.DeleteUser(user);
        //}

        //[HttpPost]
        //public void UpdateUser(User user)
        //{
        //    _service.UpdateUser(user);
        //}


    }
}
