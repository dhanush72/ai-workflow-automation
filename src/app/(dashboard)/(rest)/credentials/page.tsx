import { requireAuth } from '@/lib/auth-session';

const CredentialsPage = async () => {
  await requireAuth();
  return <div>CredentialsPage</div>;
};

export default CredentialsPage;
