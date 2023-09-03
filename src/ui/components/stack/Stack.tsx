import { type HTMLAttributes, type PropsWithChildren } from "react";
import classNames from "classnames";
import { type As } from "../../theme/as";
import { getResponsiveClasses, type Responsive } from "../../theme/responsive";

export type StackDirection =
  | "horizontal"
  | "horizontal-reverse"
  | "vertical"
  | "vertical-reverse";
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type StackAlign = "left" | "center" | "right" | "stretch";
export type StackValign = "top" | "middle" | "bottom" | "baseline";
export type StackFit = { x?: boolean | "max"; y?: boolean | "max" };

export type StackProps = PropsWithChildren &
  HTMLAttributes<unknown> & {
    as?: As;
    direction?: StackDirection | Responsive<StackDirection>;
    align?: StackAlign | Responsive<StackAlign>;
    valign?: StackValign | Responsive<StackValign>;
    gap?: StackGap | Responsive<StackGap>;
    spacing?: "around" | "between";
    fit?: boolean | StackFit | Responsive<StackFit>;
    wrap?: boolean | Responsive<boolean>;
    className?: string;
  };

export const Stack = ({
  as = "div",
  direction = "vertical",
  align = "left",
  valign = "top",
  spacing,
  gap = 0,
  fit = { x: false, y: true },
  wrap = false,
  className,
  children,
  ...props
}: StackProps) => {
  const El = as;
  const currentDirection = getResponsiveClasses(direction, StackClasses) || "";
  const currentAlign =
    getResponsiveClasses(align, StackClasses, (breakpoint) => {
      const currentDirection =
        typeof direction === "object" ? direction[breakpoint] : direction;

      if (!currentDirection) return StackClasses;

      return StackAlignClasses[currentDirection];
    }) || "";
  const currentValign = getResponsiveClasses(
    valign,
    StackClasses,
    (breakpoint) => {
      const currentDirection =
        typeof direction === "object" ? direction[breakpoint] : direction;

      if (!currentDirection) return StackClasses;

      return StackValignClasses[currentDirection];
    }
  );
  const currentSpacing = getResponsiveClasses(spacing, StackClasses) || "";
  const currentGap = getResponsiveClasses(gap, StackClasses) || "";
  const currentWrap = getResponsiveClasses(wrap as any, StackWrapClasses);

  let currentFit;
  if (typeof fit === "boolean" || fit === undefined)
    currentFit = getResponsiveClasses(fit as any, StackFitClasses);
  if (typeof fit !== "boolean" && "x" in fit) {
    currentFit = [
      currentFit,
      getResponsiveClasses(fit.x as any, StackFitXClasses),
    ].join(" ");
  }
  if (typeof fit !== "boolean" && "y" in fit) {
    currentFit = [
      currentFit,
      getResponsiveClasses(fit.y as any, StackFitYClasses),
    ].join(" ");
  }

  return (
    <El
      className={classNames(
        "flex",
        className,
        currentDirection,
        currentAlign,
        currentValign,
        currentSpacing,
        currentGap,
        currentWrap,
        currentFit
      )}
      {...props}
    >
      {children}
    </El>
  );
};

