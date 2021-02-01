using System;
using System.Collections.Generic;
using System.Text;
using Models.Enums;
using NPoco;

namespace Models.DataModels
{
    [TableName("Movies")]
    [PrimaryKey("Id", AutoIncrement = true)]
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MovieImageUrl { get; set; }
        public string PosterImageUrl { get; set; }
        public int Language { get; set; }
        public int Gener { get; set; }
        public int MovieType { get; set; }
        public int CertificateType { get; set; }
        public string Description { get; set; }
        public double MovieLength { get; set; }
        public DateTime? ReleaseDate { get; set; }
    }
}
