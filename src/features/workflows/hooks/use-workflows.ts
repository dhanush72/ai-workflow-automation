import { useTRPC } from '@/trpc/client';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSuspenseWorkflows = () => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.workflows.getWorkflows.queryOptions());
};

export const useCreateWorkflow = () => {
  const queryclient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Workflow ${data.name} created successfully`);
        queryclient.invalidateQueries(
          trpc.workflows.getWorkflows.queryOptions()
        );
      },
      onError: (error) => {
        toast.error(`Failed to create workflow ${error.message}`);
      },
    })
  );
};
