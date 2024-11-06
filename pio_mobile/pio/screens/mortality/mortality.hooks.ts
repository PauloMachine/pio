import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { postMortality, getMortalities } from './mortality.services';
import { Mortality, MortalityLotId, MortalityId } from './mortality.types';

type MutationOptions<TData, TError, TVariables> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

type CreateMortalityFn = (
  options?: MutationOptions<Mortality, unknown, MortalityLotId>
) => UseMutationResult<Mortality, unknown, MortalityLotId>;

export const useCreateMortality: CreateMortalityFn = (options) => {
  return useMutation(postMortality, options);
};

type QueryOptions<TData, TError> = Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;

type UseMortalitiesFn = (
  lotId: string,
  options?: QueryOptions<MortalityId[], unknown>
) => UseQueryResult<MortalityId[], unknown>;

export const useMortalities: UseMortalitiesFn = (lotId, options) => {
  return useQuery<MortalityId[], unknown>(['mortalities', lotId], () => getMortalities(lotId), options);
};