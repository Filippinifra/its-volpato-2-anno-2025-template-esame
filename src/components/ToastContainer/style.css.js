import { style, styleVariants } from "@vanilla-extract/css";

export const wrapperToastContainer = style({
  position: "fixed",
  bottom: 10,
  left: 10,
  display: "flex",
  gap: 8,
  flexDirection: "column",
  zIndex: 100,
});

export const toastWrapperClass = styleVariants({
  success: {
    backgroundColor: "green",
    border: "1px solid #44614c",
  },
  error: {
    backgroundColor: "red",
    border: "1px solid #691300",
  },
});