const StackClasses = {
  0: {
    _: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    "2xl": "",
  },
  1: {
    _: "gap-1",
    sm: "sm:gap-1",
    md: "md:gap-1",
    lg: "lg:gap-1",
    xl: "xl:gap-1",
    "2xl": "2xl:gap-1",
  },
  2: {
    _: "gap-2",
    sm: "sm:gap-2",
    md: "md:gap-2",
    lg: "lg:gap-2",
    xl: "xl:gap-2",
    "2xl": "2xl:gap-2",
  },
  3: {
    _: "gap-4",
    sm: "sm:gap-4",
    md: "md:gap-4",
    lg: "lg:gap-4",
    xl: "xl:gap-4",
    "2xl": "2xl:gap-4",
  },
  4: {
    _: "gap-6",
    sm: "sm:gap-6",
    md: "md:gap-6",
    lg: "lg:gap-6",
    xl: "xl:gap-6",
    "2xl": "2xl:gap-6",
  },
  5: {
    _: "gap-8",
    sm: "sm:gap-8",
    md: "md:gap-8",
    lg: "lg:gap-8",
    xl: "xl:gap-8",
    "2xl": "2xl:gap-8",
  },
  6: {
    _: "gap-10",
    sm: "sm:gap-10",
    md: "md:gap-10",
    lg: "lg:gap-10",
    xl: "xl:gap-10",
    "2xl": "2xl:gap-10",
  },
  7: {
    _: "gap-12",
    sm: "sm:gap-12",
    md: "md:gap-12",
    lg: "lg:gap-12",
    xl: "xl:gap-12",
    "2xl": "2xl:gap-12",
  },
  8: {
    _: "gap-16",
    sm: "sm:gap-16",
    md: "md:gap-16",
    lg: "lg:gap-16",
    xl: "xl:gap-16",
    "2xl": "2xl:gap-16",
  },
  9: {
    _: "gap-24",
    sm: "sm:gap-24",
    md: "md:gap-24",
    lg: "lg:gap-24",
    xl: "xl:gap-24",
    "2xl": "2xl:gap-24",
  },
  10: {
    _: "gap-32",
    sm: "sm:gap-32",
    md: "md:gap-32",
    lg: "lg:gap-32",
    xl: "xl:gap-32",
    "2xl": "2xl:gap-32",
  },
  horizontal: {
    _: "flex-row",
    sm: "sm:flex-row",
    md: "md:flex-row",
    lg: "lg:flex-row",
    xl: "xl:flex-row",
    "2xl": "2xl:flex-row",
  },
  "horizontal-reverse": {
    _: "flex-row-reverse",
    sm: "sm:flex-row-reverse",
    md: "md:flex-row-reverse",
    lg: "lg:flex-row-reverse",
    xl: "xl:flex-row-reverse",
    "2xl": "2xl:flex-row-reverse",
  },
  vertical: {
    _: "flex-col",
    sm: "sm:flex-col",
    md: "md:flex-col",
    lg: "lg:flex-col",
    xl: "xl:flex-col",
    "2xl": "2xl:flex-col",
  },
  "vertical-reverse": {
    _: "flex-col-reverse",
    sm: "sm:flex-col-reverse",
    md: "md:flex-col-reverse",
    lg: "lg:flex-col-reverse",
    xl: "xl:flex-col-reverse",
    "2xl": "2xl:flex-col-reverse",
  },
  left: {
    _: "items-start",
    sm: "sm:items-start",
    md: "md:items-start",
    lg: "lg:items-start",
    xl: "xl:items-start",
    "2xl": "2xl:items-start",
  },
  center: {
    _: "items-center",
    sm: "sm:items-center",
    md: "md:items-center",
    lg: "lg:items-center",
    xl: "xl:items-center",
    "2xl": "2xl:items-center",
  },
  right: {
    _: "items-end",
    sm: "sm:items-end",
    md: "md:items-end",
    lg: "lg:items-end",
    xl: "xl:items-end",
    "2xl": "2xl:items-end",
  },
  stretch: {
    _: "items-stretch",
    sm: "sm:items-stretch",
    md: "md:items-stretch",
    lg: "lg:items-stretch",
    xl: "xl:items-stretch",
    "2xl": "2xl:items-stretch",
  },
  stretch_justify: {
    _: "justify-items-stretch",
    sm: "sm:justify-items-stretch",
    md: "md:justify-items-stretch",
    lg: "lg:justify-items-stretch",
    xl: "xl:justify-items-stretch",
    "2xl": "2xl:justify-items-stretch",
  },
  top: {
    _: "justify-start",
    sm: "sm:justify-start",
    md: "md:justify-start",
    lg: "lg:justify-start",
    xl: "xl:justify-start",
    "2xl": "2xl:justify-start",
  },
  middle: {
    _: "justify-center",
    sm: "sm:justify-center",
    md: "md:justify-center",
    lg: "lg:justify-center",
    xl: "xl:justify-center",
    "2xl": "2xl:justify-center",
  },
  bottom: {
    _: "justify-end",
    sm: "sm:justify-end",
    md: "md:justify-end",
    lg: "lg:justify-end",
    xl: "xl:justify-end",
    "2xl": "2xl:justify-end",
  },
  baseline_justify: {
    _: "justify-baseline",
    sm: "sm:justify-baseline",
    md: "md:justify-baseline",
    lg: "lg:justify-baseline",
    xl: "xl:justify-baseline",
    "2xl": "2xl:justify-baseline",
  },
  baseline_items: {
    _: "items-baseline",
    sm: "sm:items-baseline",
    md: "md:items-baseline",
    lg: "lg:items-baseline",
    xl: "xl:items-baseline",
    "2xl": "2xl:items-baseline",
  },
  get baseline() {
    return this.baseline_items;
  },
  between: {
    _: "justify-between",
    sm: "sm:justify-between",
    md: "md:justify-between",
    lg: "lg:justify-between",
    xl: "xl:justify-between",
    "2xl": "2xl:justify-between",
  },
  around: {
    _: "justify-around",
    sm: "sm:justify-around",
    md: "md:justify-around",
    lg: "lg:justify-around",
    xl: "xl:justify-around",
    "2xl": "2xl:justify-around",
  },
};

