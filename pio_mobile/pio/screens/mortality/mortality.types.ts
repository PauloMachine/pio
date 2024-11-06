export type Mortality = {
    chicksMortalityCount: number;
    createdAt: string;
};

export type MortalityId = Mortality & {
    id: string;
}

export type MortalityLotId = {
    mortality: Mortality,
    lotId: string;
}