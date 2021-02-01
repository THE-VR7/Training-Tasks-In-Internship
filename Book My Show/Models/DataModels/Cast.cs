using System;
using System.Collections.Generic;
using System.Text;
using Models.Enums;
using NPoco;

namespace Models.DataModels
{
    [TableName("Casts")]
    [PrimaryKey("Id", AutoIncrement = true)]
    public class Cast
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ProfileImageUrl { get; set; }
        public int Gender { get; set; }
        public int Role { get; set; }
        public int MovieId { get; set; }
    }
}
