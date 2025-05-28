export interface Itourist{
    id: number;
    fullname: string;
    checkindate: string |null;
    checkinstatus: boolean;
    children: {
        name: string |null;
    }[];
}