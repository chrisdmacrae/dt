import { type HTMLAttributes, type PropsWithChildren } from "react";
import { type StackProps } from "./Stack";
import { type As } from "../../theme/as";
import { type Responsive, getResponsiveClasses } from "../../theme/responsive";
import classNames from "classnames";

export type StackItemOrder =
  | "first"
  | "last"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;
export type StackItemSpan =
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5";

export type StackItemProps = PropsWithChildren &
  Omit<HTMLAttributes<any>, "span"> & {
    as?: As;
    grow?: boolean;
    shrink?: boolean;
    align?: StackProps["align"];
    valign?: StackProps["valign"];
    order?: StackItemOrder | Responsive<StackItemOrder>;
    span?: StackItemSpan | Responsive<StackItemSpan>;
  };

export const StackItem = ({
  as = "div",
  grow,
  shrink,
  order,
  align,
  valign,
  span,
  className,
  children,
  ...props
}: StackItemProps) => {
  const El = as;
  const growClasses = getResponsiveClasses(String(grow), GrowClasses);
  const shrinkClasses = getResponsiveClasses(String(shrink), ShrinkClasses);
  const orderClasses = getResponsiveClasses(order, OrderClasses);
  const alignClasses = getResponsiveClasses(align, StackItemClasses);
  const valignClasses = getResponsiveClasses(valign, StackItemClasses);

  return (
    <El
      className={classNames(
        "flex flex-col flex-1 w-full",
        className,
        growClasses,
        shrinkClasses,
        orderClasses,
        alignClasses,
        valignClasses
      )}
      {...props}
    >
      {children}
    </El>
  );
};

const StackItemClasses = {
  left: {
    _: "self-start items-start",
    sm: "sm:self-start sm:items-start",
    md: "md:self-start md:items-start",
    lg: "lg:self-start lg:items-start",
    xl: "xl:self-start xl:items-start",
    "2xl": "2xl:self-start 2xl:items-start",
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
  top: {
    _: "self-start",
    sm: "sm:justify-self-start sm:justify-start",
    md: "md:justify-self-start md:justify-start",
    lg: "lg:justify-self-start lg:justify-start",
    xl: "xl:justify-self-start xl:justify-start",
    "2xl": "2xl:justify-self-start 2xl:justify-start",
  },
  middle: {
    _: "justify-self-center justify-center",
    sm: "sm:justify-self-center sm:justify-center",
    md: "md:justify-self-center md:justify-center",
    lg: "lg:justify-self-center lg:justify-center",
    xl: "xl:justify-self-center xl:justify-center",
    "2xl": "2xl:justify-self-center 2xl:justify-center",
  },
  bottom: {
    _: "justify-self-end justify-end",
    sm: "sm:justify-self-end sm:justify-end",
    md: "md:justify-self-end md:justify-end",
    lg: "lg:justify-self-end lg:justify-end",
    xl: "xl:justify-self-end xl:justify-end",
    "2xl": "2xl:justify-self-end 2xl:justify-end",
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
  baseline_justify: {
    _: "justify-self-baseline justify-baseline",
    sm: "sm:justify-self-baseline sm:justify-baseline",
    md: "md:justify-self-baseline md:justify-baseline",
    lg: "lg:justify-self-baseline lg:justify-baseline",
    xl: "xl:justify-self-baseline xl:justify-baseline",
    "2xl": "2xl:justify-self-baseline 2xl:justify-baseline",
  },
  baseline_items: {
    _: "self-baseline",
    sm: "sm:self-baseline",
    md: "md:self-baseline",
    lg: "lg:self-baseline",
    xl: "xl:self-baseline",
    "2xl": "2xl:self-baseline",
  },
  get baseline() {
    return this.baseline_items;
  },
};

const GrowClasses = {
  true: {
    _: "grow",
    sm: "sm:grow",
    md: "md:grow",
    lg: "lg:grow",
    xl: "xl:grow",
    "2xl": "2xl:grow",
  },
  false: {
    _: "grow-0",
    sm: "sm:grow-0",
    md: "md:grow-0",
    lg: "lg:grow-0",
    xl: "xl:grow-0",
    "2xl": "2xl:grow-0",
  },
};

const ShrinkClasses = {
  true: {
    _: "shrink",
    sm: "sm:shrink",
    md: "md:shrink",
    lg: "lg:shrink",
    xl: "xl:shrink",
    "2xl": "2xl:shrink",
  },
  false: {
    _: "shrink-0",
    sm: "sm:shrink-0",
    md: "md:shrink-0",
    lg: "lg:shrink-0",
    xl: "xl:shrink-0",
    "2xl": "2xl:shrink-0",
  },
};

const OrderClasses = {
  first: {
    _: "order-first",
    sm: "sm:order-first",
    md: "md:order-first",
    lg: "lg:order-first",
    xl: "xl:order-first",
    "2xl": "2xl:order-first",
  },
  last: {
    _: "order-last",
    sm: "sm:order-last",
    md: "md:order-last",
    lg: "lg:order-last",
    xl: "xl:order-last",
    "2xl": "2xl:order-last",
  },
  1: {
    _: "order-1",
    sm: "sm:order-1",
    md: "md:order-1",
    lg: "lg:order-1",
    xl: "xl:order-1",
    "2xl": "2xl:order-1",
  },
  2: {
    _: "order-2",
    sm: "sm:order-2",
    md: "md:order-2",
    lg: "lg:order-2",
    xl: "xl:order-2",
    "2xl": "2xl:order-2",
  },
  3: {
    _: "order-3",
    sm: "sm:order-3",
    md: "md:order-3",
    lg: "lg:order-3",
    xl: "xl:order-3",
    "2xl": "2xl:order-3",
  },
  4: {
    _: "order-4",
    sm: "sm:order-4",
    md: "md:order-4",
    lg: "lg:order-4",
    xl: "xl:order-4",
    "2xl": "2xl:order-4",
  },
  5: {
    _: "order-5",
    sm: "sm:order-5",
    md: "md:order-5",
    lg: "lg:order-5",
    xl: "xl:order-5",
    "2xl": "2xl:order-5",
  },
  6: {
    _: "order-6",
    sm: "sm:order-6",
    md: "md:order-6",
    lg: "lg:order-6",
    xl: "xl:order-6",
    "2xl": "2xl:order-6",
  },
  7: {
    _: "order-7",
    sm: "sm:order-7",
    md: "md:order-7",
    lg: "lg:order-7",
    xl: "xl:order-7",
    "2xl": "2xl:order-7",
  },
  8: {
    _: "order-8",
    sm: "sm:order-8",
    md: "md:order-8",
    lg: "lg:order-8",
    xl: "xl:order-8",
    "2xl": "2xl:order-8",
  },
  9: {
    _: "order-9",
    sm: "sm:order-9",
    md: "md:order-9",
    lg: "lg:order-9",
    xl: "xl:order-9",
    "2xl": "2xl:order-9",
  },
  10: {
    _: "order-10",
    sm: "sm:order-10",
    md: "md:order-10",
    lg: "lg:order-10",
    xl: "xl:order-10",
    "2xl": "2xl:order-10",
  },
};
