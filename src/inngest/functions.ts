import { inngest } from './client';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const google = createGoogleGenerativeAI();

export const executeAi = inngest.createFunction(
  { id: 'execute-ai' },
  { event: 'execute/ai' },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap('genimi-generate-text', generateText, {
      model: google('gemini-2.5-flash'),
      system: 'You are a helpful assistant.',
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
    });

    return steps;
  }
);
