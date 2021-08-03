import * as React from "react"
import { Button, css, global, darkTheme, Wrapper } from "@maki-ds/core";

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
    <Wrapper className={ darkTheme }>
      <title>Home Page</title>
      <Button>Stitches Button</Button>
      <h1>Yay Stitches stuff is here!</h1>
      <div className={stitchesStyle()}>Fancy Div</div>
    </Wrapper>
  )
}

export default IndexPage
