using Models.CoreModels;
using Models.DataModels;
using Services;
using Models.Enums;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Services.Interfaces;

namespace BookMyShow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly ILogger<MovieController> _logger;

        private readonly IMovieService _service;
        public MovieController(ILogger<MovieController> logger, IMovieService service)
        {
            _service = service;
            _logger = logger;
        }

        // Get all the Movies from the database
        [HttpGet]
        [Route("")]
        public List<MovieProfile> GetMovies()
        {
            var movies = _service.GetMovies();
            return movies;
        }

        [HttpGet("{id}")]
        [Route("GetMovieById/{id}")]
        public MovieProfile GetMovieById([FromRoute]int id)
        {
            var movie = _service.GetMovieById(id);
            return movie;
        }

        [HttpGet("{language}")]
        [Route("GetMoviesByLanguage/{language}")]
        public List<MovieProfile> GetMoviesByLanguage([FromRoute]Language language)
        {
                var movies = _service.GetMoviesByLanguage(language);
                return movies;
        }

        [HttpGet("{gener}")]
        [Route("GetMoviesByGener/{gener}")]
        public List<MovieProfile> GetMoviesByGener([FromRoute] Gener gener)
        {
                var movies = _service.GetMoviesByGener(gener);
                return movies;   
        }

        [HttpGet("{format}")]
        [Route("GetMoviesByGener/{format}")]
        public List<MovieProfile> GetMoviesByGener([FromRoute] MovieType format)
        {
                var movies = _service.GetMoviesByType(format);
                return movies;
        }

        [HttpPost]
        [Route("SaveMovie")]
        public Object SaveMovie([FromBody] MovieProfile movie)
        {
            
                var outputMovie = _service.AddMovie(movie);

            int id = Convert.ToInt32(outputMovie);

                _service.AddCast(id , movie.Casts);
                return (new { message = "executed" });
            
        }


    }
}
