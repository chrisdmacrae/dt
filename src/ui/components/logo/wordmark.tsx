import type { PropsWithChildren } from "react";
import "./logo.css";

export const Wordmark = ({ children }: PropsWithChildren) => (
  <p className="font-bold text-transparent dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 animate hover:animate-shine">
    <span role="presentatio">DataTurk</span>
    <span className="sr-only">{children || "DataTurk"}</span>
  </p>
);
