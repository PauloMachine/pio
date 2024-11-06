export type Aviary = {
    name: string;
    grossValue?: number;
    netValue?: number;
    totalCosts?: number;
}

export type AviaryId = Aviary & {
    id: string;
}