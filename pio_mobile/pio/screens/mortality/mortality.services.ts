import { get, post } from "../../services/methods";
import { Mortality, MortalityId, MortalityLotId } from "./mortality.types";

export const postMortality = ({ lotId, mortality }: MortalityLotId): Promise<Mortality> => {
    return post<Mortality, Mortality>(`/v1/lots/${lotId}/mortalities`, mortality);
};

export const getMortalities = async (lotId: string): Promise<MortalityId[]> => {
    const { mortalities } = await get<{ mortalities: MortalityId[] }>(`/v1/lots/${lotId}/mortalities`);
    return mortalities;
};
