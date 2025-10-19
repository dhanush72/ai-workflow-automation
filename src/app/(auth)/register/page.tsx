import { RegisterForm } from '@/app/(auth)/register/_register-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Workflow Automation',
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
