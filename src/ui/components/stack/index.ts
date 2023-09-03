import { Stack as StackComponent, type StackProps } from './Stack';
import { StackItem, type StackItemProps } from './StackItem';

export type Stack = typeof StackComponent & {
    Item: typeof StackItem;
};

export const Stack = StackComponent as Stack;
Stack.Item = StackItem;

export type { StackProps, StackItemProps };
