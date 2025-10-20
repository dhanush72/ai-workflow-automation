import { requireAuth } from '@/lib/auth-session';

import {
  WorkflowLists,
  WorkflowsContainer,
  WorkflowsLoading,
  WorkflowsError,
} from '@/features/workflows/components/workflows';
import { prefetchWorkflows } from '@/features/workflows/server/prefetch';
import { HydrateClient } from '@/trpc/server';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import type { SearchParams } from 'nuqs';
import { workflowsParamsLoader } from '@/features/workflows/server/params-loader';

interface WorkflowProps {
  searchParams: Promise<SearchParams>;
}

const WorkflowPage = async ({ searchParams }: WorkflowProps) => {
  await requireAuth();

  const params = await workflowsParamsLoader(searchParams);
  prefetchWorkflows(params);

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<WorkflowsError />}>
          <Suspense fallback={<WorkflowsLoading />}>
            <WorkflowLists />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default WorkflowPage;
