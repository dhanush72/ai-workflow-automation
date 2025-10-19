import { requireAuth } from '@/lib/auth-session';
import { LogoutBtn } from '@/lib/logout';
import { caller } from '@/trpc/server';
import Image from 'next/image';

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  console.log({ data });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <p>You are logged in!</p>
      <div>{JSON.stringify(data, null, 2)}</div>
      <LogoutBtn />
    </div>
  );
};

export default Page;
