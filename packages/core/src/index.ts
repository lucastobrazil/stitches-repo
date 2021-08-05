import {
  styled,
  css,
  global,
  darkTheme,
  getCssString,
} from "./stitches.config";

// Basic Components
const Box = styled("div", {});
const Typography = styled("span", {
  color: "$text",
});

const Button = styled("button", {
  backgroundColor: "$primary",
  padding: "$sm $lg",
  fontFamily: "$default",
  borderRadius: 4,
  fontWeight: 500,
  border: "1px solid transparent",
  // Pseudo Selectors
  "&:hover": {
    backgroundColor: "lightgray",
  },
  // Variants API
  variants: {
    size: {
      small: {
        padding: 2,
      }
    },
    color: {
      outline: {
        backgroundColor: "transparent",
        borderColor: "$primary",
        color: "$primary",
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
const exportedTestVar: string = "22";

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
  getCssString,
};
