using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Models.DataModels;
using Models.Enums;

namespace Models.CoreModels
{
    public class MovieProfile
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string MovieImageUrl { get; set; }
        public string PosterImageUrl { get; set; }
        public List<Cast> Casts { get; set; }
        public Language Languague { get; set; }
        public Gener Gener { get; set; }
        public MovieType MovieType { get; set; }
        public CertificateType CertificateType { get; set; }
        public string Description { get; set; }
        public double MovieLength { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public int NumberOfLikes { get; set; }

    }
}
