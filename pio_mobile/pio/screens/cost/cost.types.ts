export type Cost = {
    costName: string;
    costValue: number;
};

export type CostId = Cost & {
    id: string;
    createdAt: string;
}

export type CostLotId = {
    cost: Cost,
    lotId: string;
}