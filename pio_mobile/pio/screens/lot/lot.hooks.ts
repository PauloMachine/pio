import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
    UseQueryOptions,
    UseQueryResult,
    useQuery,
} from 'react-query';
import { postLot, getLots, getLot, finishLot } from './lot.services';
import { Lot, LotAviaryId, LotId } from './lot.types';

type MutationOptions<TData, TError, TVariables> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

type CreateLotFn = (
    options?: MutationOptions<Lot, unknown, LotAviaryId>
) => UseMutationResult<Lot, unknown, LotAviaryId>;

export const useCreateLot: CreateLotFn = (options) => {
    return useMutation(postLot, options);
};

type QueryOptions<TData, TError> = Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;

type UseLotsFn = (
    aviaryId: string,
    options?: QueryOptions<LotId[], unknown>
) => UseQueryResult<LotId[], unknown>;

export const useLots: UseLotsFn = (aviaryId, options) => {
    return useQuery<LotId[], unknown>(
        ['lots', aviaryId],
        () => getLots(aviaryId), options);
};

type UseLotFn = (
    lotId: string,
    options?: QueryOptions<LotId, unknown>
) => UseQueryResult<LotId, unknown>;

export const useLot: UseLotFn = (lotId, options) => {
    return useQuery<LotId, unknown>(
        ['lot', lotId],
        () => getLot(lotId), options);
};

type FinishLotFn = (
    options?: MutationOptions<{ message: string }, unknown, string>
) => UseMutationResult<{ message: string }, unknown, string>;

export const useFinishLot: FinishLotFn = (options) => {
    return useMutation(finishLot, options);
};