import { get, post } from '../../services/methods';
import { Lot, LotAviaryId, LotId } from './lot.types';

export const postLot = ({ aviaryId, lot }: LotAviaryId): Promise<Lot> => {
    return post<Lot, Lot>(`/v1/lots`, lot);
};

export const getLots = async (aviaryId: string): Promise<LotId[]> => {
    const { lots } = await get<{ lots: LotId[] }>(`/v1/aviaries/${aviaryId}/lots`);
    return lots;
};

export const getLot = async (lotId: string): Promise<LotId> => {
    const { lot } = await get<{ lot: LotId }>(`/v1/lots/${lotId}`);
    return lot;
};

export const finishLot = (lotId: string): Promise<{ message: string }> => {
    return post<{ message: string }, void>(`/v1/lots/${lotId}/finish`);
};
