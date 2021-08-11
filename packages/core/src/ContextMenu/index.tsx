import React from "react";
import { styled } from "../stitches.config";
import * as StitchesContextMenu from "@radix-ui/react-context-menu";
import Typography from '../Typography';
import Box from '../Box';
import styles from './style.css';

const StyledContent = styled(StitchesContextMenu.Content, styles.content);

const StyledItem = styled(StitchesContextMenu.Item, styles.item);
const ContextMenu = (props) => (
  <StitchesContextMenu.Root {...props}>
    <Box as={StitchesContextMenu.Trigger} css={styles.trigger}>
      <Typography>Right Click Me</Typography>
    </Box>
    <StyledContent>
      <StyledItem onSelect={() => console.log("cut")}>Cut</StyledItem>
      <StyledItem onSelect={() => console.log("copy")}>Copy</StyledItem>
      <StyledItem onSelect={() => console.log("paste")}>Paste</StyledItem>
    </StyledContent>
  </StitchesContextMenu.Root>
);

export default ContextMenu;
