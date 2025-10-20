import { useWorkflowsParams } from '@/hooks/use-workflows-params';
import { useTRPC } from '@/trpc/client';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSuspenseWorkflows = () => {
  const trpc = useTRPC();
  const [params] = useWorkflowsParams();
  return useSuspenseQuery(trpc.workflows.getWorkflows.queryOptions(params));
};

export const useCreateWorkflow = () => {
  const queryclient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Workflow ${data.name} created successfully`);
        queryclient.invalidateQueries(
          trpc.workflows.getWorkflows.queryOptions({})
        );
      },
      onError: (error) => {
        toast.error(`Failed to create workflow ${error.message}`);
      },
    })
  );
};

export const useRemoveWorkflow = () => {
  const queryclient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.remove.mutationOptions({
      onSuccess: (data) => {
        queryclient.invalidateQueries(
          trpc.workflows.getWorkflows.queryOptions({})
        );
        queryclient.invalidateQueries(
          trpc.workflows.getWorkflowById.queryOptions({ id: data.id })
        );
        toast.success(`Workflow ${data.name} removed`);
      },
      onError: (error) => {
        toast.error(error.message || 'Failed to remove workflow');
      },
    })
  );
};
