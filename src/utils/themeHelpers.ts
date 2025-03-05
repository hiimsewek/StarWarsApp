import { theme } from "styles";

type Breakpoint = keyof typeof theme.breakpoints;

export const unpackBreakpoint = (breakpoint: Breakpoint) => {
  const breakpointRule = theme.breakpoints[breakpoint];

  const breakpointValue = breakpointRule.split(":")[1];

  return parseInt(breakpointValue);
};
