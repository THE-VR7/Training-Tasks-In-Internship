using Models.CoreModels;
using Models.DataModels;
using Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Services.Interfaces;

namespace BookMyShow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : Controller
    {
        private readonly ILogger<SearchController> _logger;

        private readonly ISearchService _service;
        public SearchController(ILogger<SearchController> logger, ISearchService service)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet("{name}")]
        [Route("GetShowsByName/{name}")]
        public List<MovieProfile> GetShowsByName([FromRoute]string name)
        {
            var shows = _service.GetMovieByName(name);
            return shows;
        }

        public List<MovieProfile> GetShowsByTags(string tag)
        {
            var shows = _service.GetMovieByTags(tag);
            return shows;
        }

    }
}
