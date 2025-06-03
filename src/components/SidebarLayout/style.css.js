import { style } from "@vanilla-extract/css";

export const headerWrapperClass = style({
  borderBottom: "1px solid #DDDDDD",
  padding: "16px 32px",
  position: "sticky",
  top: 0,
  backgroundColor: "white",
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
});

export const externalWrapperClass = style({
  display: "grid",

  gridTemplateColumns: "auto",

  "@media": {
    "screen and (min-width: 600px)": {
      gridTemplateColumns: "256px auto",
    },
  },
});

export const sidebarWrapperClass = style({
  height: "100dvh",
  borderRight: "1px solid #DDDDDD",
  position: "sticky",
  top: 0,

  display: "none",

  "@media": {
    "screen and (min-width: 600px)": {
      display: "block",
    },
  },
});

export const hamburgerWrapperClass = style({
  display: "block",
  cursor: "pointer",

  "@media": {
    "screen and (min-width: 600px)": {
      display: "none",
    },
  },
});
