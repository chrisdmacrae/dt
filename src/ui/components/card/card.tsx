import type { As } from "../../theme/as";
import type { HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

export type CardVariant = "shadow" | "well" | "flat" | "link";
export type CardProps = PropsWithChildren &
  HTMLAttributes<any> & {
    as?: As;
    mobile?: boolean;
    variant?: CardVariant;
    className?: string;
  };

export const Card = ({
  as = "div",
  variant = "shadow",
  mobile,
  children,
  className,
  ...props
}: CardProps) => {
  const El = as;

  return (
    <El
      className={classNames(
        "w-full p-4 lg:px-6",
        "group-hover:[&_*]:text-eggplant-600 group-hover:border-eggplant-600", // in group
        mobile ? "sm:rounded-lg" : "rounded-lg",
        variant === "shadow" &&
          "bg-white dark:bg-slate-900 dark:text-slate-50 border-2 border-[rgba(15,23,42,0.03)] shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)]" + // light
            " dark:bg-onyx-600 dark:border dark:border-onyx-500", // dark
        variant === "well" &&
          "bg-slate-100 dark:bg-slate-800 dark:text-slate-50 text-slate-800 shadow-inner" + // light
            " dark:bg-onyx-400 dark:text-slate-100",
        variant === "flat" &&
          "bg-eggplant-50 dark:bg-onyx-500 dark:border dark:border-onyx-400",
        variant === "link" &&
          "bg-white hover:bg-slate-200 border-2 border shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)]" + // light
            " dark:bg-onyx-600 dark:hover:bg-onyx-500 dark:border dark:border-onyx-500",
        className
      )}
      {...props}
    >
      {children}
    </El>
  );
};
