import {
  styled,
  css,
  global,
  darkTheme,
  getCssString,
  CSSType,
} from "./stitches.config";
import {Context,   Button,
  Wrapper,
  Box,
  Typography} from './components';


// Example basic var consumed by icons
const exportedTestVar: string = '22';

export {
  Button,
  Wrapper,
  Box,
  Typography,
  exportedTestVar,
  // Stitches functions, to be exposed for consumption
  css,
  global,
  darkTheme,
  getCssString,
  Context,
  CSSType
};
