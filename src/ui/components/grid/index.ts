import { Grid as GridComponent, type GridProps } from './Grid';
import { GridItem, type GridItemProps } from './GridItem';

export type Grid = typeof GridComponent & {
    Item: typeof GridItem;
};

export const Grid = GridComponent as Grid;
Grid.Item = GridItem;

export type { GridProps, GridItemProps };
