import { styled } from "../stitches.config";

const Button = styled("button", {
  backgroundColor: "$primary",
  padding: "$sm $lg",
  fontFamily: "$default",
  borderRadius: 4,
  fontWeight: 500,
  border: "1px solid transparent",
  color: "white",
  // Pseudo Selectors
  "&:hover": {
    backgroundColor: "lightgray",
  },
  // Variants API
  variants: {
    size: {
      small: {
        padding: 2,
      },
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

export default Button;
