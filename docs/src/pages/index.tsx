import * as React from "react";
import { Link } from "gatsby";
import { Button, Box, Typography, css, global, darkTheme, ContextMenu } from "@maki-ds/core";
import { boxStyles }  from '../components/style';
/* 
  STITCHES
  Testing Adding Global Styles to the document 
  Could be used for CSS reset etc, but sparingly.
*/
const globalStyles = global({
  "*": { margin: 0, padding: 0 },
  body: {
    fontFamily: "$default",
    background: "$background",
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
  borderColor: '$primary',
  color: "$background",
  '&:hover': {
    color: '$background'
  },
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
  const toggleDark = () => {
    isDark ? document.body.classList.remove(darkTheme) : document.body.classList.add(darkTheme);
    setIsDark(!isDark);
  }
  return (
    <Box
      as="main"
      css={boxStyles}
      /*
      STITCHES - Dark Mode.
      The below basically just adds a className that contains CSS var 
      overrides from the theme. All Children will be overriden
    */
      // className={isDark && darkTheme}
    >
      <DarkModeToggle
        isDark={isDark}
        onChange={toggleDark}
        css={{ justifySelf: "flex-end" }}
      />
      <title>Maki DS!</title>
      {/*
        STITCHES
        Below Components use the polymorphic "as" prop,
        and show off the variants API
      */}
      <Typography
        as="h1"
        css={{
          color: "$text",
          "@bp2": {
            color: "green",
            fontSize: 12,
          },
        }}
      >
        Maki-DS PoC ????
      </Typography>
      <ContextMenu className={isDark && darkTheme} />
      {/* Variants in Action */}
      <Button>Stitches Button</Button>
      <Button
        color="gray"
        css={{
          backgroundColor: "red",
          marginBottom: "$7"
        }}
      >
        Stitches Gray Variant
      </Button>
      <Button size="small">Small</Button>
      <Button color="outline">Stitches Outline Variant</Button>
      <Typography as={Link} to="/test">
        Link to MDX Page
      </Typography>
      <div className={customStitchesCSS()}>Fancy standard Div with stitches styles applied</div>
    </Box>
  );
};

export default IndexPage;
