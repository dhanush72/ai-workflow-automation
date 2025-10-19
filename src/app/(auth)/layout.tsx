import { requireUnauth } from '@/lib/auth-session';
import { ReactNode } from 'react';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireUnauth();
  return (
    <div className="bg-muted relative flex min-h-svh items-center flex-col justify-center">
      {children}
    </div>
  );
}
