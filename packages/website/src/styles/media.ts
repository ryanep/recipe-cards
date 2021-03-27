const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

export const fromTablet = `screen and (min-width: ${BREAKPOINT_TABLET}px)`;
export const fromDesktop = `screen and (min-width: ${BREAKPOINT_DESKTOP}px)`;

export const reducedMotion = '(prefers-reduced-motion)';
export const darkMode = '(prefers-color-scheme: dark)';
