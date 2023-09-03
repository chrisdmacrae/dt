import type { PropsWithChildren } from "react";
import { Grid } from "../ui/components/grid";
import { Stack } from "../ui/components/stack";

const MediaGridWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack className="py-24 overflow-hidden">
      <Grid
        gap={2}
        rows={1}
        cols={3}
        className="[&>*:nth-child(1n)]:rotate-[-2deg] [&>*:nth-child(2n)]:rotate-[2deg] [&>*]:w-[140%] ml-[-10%] lg:[&>*]:w-[120%] lg:ml-[-5%] [&>*]:relative [&>*]:z-1 [&>*:nth-child(2n)]:z-10 [&>*:hover]:rotate-[0!important] [&>*]:transition-all [&>*:hover]:scale-[1.1] [&>*:hover]:z-20"
      >
        {children}
      </Grid>
    </Stack>
  );
};

const MediaGridItem = ({ children }: PropsWithChildren) => {
  return (
    <Grid.Item className="w-full rounded-lg overflow-hidden shadow-xl">
      <figure className="aspect-video w-full">{children}</figure>
    </Grid.Item>
  );
};

export type MediaGrid = typeof MediaGridWrapper & {
  Item: typeof MediaGridItem;
};

export const MediaGrid = MediaGridWrapper as MediaGrid;
MediaGrid.Item = MediaGridItem;
