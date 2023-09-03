import type { HTMLAttributes, PropsWithChildren } from "react";
import type { As } from "../../theme/as";
import classNames from "classnames";
import { getResponsiveClasses, type Responsive } from "../../theme/responsive";

export type GridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | "masonry";
export type GridRowSize = "auto" | "min-content" | "max-content" | "fr";
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type GridColSize = "auto" | "min-content" | "max-content" | "fr";
export type GridFlow = "dense" | "row" | "row-dense" | "col" | "col-dense";

export type GridProps = PropsWithChildren &
  HTMLAttributes<any> & {
    as?: As;
    gap?: GridGap | Responsive<GridGap>;
    rows?: GridRows | Responsive<GridRows>;
    rowSize?: GridRowSize | Responsive<GridRowSize>;
    cols?: GridCols | Responsive<GridCols>;
    colSize?: GridColSize | Responsive<GridColSize>;
    flow?: GridFlow | Responsive<GridFlow>;
    className?: string;
  };

export const Grid = ({
  as = "div",
  gap = 1,
  rows,
  rowSize = "auto",
  cols,
  colSize = "auto",
  flow,
  className,
  children,
}: GridProps) => {
  const El = as;
  const gapClasses = getResponsiveClasses(gap, GridGapClasses);
  const rowClasses = getResponsiveClasses(rows, GridRowsClasses);
  const rowSizeClasses = getResponsiveClasses(rowSize, GridRowsClasses);
  const colClasses = getResponsiveClasses(cols, GridColsClasses);
  const colSizeClasses = getResponsiveClasses(colSize, GridColsClasses);
  const flowClasses = getResponsiveClasses(flow, GridFlowClasses);

  return (
    <El
      className={classNames(
        "w-full grid",
        gapClasses,
        rowClasses,
        rowSizeClasses,
        colClasses,
        colSizeClasses,
        flowClasses,
        className
      )}
    >
      {children}
    </El>
  );
};

const GridGapClasses = {
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
};

const GridRowsClasses = {
  masonry: {
    _: "grid-rows-[masonry]",
    sm: "sm:grid-rows-[masonry]",
    md: "md:grid-rows-[masonry]",
    lg: "lg:grid-rows-[masonry]",
    xl: "xl:grid-rows-[masonry]",
    "2xl": "2xl:grid-rows-[masonry]",
  },
  1: {
    _: "grid-rows-1",
    sm: "sm:grid-rows-1",
    md: "md:grid-rows-1",
    lg: "lg:grid-rows-1",
    xl: "xl:grid-rows-1",
    "2xl": "2xl:grid-rows-1",
  },
  2: {
    _: "grid-rows-2",
    sm: "sm:grid-rows-2",
    md: "md:grid-rows-2",
    lg: "lg:grid-rows-2",
    xl: "xl:grid-rows-2",
    "2xl": "2xl:grid-rows-2",
  },
  3: {
    _: "grid-rows-3",
    sm: "sm:grid-rows-3",
    md: "md:grid-rows-3",
    lg: "lg:grid-rows-3",
    xl: "xl:grid-rows-3",
    "2xl": "2xl:grid-rows-3",
  },
  4: {
    _: "grid-rows-4",
    sm: "sm:grid-rows-4",
    md: "md:grid-rows-4",
    lg: "lg:grid-rows-4",
    xl: "xl:grid-rows-4",
    "2xl": "2xl:grid-rows-4",
  },
  5: {
    _: "grid-rows-5",
    sm: "sm:grid-rows-5",
    md: "md:grid-rows-5",
    lg: "lg:grid-rows-5",
    xl: "xl:grid-rows-5",
    "2xl": "2xl:grid-rows-5",
  },
  6: {
    _: "grid-rows-6",
    sm: "sm:grid-rows-6",
    md: "md:grid-rows-[6]",
    lg: "lg:grid-rows-6",
    xl: "xl:grid-rows-6",
    "2xl": "2xl:grid-rows-6",
  },
  auto: {
    _: "auto-rows-auto",
    sm: "sm:auto-rows-auto",
    md: "md:auto-rows-auto",
    lg: "lg:auto-rows-auto",
    xl: "xl:auto-rows-auto",
    "2xl": "2xl:auto-rows-auto",
  },
  "min-content": {
    _: "auto-rows-min",
    sm: "sm:auto-rows-min",
    md: "md:auto-rows-min",
    lg: "lg:auto-rows-min",
    xl: "xl:auto-rows-min",
    "2xl": "2xl:auto-rows-min",
  },
  "max-content": {
    _: "auto-rows-max",
    sm: "sm:auto-rows-max",
    md: "md:auto-rows-max",
    lg: "lg:auto-rows-max",
    xl: "xl:auto-rows-max",
    "2xl": "2xl:auto-rows-max",
  },
  fr: {
    _: "auto-rows-fr",
    sm: "sm:auto-rows-fr",
    md: "md:auto-rows-fr",
    lg: "lg:auto-rows-fr",
    xl: "xl:auto-rows-fr",
    "2xl": "2xl:auto-rows-fr",
  },
};

