import * as React from 'react';
import { getCssString } from '@maki-ds/core';
/* 
  This is used for Stitches-Based components in 
  Core to have their styles injected and prevent FOUC 
*/
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches-style"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />,
  ]);
};