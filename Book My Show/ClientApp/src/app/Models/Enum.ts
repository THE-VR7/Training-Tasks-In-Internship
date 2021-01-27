
    export enum Language
    {
        Other = 0,
        Hindi,   
        Engilsh,
        Tamil,
        Telgu,
    }

    export const LanguageLabel = new Map<number,string>([
        [Language.Other,"Other"],
        [Language.Hindi,"Hindi"],
        [Language.Engilsh,"Engilsh"],
        [Language.Tamil,"Tamil"],
        [Language.Telgu,"Telgu"]
    ]);


    export enum Gender
    {
        Other = 0,        
        Male ,
        Female ,
    }

    export enum Role
    {
        Other,
        Actor,
        Actress,
        SupportingActor,
        SupportingActress,        
        Producer,
        Director,
    }
    export const RoleLabel = new Map<Role,string>([
        [Role.Other,"Other"],
        [Role.Actor,"Actor"],
        [Role.Actress,"Actress"],
        [Role.SupportingActor,"Supporting Actor"],
        [Role.SupportingActress,"Supporting Actress"],
        [Role.Producer,"Producer"],
        [Role.Director,"Director"],
    ]);

    

    export enum Gener
    {   
        Other,   
        Action,
        Comedy,
        Drama,
        Fantasy,
        Horror,
        Mystery,
        Romance,
        Thriller
    }

    export const GenresLabel = new Map<Gener,string>([
        [Gener.Other,"Other"],
        [Gener.Action,"Action"],
        [Gener.Comedy,"Comedy"],
        [Gener.Drama,"Drama"],
        [Gener.Fantasy,"Fantasy"],
        [Gener.Horror,"Horror"],
        [Gener.Mystery,"Mystery"],
        [Gener.Romance,"Romance"],
        [Gener.Thriller,"Thriller"],
    ]);

    export enum MovieType
    {
        Other,
        _2D,
        _3D,
        IMAX,
        IMAX3D,
    }

    export const MovieTypeLabel = new Map<number,string>([
        [MovieType.Other,"Other"],
        [MovieType._2D,"2D"],
        [MovieType._3D,"3D"],
        [MovieType.IMAX,"IMAX"],
        [MovieType.IMAX3D,"IMAX 3d"]
    ]);

    export enum CertificateType
    {
        Other,
        U,
        UA,
        A,
    }

    export enum SeatType
    {
        Other,
        FrontRow,
        MiddleRow,
        LastRow,
    }
