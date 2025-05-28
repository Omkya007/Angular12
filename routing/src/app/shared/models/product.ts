
export interface Iproduct{
    pname: string;
    pid: string;
    pstatus:Ipstatus ;
    canReturn: number;
}

export type Ipstatus="In-progress"|"Dispatched"|"Delivered";