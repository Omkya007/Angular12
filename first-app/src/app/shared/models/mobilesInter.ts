export interface Imobile{
    
        id: number;
        name: string;
        brand: string;
        price: number;
        image: string;
        isAvailable: boolean;
        rating: number;
        noItems:number;
        Specifications:ISpecification[];
        
}

export interface ISpecification {
        memory: string;
        display: string;
        camera: string;
        processor: string;
    }