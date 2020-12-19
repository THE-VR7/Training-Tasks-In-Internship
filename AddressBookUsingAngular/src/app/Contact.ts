import { isNullOrUndefined } from 'util';

var globalId:number = 1;

export class Contact {
  id :number; 
  name:string;
  email:string;
  mobile:number;
  landline:number;
  website:string;
  address:string;

  constructor(args){
      this.id =  isNullOrUndefined(args.id) ? globalId++ : args.id;
      this.name = args.name;
      this.email = args.email;
      this.mobile = args.mobile;
      this.landline = args.landline;
      this.website = args.website;
      this.address = args.address;
  }


}