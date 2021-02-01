using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Text;

namespace Models.Enums
{
    public enum Language
    {
        [Description("Other")]
        Other = 0,
        [Description("Hindi")]
        Hindi,
        [Description("English")]
        Engilsh,
        [Description("Tamil")]
        Tamil,
        [Description("Telgu")]
        Telgu,
    }

    public enum Gender
    {
        [Description("Other")]
        Other = 0,
        [Description("Male")]
        Male = 1,
        [Description("Female")]
        Female = 2,
    }

    public enum Role
    {

        [Description("Other")]
        Other,
        [Description("Actor")]
        Actor,
        [Description("Actress")]
        Actress,
        [Description("Supporting Actor")]
        SupportingActor,
        [Description("Supporting Actress")]
        SupportingActress,
        [Description("Producer")]
        Producer,
        [Description("Director")]
        Director,
    }

    public enum Gener
    {
        [Description("Other")]
        Other,
        [Description("Action")]
        Action,
        [Description("Comedy")]
        Comedy,
        [Description("Drama")]
        Drama,
        [Description("Fantasy")]
        Fantasy,
        [Description("Horror")]
        Horror,
        [Description("Mystery")]
        Mystery,
        [Description("Romance")]
        Romance,
        [Description("Thriller")]
        Thriller
    }

    public enum MovieType
    {
        [Description("Other")]
        Other,
        [Description("2D")]
        _2D,
        [Description("3D")]
        _3D,
        [Description("IMAX")]
        IMAX,
        [Description("IMAX 3D")]
        IMAX3D,
    }

    public enum CertificateType
    {
        [Description("Other")]
        Other,
        [Description("All Age Groups")]
        U,
        [Description("Above 12 yrs")]
        UA,
        [Description("Above 18 yrs")]
        A,
    }

    public enum SeatType
    {
        [Description("Other")]
        Other,
        [Description("First Row Seat")]
        FrontRow,
        [Description("Middle Row Seat")]
        MiddleRow,
        [Description("Last Row Seat")]
        LastRow,
    }

}


// Access the Description of the Enum
//public string SlotType
//{
//    get
//    {
//        return MyExtensions.GetDescription(this.TypeOfSlot);
//    }
//}