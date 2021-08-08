import * as React from 'react';
import { getCssString } from '@maki-ds/core';

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