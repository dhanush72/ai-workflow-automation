import { prefetch, trpc } from '@/trpc/server';
import type { inferInput } from '@trpc/tanstack-react-query';

type Input = inferInput<typeof trpc.workflows.getWorkflows>;

export const prefetchWorkflows = (params: Input) => {
  return prefetch(trpc.workflows.getWorkflows.queryOptions(params));
};
