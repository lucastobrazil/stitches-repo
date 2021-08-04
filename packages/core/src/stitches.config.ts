import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    // To scope all CSS Vars eg. `--maki-foo`
    prefix: "maki",
    theme: {
      fonts: {
        default: "-apple-system, BlinkMacSystemFont, sans-serif, serif",
      },
      colors: {
        primary: "orange",
        background: "rgba(244,244,244)",
        text: "rgba(0,0,0,0.87)",
      },
      space: {
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
    },
    media: {
      bp1: '(max-width: 640px)',
      bp2: '(max-width: 768px)',
    },
    utils: {
      // Example util that we could set
      marginX: (config) => (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  });

export const darkTheme = theme({
  colors: {
    text: "rgba(244,244,244)",
    background: "rgba(0,0,0,0.87)",
  },
});
