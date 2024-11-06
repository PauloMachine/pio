import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { postCost, getCosts } from './cost.services';
import { Cost, CostLotId, CostId } from './cost.types';

type MutationOptions<TData, TError, TVariables> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

type CreateCostFn = (
  options?: MutationOptions<Cost, unknown, CostLotId>
) => UseMutationResult<Cost, unknown, CostLotId>;

export const useCreateCost: CreateCostFn = (options) => {
  return useMutation(postCost, options);
};

type QueryOptions<TData, TError> = Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;

type UseCostFn = (
  lotId: string,
  options?: QueryOptions<CostId[], unknown>
) => UseQueryResult<CostId[], unknown>;

export const useCosts: UseCostFn = (lotId, options) => {
  return useQuery<CostId[], unknown>(['Cost', lotId], () => getCosts(lotId), options);
};