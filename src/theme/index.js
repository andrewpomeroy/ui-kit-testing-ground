import createTheme from "@windsor/ui-kit-theme";
import Color from 'color';

export const baseColors = {
  // yellow: '#f6f9d0',
  // yellow: '#ffc30f',
  yellow: '#ffd945',
  blue: '#2b88fe',
  turquoise: '#5df0f6',
  green: '#2be689',
  darkGreen: '#1f5c66',
  darkBlue: '#3364a3',
  darkBlueGray: '#515f71',
  fadedBlue: '#5b86b0',
  veryDarkBlue: '#16427d',
  violet: 'hsl(219.2, 100%, 64.6%)',
  // red: '#fa5252',
  red: '#ff3558',
  pink: '#ff3c7e',
  nearWhite: '#f8f9fa',
  mediumGray: '#929292',
  white: '#ffffff'
}

baseColors.primary = baseColors.blue;
baseColors.danger = baseColors.red;
baseColors.neutral = baseColors.darkBlueGray;
baseColors.success = baseColors.green;
baseColors.error = baseColors.red;
baseColors.warning = baseColors.yellow;
baseColors.link = baseColors.violet;

const theme = createTheme({
  colors: baseColors,
});

export const otherColors = {
  ...baseColors,
}
otherColors.normalText = baseColors.veryDarkBlue;
otherColors.highlightText = baseColors.turquoise;
otherColors.boldText = baseColors.darkGreen;
otherColors.diminishedText = baseColors.mediumGray;
otherColors.heading = baseColors.darkGreen;
otherColors.subduedHeading = baseColors.fadedBlue;
otherColors.activeHighlight = baseColors.blue;
otherColors.link = baseColors.blue;
otherColors.linkHover = Color(baseColors.blue).lighten(.2).string();
otherColors.inputBorder = baseColors.violet;
otherColors.inputText = baseColors.darkBlue;
otherColors.labelText = baseColors.darkGreen;
otherColors.cardBorder = 'transparent';
otherColors.cardBgColor = 'white';
otherColors.cardHighlight = baseColors.electricBlue;
otherColors.cardText = baseColors.darkBlue;
otherColors.listBackground = baseColors.nearWhite;
otherColors.transparentHighlight = Color(baseColors.blue).saturationl(100).lightness(98).string();
otherColors.lightSeparator = 'gainsboro';

const defaultOpts = {
  defaults: {
    borderWidth: 1,
    lineHeight: 1.2,
  },
  sizes: {
    small: {
      fontSize: 13,
      paddingX: 17,
      height: 34,
    },
    medium: {
      fontSize: 14,
      paddingX: 19,
      height: 40,
    },
    large: {
      fontSize: 16,
      paddingX: 24,
      height: 46,
    },
    larger: {
      fontSize: 18,
      paddingX: 28,
      height: 52
    },
  }
}

const createButtonSizes = (buttonOpts = {}) => {
  const buttons = {
    defaults: {
      ...defaultOpts.defaults,
      ...buttonOpts.defaults,
    },
    sizes: {
      ...defaultOpts.sizes,
      ...buttonOpts.sizes,
    },
  }
  buttons.sizes = Object.keys(buttons.sizes).reduce((output, key) => {
    return {
      ...output,
      [key]: {
        ...buttons.defaults,
        ...defaultOpts.sizes[key],
        ...(buttonOpts.sizes[key])
      }
    }
  }, {})
  return buttons;
}

// const buttons = createButtonSizes({
//   defaults: {
//     borderWidth: 2
//   },
//   sizes: {
//     large: {
//       paddingX: 40
//     }
//   }
// });

const buttons = createButtonSizes({});

const extendedTheme = {
  ...theme,
  buttons,
}

export default extendedTheme;
