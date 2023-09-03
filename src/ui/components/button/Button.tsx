import { useState, type HTMLAttributes, type MouseEventHandler } from "react";
import { getResponsiveClasses, type Responsive } from "../../theme/responsive";
import classNames from "classnames";
import { Stack } from "../stack/Stack";

export type ButtonSize = "small" | "medium" | "large" | "xlarge";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "ghost"
  | "none";

export type ButtonProps = (
  | React.ButtonHTMLAttributes<any>
  | HTMLAttributes<HTMLSpanElement>
) & {
  as?: "button" | "submit" | "span";
  variant?: ButtonVariant;
  size?: ButtonSize | Responsive<ButtonSize>;
  fluid?: boolean | Responsive<boolean>;
};

export const Button = ({
  as = "button",
  variant = "primary",
  size = "medium",
  fluid = false,
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  const El = as as "button";
  const { disabled = false } = buttonProps as React.ButtonHTMLAttributes<any>;

  const primaryClasses = classNames(
    "text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500 shadow-sm transform-gpu"
  );
  const secondaryClasses = classNames(
    "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-500 shadow-sm"
  );
  const dangerClasses = classNames(
    "bg-red-600 text-red-100 hover:bg-red-500 focus:ring-red-500 shadow-sm"
  );
  const warningClasses = classNames(
    "bg-amber-500 text-amber-100 hover:bg-amber-400 focus:ring-amber-400 shadow-sm"
  );
  const successClasses = classNames(
    "bg-emerald-600 text-emerald-50 hover:bg-emerald-500 focus:ring-emerald-500 shadow-sm"
  );
  const ghostGlasses = classNames(
    "bg-transparent text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500 shadow-none", // light
    "dark:text-indigo-400 dark:hover:text-indigo-300" // dark
  );
  const noneClasses = classNames(
    "bg-transparent focus:ring-none shadow-none" // light
  );
  const disabledClasses = classNames(
    "cursor-not-allowed text-slate-200", // light
    "dark:text-slate-400", // dark
    variant !== "ghost" && "bg-slate-400 focus:ring-slate-400 shadow-sm", // light,
    variant !== "ghost" &&
      "dark:bg-onyx-300 dark:focus:ring-onyx-300 dark:text-white" // dark
  );

  const getVariantClasses = () => {
    if (variant === "primary") return primaryClasses;
    if (variant === "secondary") return secondaryClasses;
    if (variant === "danger") return dangerClasses;
    if (variant === "warning") return warningClasses;
    if (variant === "success") return successClasses;
    if (variant === "ghost") return ghostGlasses;
    if (variant === "none") return noneClasses;
  };

  const currentSize = getResponsiveClasses(size, ButtonSizeClasses);
  const fluidClasses = getResponsiveClasses(fluid as any, ButtonFluidClasses);

  const [hoverGradient, setHoverGradient] = useState({ x: 0, y: 0 });
  const onMouseMove: MouseEventHandler = (e) => {
    const el = e.target as HTMLElement;
    const x = (e.pageX - el.getBoundingClientRect().left) * 0.75;
    const y = (e.pageY - el.getBoundingClientRect().bottom) * 0.75;

    setHoverGradient({ x, y });
  };

  return (
    <El
      onMouseMove={onMouseMove}
      className={classNames(
        "relative overflow-hidden group inline-flex items-center justify-center rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 will-change scale-100",
        currentSize,
        fluidClasses,
        className ? className : "",
        disabled ? disabledClasses : getVariantClasses()
      )}
      {...buttonProps}
    >
      {variant === "primary" && !disabled && (
        <span
          className="absolute transition-all scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 w-[150%] h-[150%] -translate-x-1/2 from-indigo-500 to-purple-500 bg-gradient-radial z-0"
          style={{ left: hoverGradient.x, top: hoverGradient.y }}
        />
      )}
      <Stack
        gap={2}
        direction="horizontal"
        align="center"
        valign="middle"
        className="relative pointer-events-none z-1"
      >
        {children}
      </Stack>
    </El>
  );
};

const ButtonFluidClasses = {
  true: {
    _: "w-full",
    sm: "sm:w-full",
    md: "md:w-full",
    lg: "lg:w-full",
    xl: "xl:w-full",
    "2xl": "2xl:w-full",
  },
  false: {
    _: "w-[max-content]",
    sm: "sm:w-[max-content]",
    md: "md:w-[max-content]",
    lg: "lg:w-[max-content]",
    xl: "xl:w-[max-content]",
    "2xl": "2xl:w-[max-content]",
  },
};

const ButtonSizeClasses = {
  small: {
    _: "px-2 py-2 text-xs font-medium leading-[0.75rem]",
    sm: "sm:px-2 sm:py-2 sm:text-xs sm:font-medium sm:leading-[0.75rem]",
    md: "md:px-2 md:py-2 md:text-xs md:font-medium md:leading-[0.75rem]",
    lg: "lg:px-2 lg:py-2 lg:text-xs lg:font-medium lg:leading-[0.75rem]",
    xl: "xl:px-2 xl:py-2 xl:text-xs xl:font-medium xl:leading-[0.75rem",
    "2xl": "2xl:px-2 2xl:py-2 2xl:text-xs 2xl:font-medium 2xl:leading-[0.75rem",
  },
  medium: {
    _: "px-4 py-2 text-sm font-medium leading-[1rem]",
    sm: "sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:leading-[1rem]",
    md: "md:px-4 md:py-2 md:text-md md:font-medium md:leading-[1rem]",
    lg: "lg:px-4 lg:py-2 lg:text-lg lg:font-medium lg:leading-[1rem]",
    xl: "xl:px-4 xl:py-2 xl:text-xl xl:font-medium xl:leading-[1rem]",
    "2xl": "2xl:px-4 2xl:py-2 2xl:text-2xl 2xl:font-medium 2xl:leading-[1rem]",
  },
  large: {
    _: "px-4 py-3 text-md font-medium leading-[1rem]",
    sm: "sm:px-4 sm:py-3 sm:text-md sm:font-medium sm:leading-[1rem]",
    md: "md:px-4 md:py-3 md:text-md md:font-medium md:leading-[1rem]",
    lg: "lg:px-4 lg:py-3 lg:text-md lg:font-medium lg:leading-[1rem]",
    xl: "xl:px-4 xl:py-3 xl:text-md xl:font-medium xl:leading-[1rem]",
    "2xl": "2xl:px-4 2xl:py-3 2xl:text-md 2xl:font-medium 2xl:leading-[1rem]",
  },
  xlarge: {
    _: "px-6 py-4 text-lg rounded-full font-medium leading-[1.25rem]",
    sm: "sm:px-6 sm:py-4 sm:text-lg sm:rounded-full sm:font-medium sm:leading-[1.25rem]",
    md: "md:px-6 md:py-4 md:text-lg md:rounded-full md:font-medium md:leading-[1.25rem]",
    lg: "lg:px-6 lg:py-4 lg:text-lg lg:rounded-full lg:font-medium lg:leading-[1.25rem]",
    xl: "xl:px-6 xl:py-4 xl:text-lg xl:rounded-full xl:font-medium xl:leading-[1.25rem]",
    "2xl":
      "2xl:px-6 2xl:py-4 2xl:text-lg 2xl:rounded-full 2xl:font-medium 2xl:leading-[1.25rem]",
  },
};
