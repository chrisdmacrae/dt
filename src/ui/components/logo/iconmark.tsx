import type { PropsWithChildren } from "react";
import { Stack } from "../stack";
import "./logo.css";

export const Iconmark = ({ children }: PropsWithChildren) => (
  <div className="rounded-lg w-10 h-10 bg-slate-100 border-2 border-white ring-1 ring-slate-300 animate hover:animate-shine">
    <Stack align="center" valign="middle" fit={false}>
      <p className="font-bold text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 hover:from-blue-500 hover:to-blue-700">
        <span role="presentation">DT</span>
        <span className="sr-only">{children || "ServiceTurk"}</span>
      </p>
    </Stack>
  </div>
);
