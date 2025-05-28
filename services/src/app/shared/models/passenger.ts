export interface Ipassenger{
    id: number;
    fullname: string;
    checkindate: string |null;
    checkinstatus: boolean;
    children:null|Array<Ichild>;
 }

 export interface Ichild{
    name:string
 }


