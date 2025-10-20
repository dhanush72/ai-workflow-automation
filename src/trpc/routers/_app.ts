import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from '@/trpc/init';
import { prisma } from '@/lib/db';
import { inngest } from '@/inngest/client';

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: 'test/hello.world',
      data: {
        email: 'dhanush@example.com',
      },
    });
    return prisma.workflow.create({
      data: {
        name: 'Test workflow',
      },
    });
  }),
  testAi: premiumProcedure.mutation(async () => {
    return await inngest.send({
      name: 'execute/ai',
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
