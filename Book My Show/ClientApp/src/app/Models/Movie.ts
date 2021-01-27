import { Cast } from "./Cast";
import { CertificateType, Gener, Language, MovieType } from "./Enum";

export interface Movie{
        id : number
        name : string
        movieImageUrl : string,
        posterImageUrl : string,
        casts : Array<Cast>,
        languague : number,
        gener : number,
        movieType : number,
        certificateType : number
        description : string
        releaseDate : Date
        numberOfLikes : number
        movieLength : number
}  