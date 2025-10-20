import { requireAuth } from '@/lib/auth-session';

interface WorkflowIdPageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const WorkflowIdPage = async ({ params }: WorkflowIdPageProps) => {
  await requireAuth();
  const { workflowId } = await params;
  return <div>WorkflowIdPage: {workflowId}</div>;
};

export default WorkflowIdPage;
