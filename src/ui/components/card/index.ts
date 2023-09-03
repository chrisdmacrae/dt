import { Card as CardComponent, type CardProps } from './card';
import { FullWidthContent, type FullWidthContentProps } from './FullWidthContent';

export type Card = typeof CardComponent & {
    FullWidth: typeof FullWidthContent;
};

export const Card = CardComponent as Card;

Card.FullWidth = FullWidthContent;

export type { CardProps, FullWidthContentProps };
