import { styled, css, global, darkTheme } from "./stitches.config";

// Basic Components
const Box = styled("div", {});
const Typography = styled("span", {
  color: "$text",
});

const Button = styled("button", {
  backgroundColor: "$primary",
  padding: "$lg",
  borderRadius: 4,
  // Pseudo Selectors
  "&:hover": {
    backgroundColor: "lightgray",
  },
  // Variants API
  variants: {
    color: {
      violet: {
        backgroundColor: "blueviolet",
        color: "white",
      },
      gray: {
        backgroundColor: "gainsboro",
      },
    },
  },
});

// Another Component
const Wrapper = styled("main", {
  backgroundColor: "$background",
});

// Example basic var consumed by icons
const exportedTestVar: number = 22;

export {
  Button,
  Wrapper,
  Box,
  Typography,
  exportedTestVar,
  // Stitches functions, to be exposed for consumption
  css,
  global,
  darkTheme,
};
