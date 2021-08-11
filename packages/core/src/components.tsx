
import React from 'react';
import {
    styled,
  } from "./stitches.config";
import * as ContextMenu from "@radix-ui/react-context-menu";

const StyledContent = styled(ContextMenu.Content, {
    minWidth: 130,
    backgroundColor: "$background",
    borderRadius: 6,
    padding: 8,
    boxShadow: "0px 5px 15px -5px hsla(206,22%,7%,.15)"
  });
  const StyledItem = styled(ContextMenu.Item, {
    fontSize: 13,
    padding: "5px 10px",
    borderRadius: 3,
    cursor: "default",
    color: '$text',
    "&:focus": {
      outline: "none",
      backgroundColor: "$primary",
      color: "$background"
    }
  });
  const Context = (props) => (
    <ContextMenu.Root {...props}>
      <ContextMenu.Trigger as={Box}>
          <Typography>Check it</Typography>
      </ContextMenu.Trigger>
      <StyledContent>
        <StyledItem onSelect={() => console.log("cut")}>Cut</StyledItem>
        <StyledItem onSelect={() => console.log("copy")}>Copy</StyledItem>
        <StyledItem onSelect={() => console.log("paste")}>Paste</StyledItem>
      </StyledContent>
    </ContextMenu.Root>
  );
  
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


  export  {  
    Button,
    Wrapper,
    Box,
    Typography,
    Context
  };