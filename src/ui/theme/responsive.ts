import theme from './theme';

export const breakpoints = Object.assign(theme.screens, {
    _: '0px',
});

export type Breakpoints = keyof typeof breakpoints;

export type ResponsiveValue = string | number | symbol | 'true' | 'false';

export type Responsive<
    T extends ResponsiveValue | boolean | Record<string, ResponsiveValue | boolean>
> = { _: T } & {
    [key in Breakpoints]?: T;
};

export type ResponsiveClassMap<T extends ResponsiveValue = any> = Record<T, Responsive<string>>;

export const getResponsiveClasses = <T extends ResponsiveValue = any>(
    prop?: T | Responsive<T>,
    classes?: ResponsiveClassMap<T>,
    getDesiredClassesForBreakpoint?: (breakpoint: Breakpoints) => ResponsiveClassMap<T>
) => {
    if (!classes) return '';
    if (prop === undefined) return getResponsiveClassesForProp(prop, classes);

    if (getDesiredClassesForBreakpoint !== undefined) {
        const classesForBreakpoints = Object.keys(breakpoints).reduce((breakpoints, breakpoint) => {
            const breakpointClasses = getDesiredClassesForBreakpoint(breakpoint as Breakpoints);

            if (breakpointClasses) {
                breakpoints[breakpoint as Breakpoints] = breakpointClasses;
            }

            return breakpoints;
        }, {} as Record<Breakpoints, any>);

        return Object.keys(classesForBreakpoints)
            .map((breakpoint) => {
                const classes = classesForBreakpoints[breakpoint as Breakpoints];
                const lookup = typeof prop === 'object' ? prop[breakpoint as Breakpoints] : prop;

                if (!lookup) return '';
                if (typeof prop !== 'object' && breakpoint !== '_') return '';

                const className = classes[lookup][breakpoint];

                return className;
            })
            .filter((v) => v !== '')
            .filter((value, index, array) => {
                return array.indexOf(value) === index;
            })
            .join(' ');
    }

    return getResponsiveClassesForProp(prop, classes);
};

const getResponsiveClassesForProp = <T extends ResponsiveValue = any>(
    prop: T | Responsive<T> | undefined,
    classes: ResponsiveClassMap<T>
) => {
    if (prop && typeof prop === 'object') {
        return Object.keys(prop)
            .map((breakpoint) => {
                const breakpointValue = prop[breakpoint as Breakpoints];

                if (!breakpointValue) return '';

                const breakpointClasses = classes[breakpointValue];

                return breakpointClasses[breakpoint as Breakpoints];
            })
            .filter((v) => v !== undefined)
            .join(' ');
    } else if (typeof prop === 'boolean' || prop === undefined) {
        const truthyProp = String(prop === true) as T;
        const classesForValue = classes[truthyProp];

        if (!classesForValue) return '';

        return classesForValue._;
    } else if (
        typeof prop !== 'boolean' &&
        typeof prop !== 'object' &&
        typeof prop !== 'function'
    ) {
        const classesForValue = classes[prop];

        if (!classesForValue) return '';

        return classesForValue._;
    }
};
