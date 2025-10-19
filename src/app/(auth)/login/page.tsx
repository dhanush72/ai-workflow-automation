import { LoginForm } from '@/app/(auth)/login/_login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Workflow Automation',
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
