import type { HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";
import { getResponsiveClasses, type Responsive } from "../../theme/responsive";

export type GridRowSpan = 1 | 2 | 3 | 4 | 5 | 6 | "auto" | "full";
export type GridRowStop = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
export type GridColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "auto"
  | "full";
export type GridColStop =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | "auto";

export type GridItemProps = HTMLAttributes<HTMLDivElement> & {
  row?: {
    start?: GridRowStop | Responsive<GridRowStop>;
    end?: GridRowStop | Responsive<GridRowStop>;
    span?: GridRowSpan | Responsive<GridRowSpan>;
  };
  col?: {
    start?: GridColStop | Responsive<GridColStop>;
    end?: GridColStop | Responsive<GridColStop>;
    span?: GridColSpan | Responsive<GridColSpan>;
  };
};

export const GridItem = ({
  row,
  col,
  className,
  children,
  ...props
}: GridItemProps) => {
  const rowSpanClasses = getResponsiveClasses(row?.span, RowSpanClasses);
  const rowStartClasses = getResponsiveClasses(row?.start, RowStartClasses);
  const rowEndClasses = getResponsiveClasses(row?.end, RowEndClasses);
  const colSpanClasses = getResponsiveClasses(col?.span, ColSpanClasses);
  const colStartClasses = getResponsiveClasses(col?.start, ColStartClasses);
  const colEndClasses = getResponsiveClasses(col?.end, ColEndClasses);

  return (
    <div
      {...props}
      className={classNames(
        "",
        rowSpanClasses,
        rowStartClasses,
        rowEndClasses,
        colSpanClasses,
        colStartClasses,
        colEndClasses,
        className && className
      )}
    >
      {children}
    </div>
  );
};

const RowStartClasses = {
  auto: {
    _: "row-start-auto",
    sm: "sm:row-start-auto",
    md: "md:row-start-auto",
    lg: "lg:row-start-auto",
    xl: "xl:row-start-auto",
    "2xl": "2xl:row-start-auto",
  },
  1: {
    _: "row-start-1",
    sm: "sm:row-start-1",
    md: "md:row-start-1",
    lg: "lg:row-start-1",
    xl: "xl:row-start-1",
    "2xl": "2xl:row-start-1",
  },
  2: {
    _: "row-start-2",
    sm: "sm:row-start-2",
    md: "md:row-start-2",
    lg: "lg:row-start-2",
    xl: "xl:row-start-2",
    "2xl": "2xl:row-start-2",
  },
  3: {
    _: "row-start-3",
    sm: "sm:row-start-3",
    md: "md:row-start-3",
    lg: "lg:row-start-3",
    xl: "xl:row-start-3",
    "2xl": "2xl:row-start-3",
  },
  4: {
    _: "row-start-4",
    sm: "sm:row-start-4",
    md: "md:row-start-4",
    lg: "lg:row-start-4",
    xl: "xl:row-start-4",
    "2xl": "2xl:row-start-4",
  },
  5: {
    _: "row-start-5",
    sm: "sm:row-start-5",
    md: "md:row-start-5",
    lg: "lg:row-start-5",
    xl: "xl:row-start-5",
    "2xl": "2xl:row-start-5",
  },
  6: {
    _: "row-start-6",
    sm: "sm:row-start-6",
    md: "md:row-start-6",
    lg: "lg:row-start-6",
    xl: "xl:row-start-6",
    "2xl": "2xl:row-start-6",
  },
  7: {
    _: "row-start-7",
    sm: "sm:row-start-7",
    md: "md:row-start-7",
    lg: "lg:row-start-7",
    xl: "xl:row-start-7",
    "2xl": "2xl:row-start-7",
  },
};

const RowEndClasses = {
  auto: {
    _: "row-end-auto",
    sm: "sm:row-end-auto",
    md: "md:row-end-auto",
    lg: "lg:row-end-auto",
    xl: "xl:row-end-auto",
    "2xl": "2xl:row-end-auto",
  },
  1: {
    _: "row-end-1",
    sm: "sm:row-end-1",
    md: "md:row-end-1",
    lg: "lg:row-end-1",
    xl: "xl:row-end-1",
    "2xl": "2xl:row-end-1",
  },
  2: {
    _: "row-end-2",
    sm: "sm:row-end-2",
    md: "md:row-end-2",
    lg: "lg:row-end-2",
    xl: "xl:row-end-2",
    "2xl": "2xl:row-end-2",
  },
  3: {
    _: "row-end-3",
    sm: "sm:row-end-3",
    md: "md:row-end-3",
    lg: "lg:row-end-3",
    xl: "xl:row-end-3",
    "2xl": "2xl:row-end-3",
  },
  4: {
    _: "row-end-4",
    sm: "sm:row-end-4",
    md: "md:row-end-4",
    lg: "lg:row-end-4",
    xl: "xl:row-end-4",
    "2xl": "2xl:row-end-4",
  },
  5: {
    _: "row-end-5",
    sm: "sm:row-end-5",
    md: "md:row-end-5",
    lg: "lg:row-end-5",
    xl: "xl:row-end-5",
    "2xl": "2xl:row-end-5",
  },
  6: {
    _: "row-end-6",
    sm: "sm:row-end-6",
    md: "md:row-end-6",
    lg: "lg:row-end-6",
    xl: "xl:row-end-6",
    "2xl": "2xl:row-end-6",
  },
  7: {
    _: "row-end-7",
    sm: "sm:row-end-7",
    md: "md:row-end-7",
    lg: "lg:row-end-7",
    xl: "xl:row-end-7",
    "2xl": "2xl:row-end-7",
  },
};

const RowSpanClasses = {
  auto: {
    _: "row-auto",
    sm: "sm:row-auto",
    md: "md:row-auto",
    lg: "lg:row-auto",
    xl: "xl:row-auto",
    "2xl": "2xl:row-auto",
  },
  full: {
    _: "row-span-full",
    sm: "sm:row-span-full",
    md: "md:row-span-full",
    lg: "lg:row-span-full",
    xl: "xl:row-span-full",
    "2xl": "2xl:row-span-full",
  },
  1: {
    _: "row-span-1",
    sm: "sm:row-span-1",
    md: "md:row-span-1",
    lg: "lg:row-span-1",
    xl: "xl:row-span-1",
    "2xl": "2xl:row-span-1",
  },
  2: {
    _: "row-span-2",
    sm: "sm:row-span-2",
    md: "md:row-span-2",
    lg: "lg:row-span-2",
    xl: "xl:row-span-2",
    "2xl": "2xl:row-span-2",
  },
  3: {
    _: "row-span-3",
    sm: "sm:row-span-3",
    md: "md:row-span-3",
    lg: "lg:row-span-3",
    xl: "xl:row-span-3",
    "2xl": "2xl:row-span-3",
  },
  4: {
    _: "row-span-4",
    sm: "sm:row-span-4",
    md: "md:row-span-4",
    lg: "lg:row-span-4",
    xl: "xl:row-span-4",
    "2xl": "2xl:row-span-4",
  },
  5: {
    _: "row-span-5",
    sm: "sm:row-span-5",
    md: "md:row-span-5",
    lg: "lg:row-span-5",
    xl: "xl:row-span-5",
    "2xl": "2xl:row-span-5",
  },
  6: {
    _: "row-span-6",
    sm: "sm:row-span-6",
    md: "md:row-span-6",
    lg: "lg:row-span-6",
    xl: "xl:row-span-6",
    "2xl": "2xl:row-span-6",
  },
};

const ColStartClasses = {
  auto: {
    _: "col-start-auto",
    sm: "sm:col-start-auto",
    md: "md:col-start-auto",
    lg: "lg:col-start-auto",
    xl: "xl:col-start-auto",
    "2xl": "2xl:col-start-auto",
  },
  1: {
    _: "col-start-1",
    sm: "sm:col-start-1",
    md: "md:col-start-1",
    lg: "lg:col-start-1",
    xl: "xl:col-start-1",
    "2xl": "2xl:col-start-1",
  },
  2: {
    _: "col-start-2",
    sm: "sm:col-start-2",
    md: "md:col-start-2",
    lg: "lg:col-start-2",
    xl: "xl:col-start-2",
    "2xl": "2xl:col-start-2",
  },
  3: {
    _: "col-start-3",
    sm: "sm:col-start-3",
    md: "md:col-start-3",
    lg: "lg:col-start-3",
    xl: "xl:col-start-3",
    "2xl": "2xl:col-start-3",
  },
  4: {
    _: "col-start-4",
    sm: "sm:col-start-4",
    md: "md:col-start-4",
    lg: "lg:col-start-4",
    xl: "xl:col-start-4",
    "2xl": "2xl:col-start-4",
  },
  5: {
    _: "col-start-5",
    sm: "sm:col-start-5",
    md: "md:col-start-5",
    lg: "lg:col-start-5",
    xl: "xl:col-start-5",
    "2xl": "2xl:col-start-5",
  },
  6: {
    _: "col-start-6",
    sm: "sm:col-start-6",
    md: "md:col-start-6",
    lg: "lg:col-start-6",
    xl: "xl:col-start-6",
    "2xl": "2xl:col-start-6",
  },
  7: {
    _: "col-start-7",
    sm: "sm:col-start-7",
    md: "md:col-start-7",
    lg: "lg:col-start-7",
    xl: "xl:col-start-7",
    "2xl": "2xl:col-start-7",
  },
  8: {
    _: "col-start-8",
    sm: "sm:col-start-8",
    md: "md:col-start-8",
    lg: "lg:col-start-8",
    xl: "xl:col-start-8",
    "2xl": "2xl:col-start-8",
  },
  9: {
    _: "col-start-9",
    sm: "sm:col-start-9",
    md: "md:col-start-9",
    lg: "lg:col-start-9",
    xl: "xl:col-start-9",
    "2xl": "2xl:col-start-9",
  },
  10: {
    _: "col-start-10",
    sm: "sm:col-start-10",
    md: "md:col-start-10",
    lg: "lg:col-start-10",
    xl: "xl:col-start-10",
    "2xl": "2xl:col-start-10",
  },
  11: {
    _: "col-start-11",
    sm: "sm:col-start-11",
    md: "md:col-start-11",
    lg: "lg:col-start-11",
    xl: "xl:col-start-11",
    "2xl": "2xl:col-start-11",
  },
  12: {
    _: "col-start-12",
    sm: "sm:col-start-12",
    md: "md:col-start-12",
    lg: "lg:col-start-12",
    xl: "xl:col-start-12",
    "2xl": "2xl:col-start-12",
  },
  13: {
    _: "col-start-13",
    sm: "sm:col-start-13",
    md: "md:col-start-13",
    lg: "lg:col-start-13",
    xl: "xl:col-start-13",
    "2xl": "2xl:col-start-13",
  },
};

const ColEndClasses = {
  auto: {
    _: "col-end-auto",
    sm: "sm:col-end-auto",
    md: "md:col-end-auto",
    lg: "lg:col-end-auto",
    xl: "xl:col-end-auto",
    "2xl": "2xl:col-end-auto",
  },
  1: {
    _: "col-end-1",
    sm: "sm:col-end-1",
    md: "md:col-end-1",
    lg: "lg:col-end-1",
    xl: "xl:col-end-1",
    "2xl": "2xl:col-end-1",
  },
  2: {
    _: "col-end-2",
    sm: "sm:col-end-2",
    md: "md:col-end-2",
    lg: "lg:col-end-2",
    xl: "xl:col-end-2",
    "2xl": "2xl:col-end-2",
  },
  3: {
    _: "col-end-3",
    sm: "sm:col-end-3",
    md: "md:col-end-3",
    lg: "lg:col-end-3",
    xl: "xl:col-end-3",
    "2xl": "2xl:col-end-3",
  },
  4: {
    _: "col-end-4",
    sm: "sm:col-end-4",
    md: "md:col-end-4",
    lg: "lg:col-end-4",
    xl: "xl:col-end-4",
    "2xl": "2xl:col-end-4",
  },
  5: {
    _: "col-end-5",
    sm: "sm:col-end-5",
    md: "md:col-end-5",
    lg: "lg:col-end-5",
    xl: "xl:col-end-5",
    "2xl": "2xl:col-end-5",
  },
  6: {
    _: "col-end-6",
    sm: "sm:col-end-6",
    md: "md:col-end-6",
    lg: "lg:col-end-6",
    xl: "xl:col-end-6",
    "2xl": "2xl:col-end-6",
  },
  7: {
    _: "col-end-7",
    sm: "sm:col-end-7",
    md: "md:col-end-7",
    lg: "lg:col-end-7",
    xl: "xl:col-end-7",
    "2xl": "2xl:col-end-7",
  },
  8: {
    _: "col-end-8",
    sm: "sm:col-end-8",
    md: "md:col-end-8",
    lg: "lg:col-end-8",
    xl: "xl:col-end-8",
    "2xl": "2xl:col-end-8",
  },
  9: {
    _: "col-end-9",
    sm: "sm:col-end-9",
    md: "md:col-end-9",
    lg: "lg:col-end-9",
    xl: "xl:col-end-9",
    "2xl": "2xl:col-end-9",
  },
  10: {
    _: "col-end-10",
    sm: "sm:col-end-10",
    md: "md:col-end-10",
    lg: "lg:col-end-10",
    xl: "xl:col-end-10",
    "2xl": "2xl:col-end-10",
  },
  11: {
    _: "col-end-11",
    sm: "sm:col-end-11",
    md: "md:col-end-11",
    lg: "lg:col-end-11",
    xl: "xl:col-end-11",
    "2xl": "2xl:col-end-11",
  },
  12: {
    _: "col-end-12",
    sm: "sm:col-end-12",
    md: "md:col-end-12",
    lg: "lg:col-end-12",
    xl: "xl:col-end-12",
    "2xl": "2xl:col-end-12",
  },
  13: {
    _: "col-end-13",
    sm: "sm:col-end-13",
    md: "md:col-end-13",
    lg: "lg:col-end-13",
    xl: "xl:col-end-13",
    "2xl": "2xl:col-end-13",
  },
};

const ColSpanClasses = {
  auto: {
    _: "col-auto",
    sm: "sm:col-auto",
    md: "md:col-auto",
    lg: "lg:col-auto",
    xl: "xl:col-auto",
    "2xl": "2xl:col-auto",
  },
  full: {
    _: "col-span-ful",
    sm: "sm:col-span-ful",
    md: "md:col-span-ful",
    lg: "lg:col-span-ful",
    xl: "xl:col-span-ful",
    "2xl": "2xl:col-span-ful",
  },
  1: {
    _: "col-span-1",
    sm: "sm:col-span-1",
    md: "md:col-span-1",
    lg: "lg:col-span-1",
    xl: "xl:col-span-1",
    "2xl": "2xl:col-span-1",
  },
  2: {
    _: "col-span-2",
    sm: "sm:col-span-2",
    md: "md:col-span-2",
    lg: "lg:col-span-2",
    xl: "xl:col-span-2",
    "2xl": "2xl:col-span-2",
  },
  3: {
    _: "col-span-3",
    sm: "sm:col-span-3",
    md: "md:col-span-3",
    lg: "lg:col-span-3",
    xl: "xl:col-span-3",
    "2xl": "2xl:col-span-3",
  },
  4: {
    _: "col-span-4",
    sm: "sm:col-span-4",
    md: "md:col-span-4",
    lg: "lg:col-span-4",
    xl: "xl:col-span-4",
    "2xl": "2xl:col-span-4",
  },
  5: {
    _: "col-span-5",
    sm: "sm:col-span-5",
    md: "md:col-span-5",
    lg: "lg:col-span-5",
    xl: "xl:col-span-5",
    "2xl": "2xl:col-span-5",
  },
  6: {
    _: "col-span-6",
    sm: "sm:col-span-6",
    md: "md:col-span-6",
    lg: "lg:col-span-6",
    xl: "xl:col-span-6",
    "2xl": "2xl:col-span-6",
  },
  7: {
    _: "col-span-7",
    sm: "sm:col-span-7",
    md: "md:col-span-7",
    lg: "lg:col-span-7",
    xl: "xl:col-span-7",
    "2xl": "2xl:col-span-7",
  },
  8: {
    _: "col-span-8",
    sm: "sm:col-span-8",
    md: "md:col-span-8",
    lg: "lg:col-span-8",
    xl: "xl:col-span-8",
    "2xl": "2xl:col-span-8",
  },
  9: {
    _: "col-span-9",
    sm: "sm:col-span-9",
    md: "md:col-span-9",
    lg: "lg:col-span-9",
    xl: "xl:col-span-9",
    "2xl": "2xl:col-span-9",
  },
  10: {
    _: "col-span-10",
    sm: "sm:col-span-10",
    md: "md:col-span-10",
    lg: "lg:col-span-10",
    xl: "xl:col-span-10",
    "2xl": "2xl:col-span-10",
  },
  11: {
    _: "col-span-11",
    sm: "sm:col-span-11",
    md: "md:col-span-11",
    lg: "lg:col-span-11",
    xl: "xl:col-span-11",
    "2xl": "2xl:col-span-11",
  },
  12: {
    _: "col-span-12",
    sm: "sm:col-span-12",
    md: "md:col-span-12",
    lg: "lg:col-span-12",
    xl: "xl:col-span-12",
    "2xl": "2xl:col-span-12",
  },
};
