import createTheme, { createColors } from "@windsor/ui-kit-theme";
import Color from 'color';

export const baseColors = {
  yellow: '#f6f9d0',
  blue: '#2b88fe',
  turquoise: '#5df0f6',
  green: '#2be689',
  darkGreen: '#1f5c66',
  darkBlue: '#3364a3',
  darkBlueGray: '#515f71',
  fadedBlue: '#5b86b0',
  veryDarkBlue: '#16427d',
  violet: 'hsl(219.2, 100%, 64.6%)',
  red: '#fa5252',
  nearWhite: '#f8f9fa',
  mediumGray: '#929292',
  white: '#ffffff'
}

baseColors.primary = baseColors.blue;
baseColors.danger = baseColors.red;
baseColors.neutral = baseColors.darkBlueGray;
baseColors.success = baseColors.green;
baseColors.error = baseColors.red;

const theme = createTheme({
  colors: baseColors,
});

export default theme;
