

export interface Iproduct{
    pName: string;
    pDetails: string;
    pId: string;
    pStatus: PoroductsStatus;
}

export enum PoroductsStatus{
    InProgress ="InProgress",
    Dispatched = "Dispatched",
    Delivered ="Delivered"
}