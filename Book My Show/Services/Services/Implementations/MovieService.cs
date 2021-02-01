using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;
using PetaPoco;
using PetaPoco.Providers;
using System.Configuration;
using System.Diagnostics;
using Models.CoreModels;
using Models.DataModels;
using Models.Enums;
using Services.Interfaces;

namespace Services.Implementations
{
    public class MovieService : IMovieService
    {
        private readonly AutoMapper.IMapper _mapper;
        public Database Db { get; set; }

        public MovieService(AutoMapper.IMapper mapper, Database db)
        {
            this.Db = db;
            _mapper = mapper;
        }

        public void DeleteMovie(MovieProfile movie)
        {
            this.Db.Delete(movie);
        }

        public object AddMovie(MovieProfile movie)
        {   
            var currmovie = _mapper.Map<Movie>(movie);
            //Debug.WriteLine("Currmovie is {0}", currmovie);
            var obj = this.Db.Insert("Movies", "Id", true, currmovie);
            return obj;
        }

        public void AddCast(int movieId, List<Cast> casts)
        {
            var len = casts.Count();
            for (int i = 0; i < casts.Count(); i++)
            {
                var currCast = casts.ElementAt(i);
                currCast.MovieId = movieId;
                this.Db.Insert("Casts", "Id", true, currCast);
            }
        }

        public void AddShow(ShowRecord show)
        {
           this.Db.Insert("Theatres", "Id", true, show);
        }


        public List<MovieProfile> GetMovies()
        {
            var selecetedMovies = this.Db.Query<Movie>("Select * from Movies").ToList();
            var selectedMoviesProfiles = _mapper.Map<List<MovieProfile>>(selecetedMovies);
            selectedMoviesProfiles.ForEach((MovieProfile movie) =>
            {
                movie.NumberOfLikes = GetLikesForMovie(movie.Id);
            });
            selectedMoviesProfiles = selectedMoviesProfiles.OrderByDescending(m => m.NumberOfLikes).ToList();
            return selectedMoviesProfiles;
        }

        public List<Theatre> GetTheatres()
        {
            var theatres = this.Db.Query<Theatre>("Select * from Theatres").ToList();
            return theatres;
        }

        public MovieProfile GetMovieById(int id)
        {
            var command = "select * from Movies where Id=@id";
            Movie movie = this.Db.Query<Movie>(command, new { id }).FirstOrDefault();
            MovieProfile movieprofile = _mapper.Map<MovieProfile>(movie);
            if (movieprofile == null)
                return null;
            movieprofile.NumberOfLikes = GetLikesForMovie(movieprofile.Id);
            movieprofile.Casts = GetCastsInMovie(movieprofile.Id);
            return movieprofile;
        }

        public List<Cast> GetCastsInMovie(int movieId)
        {
            var command = "select * from Casts where MovieId=@movieId";
            List<Cast> casts = this.Db.Query<Cast>(command, new { movieId }).ToList();
            return casts;
        }

        public int GetLikesForMovie(int movieId)
        {
            var command = "select * from Likes where MovieId=@movieId";
            var numberOfLikes = this.Db.Query<int>(command, new { movieId }).ToList().Count();
            return numberOfLikes;
        }

        public List<MovieProfile> GetMoviesByLanguage(Language language)
        {
            var command = "select * from Movies where Language = '@language'";
            var searchedMovies = this.Db.Query<MovieProfile>(command).ToList();
            searchedMovies.ForEach((MovieProfile movie) => {
                movie.NumberOfLikes = GetLikesForMovie(movie.Id);
            });
            return searchedMovies;
        }

        public List<MovieProfile> GetMoviesByGener(Gener gener)
        {
            var command = "select * from Movies where Gener = '@gener'";
            var searchedResult = this.Db.Query<MovieProfile>(command).ToList();
            searchedResult.ForEach((MovieProfile movie) => {
                movie.NumberOfLikes = GetLikesForMovie(movie.Id);
            });
            return searchedResult;
        }

        public List<MovieProfile> GetMoviesByType(MovieType format)
        {
            var command = "select * from Movies where MovieType = '@format'";
            var searchedResult = this.Db.Query<MovieProfile>(command).ToList();
            searchedResult.ForEach((MovieProfile movie) => {
                movie.NumberOfLikes = GetLikesForMovie(movie.Id);
            });
            return searchedResult;
        }

    }
}