const StackAlignClasses = {
  vertical: {
    left: StackClasses["left"],
    center: StackClasses["center"],
    right: StackClasses["right"],
    stretch: StackClasses["stretch"],
  },
  "vertical-reverse": {
    left: StackClasses["left"],
    center: StackClasses["center"],
    right: StackClasses["right"],
    stretch: StackClasses["stretch"],
  },
  horizontal: {
    left: StackClasses["top"],
    center: StackClasses["middle"],
    right: StackClasses["bottom"],
    stretch: StackClasses["stretch"],
  },
  "horizontal-reverse": {
    left: StackClasses["top"],
    center: StackClasses["middle"],
    right: StackClasses["bottom"],
    stretch: StackClasses["stretch"],
  },
};

const StackValignClasses = {
  vertical: {
    top: StackClasses["top"],
    middle: StackClasses["middle"],
    bottom: StackClasses["bottom"],
    baseline: StackClasses["baseline_justify"],
  },
  "vertical-reverse": {
    top: StackClasses["top"],
    middle: StackClasses["middle"],
    bottom: StackClasses["bottom"],
    baseline: StackClasses["baseline_justify"],
  },
  horizontal: {
    top: StackClasses["left"],
    middle: StackClasses["center"],
    bottom: StackClasses["right"],
    baseline: StackClasses["baseline_items"],
  },
  "horizontal-reverse": {
    top: StackClasses["left"],
    middle: StackClasses["center"],
    bottom: StackClasses["right"],
    baseline: StackClasses["baseline_items"],
  },
};

const StackFitClasses = {
  true: {
    _: "w-fit h-fit",
    sm: "sm:w-fit sm:h-fit",
    md: "md:w-fit md:h-fit",
    lg: "lg:w-fit lg:h-fit",
    xl: "xl:w-fit xl:h-fit",
    "2xl": "2xl:w-fit 2xl:h-fit",
  },
  false: {
    _: "w-full h-full",
    sm: "sm:w-full sm:h-full",
    md: "md:w-full md:h-full",
    lg: "lg:w-full lg:h-full",
    xl: "xl:w-full xl:h-full",
    "2xl": "2xl:w-full 2xl:h-full",
  },
};

const StackFitXClasses = {
  true: {
    _: "w-fit",
    sm: "sm:w-fit",
    md: "md:w-fit",
    lg: "lg:w-fit",
    xl: "xl:w-fit",
    "2xl": "2xl:w-fit",
  },
  false: {
    _: "w-full",
    sm: "sm:w-full",
    md: "md:w-full",
    lg: "lg:w-full",
    xl: "xl:w-full",
    "2xl": "2xl:w-full",
  },
  max: {
    _: "w-[max-content]",
    sm: "sm:w-[max-content]",
    md: "md:w-[max-content]",
    lg: "lg:w-[max-content]",
    xl: "xl:w-[max-content]",
    "2xl": "2xl:w-[max-content]",
  },
};

const StackFitYClasses = {
  true: {
    _: "h-fit",
    sm: "sm:h-fit",
    md: "md:h-fit",
    lg: "lg:h-fit",
    xl: "xl:h-fit",
    "2xl": "2xl:h-fit",
  },
  false: {
    _: "h-full",
    sm: "sm:h-full",
    md: "md:h-full",
    lg: "lg:h-full",
    xl: "xl:h-full",
    "2xl": "2xl:h-full",
  },
  max: {
    _: "h-[max-content]",
    sm: "sm:h-[max-content]",
    md: "md:h-[max-content]",
    lg: "lg:h-[max-content]",
    xl: "xl:h-[max-content]",
    "2xl": "2xl:h-[max-content]",
  },
};

const StackWrapClasses = {
  true: {
    _: "flex-wrap",
    sm: "sm:flex-wrap",
    md: "md:flex-wrap",
    lg: "lg:flex-wrap",
    xl: "xl:flex-wrap",
    "2xl": "2xl:flex-wrap",
  },
  false: {
    _: "flex-nowrap",
    sm: "sm:flex-nowrap",
    md: "md:flex-nowrap",
    lg: "lg:flex-nowrap",
    xl: "xl:flex-nowrap",
    "2xl": "2xl:flex-nowrap",
  },
};
