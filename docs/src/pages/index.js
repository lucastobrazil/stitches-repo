import * as React from "react"
import { Link } from "gatsby";
import { Button, Wrapper, css, global } from "@maki-ds/core";

/* Testing Adding Global Styles to the document */
const globalStyles = global({
  '*': { margin: 0, padding: 0 },
  body: { 
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
});

const stitchesStyle = css({
  backgroundColor: '$primary',
  border: '1px solid $primary',
  padding: '$large',
});

// markup
const IndexPage = () => {
  globalStyles();
  return (
    <Wrapper>
      <title>Home Page</title>
      <h1>Yay Stitches stuff is here!</h1>
      <Button>Stitches Button</Button>
      <Button as={Link} to="/test">Link to MDX Page</Button>
      <div className={stitchesStyle()}>Fancy Div</div>
    </Wrapper>
  )
}

export default IndexPage
