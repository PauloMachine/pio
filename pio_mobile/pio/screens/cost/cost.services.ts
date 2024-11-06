import { get, post } from "../../services/methods";
import { Cost, CostId, CostLotId } from "./cost.types";

export const postCost = ({ lotId, cost }: CostLotId): Promise<Cost> => {
    return post<Cost, Cost>(`/v1/lots/${lotId}/costs`, cost);
};

export const getCosts = async (lotId: string): Promise<CostId[]> => {
    const { costs } = await get<{ costs: CostId[] }>(`/v1/lots/${lotId}/costs`);
    return costs;
};
