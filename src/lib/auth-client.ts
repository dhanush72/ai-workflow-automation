import { nextCookies } from 'better-auth/next-js';
import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { auth } from '@/lib/auth';
import { polarClient } from '@polar-sh/better-auth';

export const authClient = createAuthClient({
  plugins: [polarClient(), inferAdditionalFields<typeof auth>(), nextCookies()],
});
