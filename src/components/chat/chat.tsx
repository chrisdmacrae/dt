import classNames from "classnames";
import { Icon } from "../../ui/components/icon";
import { Stack } from "../../ui/components/stack";
import { useMachine } from "@xstate/react";
import { chatMachine } from "./chat-machine";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export type Message = {
  type: "TO" | "FROM";
  text: string;
  options?: string[];
};

const messages: Message[] = [
  {
    type: "TO",
    text: "Welcome back, Elmer. What can I help you with?",
  },
  {
    type: "FROM",
    text: "Can you tell me about my call center?",
  },
  {
    type: "TO",
    text: "Sure, I can help you with that. What would you like to know?",
    options: [
      "How many calls did we receive last month?",
      "Whose my top performing agent?",
      "Whose my worse performing agent?",
    ],
  },
];

export const Chat = () => {
  const [current, send, chatService] = useMachine(chatMachine);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const nextMessage = messages[current.context.messages.length] || messages[0];

  useEffect(() => {
    if (isInView) {
      switch (current.value) {
        case "idle":
          send("SEND", { sender: nextMessage.type });
          break;
        case "sending":
          const timeout = Math.random() * 1000 + 2000;

          setTimeout(() => {
            send("SUCCESS", {
              message: nextMessage,
            });
          }, timeout);
          break;
        case "success":
          if (current.context.messages.length < messages.length) {
            send("SEND", {
              sender: nextMessage.type,
            });
          }
      }
    }
  }, [current, isInView]);

  return (
    <div ref={ref} className="w-full">
      <Stack
        align="center"
        className="rounded-lg bg-slate-50 dark:bg-slate-900 max-full mx-auto p-4 min-h-[360px]"
      >
        <Stack gap={4} fit={false}>
          <Stack
            direction="horizontal"
            spacing="between"
            valign="middle"
            className="p-2 border-b border-slate-800"
          >
            <p>Chat with DataTurk</p>
            <Icon name="cog" className="w-3 h-3" />
          </Stack>
          <Stack gap={4}>
            {current.context.messages.map((message, index) => (
              <Message type={message.type} text={message.text} key={index} />
            ))}
          </Stack>
          {current.context.sender && current.value === "sending" && (
            <Stack
              align={current.context.sender === "FROM" ? "right" : "left"}
              gap={2}
              direction="horizontal"
              className="h-7"
            >
              <div className="w-2 h-2 animate animate-bounce bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              <div className="w-2 h-2 delay-200 animate animate-bounce bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              <div className="w-2 h-2 delay-300 animate animate-bounce bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            </Stack>
          )}
          <Stack
            direction="horizontal"
            spacing="between"
            valign="middle"
            className="mt-auto"
          >
            <textarea
              placeholder={nextMessage.type === "FROM" ? nextMessage.text : ""}
              className="placeholder-white rounded-lg text-white disabled:bg-slate-400 dark:disabled:bg-slate-800 w-full p-4"
              disabled
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export const Message = ({ type, text }: any) => {
  const align = type === "TO" ? "left" : "right";
  const color = type === "TO" ? "bg-slate-400" : "bg-indigo-500";

  return (
    <Stack align={align} className="text-white">
      <Stack className="w-[45%!important]">
        <Stack className={classNames("p-2 rounded-md", color)}>{text}</Stack>
      </Stack>
    </Stack>
  );
};
