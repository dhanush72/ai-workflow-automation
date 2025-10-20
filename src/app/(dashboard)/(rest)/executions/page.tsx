import { requireAuth } from '@/lib/auth-session';

const ExecutionsPage = async () => {
  await requireAuth();
  return <div>ExecutionsPage</div>;
};

export default ExecutionsPage;
