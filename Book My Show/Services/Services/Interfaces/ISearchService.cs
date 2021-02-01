using Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Interfaces
{
    public interface ISearchService
    {
        List<MovieProfile> GetMovieByName(string name);
        List<MovieProfile> GetMovieByTags(string tag);
    }
}
