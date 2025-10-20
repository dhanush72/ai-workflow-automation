import { inngest } from './client';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import * as Sentry from '@sentry/nextjs';

const google = createGoogleGenerativeAI();

export const executeAi = inngest.createFunction(
  { id: 'execute-ai' },
  { event: 'execute/ai' },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap('genimi-generate-text', generateText, {
      model: google('gemini-2.5-flash'),
      system: 'You are a helpful assistant.',
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
    });
    Sentry.logger.info('Generated vegetarian lasagna recipe', {
      log_source: 'sentry_test',
      data: steps,
    });
    return steps;
  }
);
