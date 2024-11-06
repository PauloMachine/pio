export type Lot = {
    aviaryId: string;
    createdAt?: Date;
    finishedAt?: Date;
    chicksCount: number;
    chickValue: number;
    chicksMortalityCount: number;
    mortalityCost?: number;
    totalCosts?: number;
    grossValue?: number;
    netValue?: number;
}

export type LotId = Lot & {
    id: string;
}

export type LotAviaryId = {
    lot: Lot,
    aviaryId: string
}