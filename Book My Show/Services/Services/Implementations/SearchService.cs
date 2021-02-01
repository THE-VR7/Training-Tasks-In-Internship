using Models.CoreModels;
using Models.DataModels;
using PetaPoco;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Services.Implementations
{
    public class SearchService : ISearchService
    {
        private readonly AutoMapper.IMapper _mapper;
        public Database Db { get; set; }
        public SearchService(AutoMapper.IMapper mapper, Database db)
        {
            this.Db = db;
            _mapper = mapper;
        }

        public List<MovieProfile> GetMovieByName(string name)
        {
            var command = $"select * from Movies where LOWER(Name) Like LOWER('{name}%')";
            var searchedResult = this.Db.Query<Movie>(command).ToList();
            var selectedMovies = _mapper.Map<List<MovieProfile>>(searchedResult);
            return selectedMovies;
        }

        public List<MovieProfile> GetMovieByTags(string tag)
        {
            var command = "select * from Movies where Tags Like '%@name%'";
            var searchedResult = this.Db.Query<MovieProfile>(command).ToList();
            return searchedResult;
        }

        
    }
}
