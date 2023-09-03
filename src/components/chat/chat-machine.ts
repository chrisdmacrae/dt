import { createMachine, type AnyEventObject } from 'xstate';
import type { Message } from './chat';

export type MessageEvent = {
  message: string;
}

export const chatMachine = createMachine({
  id: 'chat',
  predictableActionArguments: true,
  schema: {
    // The context (extended state) of the machine
    context: {} as { sender: "FROM" | "TO" | null, messages: Message[], error: Error | null  },
    // The events this machine handles
    events: {} as
      | { type: 'SEND', sender: "FROM" | "TO" }
      | { type: 'SUCCESS', message: Message }
      | { type: 'FAILURE'; error: Error },
  },
  initial: 'idle',
  context: {
    sender: null,
    messages: [],
    error: null
  },
  states: {
    idle: {
      on: {
        SEND: {
          target: 'sending',
          actions: ['assignSender'],
        }
      },
    },
    sending: {
      on: {
        SUCCESS: {
          target: 'success',
          actions: ['assignMessage'],
        },
        FAILURE: {
          target: 'failure',
          actions: ['assignErrorMessage'],
        }
      },
    },
    success: {
      on: {
        SEND: 'sending',
      },
    },
    failure: {
      on: {
        SEND: 'sending',
      },
    },
  },
},
{
  actions: {
    assignSender: (context, event) => {
      if ('sender' in event) context.sender = event.sender;
    },
    assignMessage: (context, event) => {
      if ('message' in event) context.messages.push(event.message);
    },
    assignErrorMessage: (context, event) => {
      if ('error' in event) context.error = event.error;
    }
  }
});