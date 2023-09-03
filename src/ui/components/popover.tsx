import { Popover as HeadlessPopover } from '@headlessui/react';
import { Placement } from '@popperjs/core';
import classNames from 'classnames';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

export type PopoverProps = PropsWithChildren & {
    placement: Placement;
    disabled?: boolean;
    open?: boolean;
    onClick?: () => void;
    buttonClassName?: string;
    popoverClassName?: string;
    popover: (
        close: (
            focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null> | undefined
        ) => void,
        open: boolean
    ) => ReactNode;
};

export const Popover = ({
    children,
    placement,
    disabled,
    open,
    onClick,
    popoverClassName = 'w-fit h-fit basis-fit',
    popover,
    buttonClassName = 'h-fit w-full',
}: PopoverProps) => {
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: placement,
        strategy: 'absolute',
    });

    useEffect(() => {
        if (open && update) update();
    }, [open]);

    useEffect(() => {
        if (open && onClick) {
            const toggle = (e: MouseEvent) => {
                const el = e.target as HTMLElement;
                const parentEl = el.parentElement;

                e.stopPropagation();

                if (
                    el !== referenceElement &&
                    parentEl !== referenceElement &&
                    e.currentTarget !== referenceElement
                ) {
                    onClick();
                }
            };

            window.addEventListener('click', toggle);

            return () => {
                window.removeEventListener('click', toggle);
            };
        }
    }, [open, onClick]);

    return (
        <HeadlessPopover className={classNames('flex', popoverClassName)}>
            {open !== undefined && (
                <button
                    type="button"
                    onClick={onClick}
                    disabled={disabled}
                    className={classNames('relative focus:outline-none z-1', buttonClassName)}
                    ref={(r) => setReferenceElement(r)}
                >
                    {children}
                </button>
            )}
            {open == undefined && (
                <HeadlessPopover.Button
                    onClick={onClick}
                    disabled={disabled}
                    className={classNames('relative focus:outline-none z-1', buttonClassName)}
                    ref={(r) => setReferenceElement(r)}
                >
                    {children}
                </HeadlessPopover.Button>
            )}
            <HeadlessPopover.Panel
                static={open !== undefined ? true : undefined}
                className={classNames(
                    'isolate z-10',
                    popoverClassName,
                    open !== undefined && open === true && 'block',
                    open !== undefined && open === false && 'hidden'
                )}
                ref={(r) => setPopperElement(r)}
                style={styles.popper}
                {...attributes.popper}
            >
                {({ close, open: popperIsOpen }) => <>{popover(close, open || popperIsOpen)}</>}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
};
