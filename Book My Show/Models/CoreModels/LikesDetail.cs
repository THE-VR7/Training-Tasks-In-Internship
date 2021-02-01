using NPoco;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.CoreModels
{
    [TableName("Likes")]
    [PrimaryKey("Id", AutoIncrement = true)]
    public class LikesDetail
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int MovieId { get; set; }
        public bool IsLiked { get; set; }
    }
}
