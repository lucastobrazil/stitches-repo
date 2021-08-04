import * as React from "react";
import { Link } from "gatsby";
import { Button, Box, Typography, css, global, darkTheme } from "@maki-ds/core";

/* 
  STITCHES
  Testing Adding Global Styles to the document 
  Could be used for CSS reset etc, but sparingly.
*/
const globalStyles = global({
  "*": { margin: 0, padding: 0 },
  body: {
    fontFamily: "$default",
    background: '$background',
  },
});

/* 
  STITCHES
  Writing custom styles using stitches `css`.
  Note that this should not happen very often, 
  as we can use  the `<Box />` component

*/
const customStitchesCSS = css({
  backgroundColor: "$text",
  color: "$background",
  border: "1px solid $primary",
  padding: "$lg",
});

const DarkModeToggle = ({ isDark, onChange, ...restProps }) => {
  return (
    <Box {...restProps}>
      <Typography as="label">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => onChange(!isDark)}
        />
        Dark Mode?
      </Typography>
    </Box>
  );
};

const IndexPage = () => {
  // Add global styles
  globalStyles();

  // Basic State handling for dark mode
  const [isDark, setIsDark] = React.useState(false);
  return (
    <Box
      as="main"
      css={{
        border: "1px solid $primary",
        borderRadius: "$lg",
        backgroundColor: "$background",
        padding: "$lg",
        display: "grid",
        gap: "$lg",
      }}
      /*
      STITCHES - Dark Mode.
      The below basically just adds a className that contains CSS var 
      overrides from the theme. All Children will be overriden
    */
      className={isDark && darkTheme}
    >
      <DarkModeToggle
        isDark={isDark}
        onChange={setIsDark}
        css={{ justifySelf: "flex-end" }}
      />
      <title>Maki DS</title>
      {/*
        STITCHES
        Below Components use the polymorphic "as" prop,
        and show off the variants API
      */}
      <Typography as="h1" css={{
        color: '$text',
        '@bp2': {
            color: 'green'
        },
        fontSize: {
          '@bp1': '$lg',
          '@bp2': '$md',

        }
      }}>Maki-DS PoC 🧨</Typography>
      
      {/* Variants in Action */}
      <Button>Stitches Button</Button>
      <Button color="gray">Stitches Gray Variant</Button>
      <Button color="violet">Stitches Violet Variant</Button>
      <Button as={Link} to="/test">
        Link to MDX Page
      </Button>
      <div className={customStitchesCSS()}>Fancy Div</div>
    </Box>
  );
};

export default IndexPage;
