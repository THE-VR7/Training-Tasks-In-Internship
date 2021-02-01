using Models.CoreModels;
using Models.DataModels;
using Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IMovieService
    {
        List<MovieProfile> GetMovies();
        List<Theatre> GetTheatres();
        List<MovieProfile> GetMoviesByLanguage(Language language);
        List<MovieProfile> GetMoviesByGener(Gener gener);
        List<MovieProfile> GetMoviesByType(MovieType format);
        MovieProfile GetMovieById(int id);
        List<Cast> GetCastsInMovie(int movieId);
        int GetLikesForMovie(int movieId);
        object AddMovie(MovieProfile movie);
        void AddShow(ShowRecord show);
        void AddCast(int movieId, List<Cast> casts);
        void DeleteMovie(MovieProfile movie);

    }
}
