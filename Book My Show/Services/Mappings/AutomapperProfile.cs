using AutoMapper;
using Models.CoreModels;
using Models.DataModels;
using Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models.Enums;

namespace Services.Mappings
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Movie, MovieProfile>()
                .ForMember(dest => (Language)dest.Languague, opt => opt.MapFrom(src => src.Language));

            CreateMap<MovieProfile, Movie>()
                .ForMember(dest => dest.CertificateType, opt => opt.MapFrom(src => (int)src.CertificateType));

            CreateMap<User, ApplicationUser>()
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.MobileNumber));

            CreateMap<ApplicationUser, UserDetailProfile>()
                .ForMember(dest => dest.MobileNumber, opt => opt.MapFrom(src => src.PhoneNumber));

        }
    }
}
