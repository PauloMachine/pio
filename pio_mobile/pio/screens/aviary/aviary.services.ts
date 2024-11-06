import { get, post } from "../../services/methods";
import { Aviary, AviaryId } from "./aviary.types";

export const postAviary = (aviary: Aviary): Promise<Aviary> => {
    return post<Aviary, Aviary>('/v1/aviaries', aviary);
};

export const getAviaries = async (): Promise<AviaryId[]> => {
    const { aviaries } = await get<{ aviaries: AviaryId[] }>('/v1/aviaries');
    return aviaries;
};

export const getAviaryById = async (aviaryId: string): Promise<AviaryId> => {
    const { aviary } = await get<{ aviary: AviaryId }>(`/v1/aviaries/${aviaryId}`);
    return aviary
};