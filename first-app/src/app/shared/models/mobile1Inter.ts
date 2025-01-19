import { ISpecification } from "./mobilesInter";

export interface Imobile1{

    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    isAvailable: boolean;
    rating : number;
    noItems:number;
    Specifications:ISpecification[]
}


export interface ISpecifications{
    memory: string;
    display: string;
    camera: string;
    processor: string;
}