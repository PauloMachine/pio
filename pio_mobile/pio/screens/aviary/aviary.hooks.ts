import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { postAviary, getAviaries, getAviaryById } from './aviary.services';
import { Aviary, AviaryId } from './aviary.types';

type MutationOptions<TData, TError, TVariables> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

type CreateAviaryFn = (
  options?: MutationOptions<Aviary, unknown, Aviary>
) => UseMutationResult<Aviary, unknown, Aviary>;

export const useCreateAviary: CreateAviaryFn = (options) => {
  return useMutation(postAviary, options);
};

type QueryOptions<TData, TError> = Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;

type UseAviariesFn = (
  options?: QueryOptions<AviaryId[], unknown>
) => UseQueryResult<AviaryId[], unknown>;

export const useAviaries: UseAviariesFn = (options) => {
  return useQuery<AviaryId[], unknown>('aviaries', getAviaries, options);
};

type UseAviaryFn = (
  aviaryId: string,
  options?: QueryOptions<AviaryId, unknown>
) => UseQueryResult<AviaryId, unknown>;

export const useAviary: UseAviaryFn = (aviaryId, options) => {
  return useQuery<AviaryId, unknown>(['aviary', aviaryId], () => getAviaryById(aviaryId), options);
};