const GridColsClasses = {
  1: {
    _: "grid-cols-1",
    sm: "sm:grid-cols-1",
    md: "md:grid-cols-1",
    lg: "lg:grid-cols-1",
    xl: "xl:grid-cols-1",
    "2xl": "2xl:grid-cols-1",
  },
  2: {
    _: "grid-cols-2",
    sm: "sm:grid-cols-2",
    md: "md:grid-cols-2",
    lg: "lg:grid-cols-2",
    xl: "xl:grid-cols-2",
    "2xl": "2xl:grid-cols-2",
  },
  3: {
    _: "grid-cols-3",
    sm: "sm:grid-cols-3",
    md: "md:grid-cols-3",
    lg: "lg:grid-cols-3",
    xl: "xl:grid-cols-3",
    "2xl": "2xl:grid-cols-3",
  },
  4: {
    _: "grid-cols-4",
    sm: "sm:grid-cols-4",
    md: "md:grid-cols-4",
    lg: "lg:grid-cols-4",
    xl: "xl:grid-cols-4",
    "2xl": "2xl:grid-cols-4",
  },
  5: {
    _: "grid-cols-5",
    sm: "sm:grid-cols-5",
    md: "md:grid-cols-5",
    lg: "lg:grid-cols-5",
    xl: "xl:grid-cols-5",
    "2xl": "2xl:grid-cols-5",
  },
  6: {
    _: "grid-cols-6",
    sm: "sm:grid-cols-6",
    md: "md:grid-cols-6",
    lg: "lg:grid-cols-6",
    xl: "xl:grid-cols-6",
    "2xl": "2xl:grid-cols-6",
  },
  7: {
    _: "grid-cols-7",
    sm: "sm:grid-cols-7",
    md: "md:grid-cols-7",
    lg: "lg:grid-cols-7",
    xl: "xl:grid-cols-7",
    "2xl": "2xl:grid-cols-7",
  },
  8: {
    _: "grid-cols-8",
    sm: "sm:grid-cols-8",
    md: "md:grid-cols-8",
    lg: "lg:grid-cols-8",
    xl: "xl:grid-cols-8",
    "2xl": "2xl:grid-cols-8",
  },
  9: {
    _: "grid-cols-9",
    sm: "sm:grid-cols-9",
    md: "md:grid-cols-9",
    lg: "lg:grid-cols-9",
    xl: "xl:grid-cols-9",
    "2xl": "2xl:grid-cols-9",
  },
  10: {
    _: "grid-cols-10",
    sm: "sm:grid-cols-10",
    md: "md:grid-cols-10",
    lg: "lg:grid-cols-10",
    xl: "xl:grid-cols-10",
    "2xl": "2xl:grid-cols-10",
  },
  auto: {
    _: "auto-cols-auto",
    sm: "sm:auto-cols-auto",
    md: "md:auto-cols-auto",
    lg: "lg:auto-cols-auto",
    xl: "xl:auto-cols-auto",
    "2xl": "2xl:auto-cols-auto",
  },
  "min-content": {
    _: "auto-cols-min",
    sm: "sm:auto-cols-min",
    md: "md:auto-cols-min",
    lg: "lg:auto-cols-min",
    xl: "xl:auto-cols-min",
    "2xl": "2xl:auto-cols-min",
  },
  "max-content": {
    _: "auto-cols-max",
    sm: "sm:auto-cols-max",
    md: "md:auto-cols-max",
    lg: "lg:auto-cols-max",
    xl: "xl:auto-cols-max",
    "2xl": "2xl:auto-cols-max",
  },
  fr: {
    _: "auto-cols-fr",
    sm: "sm:auto-cols-fr",
    md: "md:auto-cols-fr",
    lg: "lg:auto-cols-fr",
    xl: "xl:auto-cols-fr",
    "2xl": "2xl:auto-cols-fr",
  },
};

const GridFlowClasses = {
  dense: {
    _: "grid-flow-dense",
    sm: "sm:grid-flow-dense",
    md: "md:grid-flow-dense",
    lg: "lg:grid-flow-dense",
    xl: "xl:grid-flow-dense",
    "2xl": "2xl:grid-flow-dense",
  },
  col: {
    _: "grid-flow-col",
    sm: "sm:grid-flow-col",
    md: "md:grid-flow-col",
    lg: "lg:grid-flow-col",
    xl: "xl:grid-flow-col",
    "2xl": "2xl:grid-flow-col",
  },
  "col-dense": {
    _: "grid-flow-col-dense",
    sm: "sm:grid-flow-col-dense",
    md: "md:grid-flow-col-dense",
    lg: "lg:grid-flow-col-dense",
    xl: "xl:grid-flow-col-dense",
    "2xl": "2xl:grid-flow-col-dense",
  },
  row: {
    _: "grid-flow-row",
    sm: "sm:grid-flow-row",
    md: "md:grid-flow-row",
    lg: "lg:grid-flow-row",
    xl: "xl:grid-flow-row",
    "2xl": "2xl:grid-flow-row",
  },
  "row-dense": {
    _: "grid-flow-row-dense",
    sm: "sm:grid-flow-row-dense",
    md: "md:grid-flow-row-dense",
    lg: "lg:grid-flow-row-dense",
    xl: "xl:grid-flow-row-dense",
    "2xl": "2xl:grid-flow-row-dense",
  },
};
