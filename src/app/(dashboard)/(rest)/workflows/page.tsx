import { requireAuth } from '@/lib/auth-session';

const WorkflowPage = async () => {
  await requireAuth();
  return <div>WorkflowPage</div>;
};

export default WorkflowPage;
