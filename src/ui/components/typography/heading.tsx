import type { HTMLAttributes } from "react";
import { getResponsiveClasses, type Responsive } from "../../theme/responsive";
import classNames from "classnames";

export type HeadingSize =
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "subtitle"
  | "title";
export type HeadingWeight = "light" | "normal" | "bold";
export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = HTMLAttributes<HTMLElement> & {
  as?: HeadingAs;
  weight?: HeadingWeight;
  size?: HeadingSize | Responsive<HeadingSize>;
};

export const Heading = ({
  as: El = "h2",
  size = "large",
  weight = "bold",
  className,
  children,
  ...props
}: HeadingProps) => {
  const headingClasses = getResponsiveClasses(size, HEADING_STYLES);
  const weightClasses = getResponsiveClasses(weight, WEIGHT_STYLES);

  return (
    <El
      {...props}
      className={classNames(
        headingClasses,
        weightClasses,
        className && className
      )}
    >
      {children}
    </El>
  );
};

const WEIGHT_STYLES = {
  light: {
    _: "font-light",
  },
  normal: {
    _: "font-normal",
  },
  bold: {
    _: "font-bold",
  },
};

const HEADING_STYLES = {
  small: {
    _: "text-sm",
    sm: "sm:text-sm",
    md: "md:text-sm",
    lg: "lg:text-sm",
    xl: "xl:text-sm",
    "2xl": "2xl:text-sm",
  },
  medium: {
    _: "text-base",
    sm: "sm:text-lg",
    md: "md:text-lg",
    lg: "lg:text-lg",
    xl: "xl:text-lg",
    "2xl": "2xl:text-lg",
  },
  large: {
    _: "text-2xl",
    sm: "sm:text-2xl",
    md: "md:text-2xl",
    lg: "lg:text-2xl",
    xl: "xl:text-2xl",
    "2xl": "2xl:text-2xl",
  },
  xlarge: {
    _: "text-3xl",
    sm: "sm:text-3xl",
    md: "md:text-3xl",
    lg: "lg:text-3xl",
    xl: "xl:text-3xl",
    "2xl": "2xl:text-3xl",
  },
  subtitle: {
    _: "text-4xl",
    sm: "sm:text-4xl",
    md: "md:text-4xl",
    lg: "lg:text-4xl",
    xl: "xl:text-4xl",
    "2xl": "2xl:text-4xl",
  },
  title: {
    _: "text-6xl",
    sm: "sm:text-6xl",
    md: "md:text-6xl",
    lg: "lg:text-6xl",
    xl: "xl:text-6xl",
    "2xl": "2xl:text-6xl",
  },
};
