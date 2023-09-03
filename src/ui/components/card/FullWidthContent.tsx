import type { HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

export type FullWidthContentProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    fill?: boolean;
  };

export const FullWidthContent = ({
  children,
  className,
  fill,
  ...props
}: FullWidthContentProps) => (
  <div
    {...props}
    className={classNames(
      "relative -ml-[1.65rem] w-[calc(100%+3.3rem)]",
      className
    )}
  >
    <div className={fill ? "w-full" : "w-full px-6"}>{children}</div>
  </div>
);
