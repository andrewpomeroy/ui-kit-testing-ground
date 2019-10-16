import { variant } from 'styled-system';
import { px } from '@windsor/ui-kit-styled-system';

/**
 * Adds extra horizontal padding to rounded buttons for visual consistency
 */
const getExtraRoundedPaddingX = (props) => {
  const paddingX = 
    !!props.theme &&
    !!props.theme.buttons &&
    !!props.size &&
    !!props.theme.buttons &&
    !!props.theme.buttons.sizes &&
    !!props.theme.buttons.sizes[props.size] && props.theme.buttons.sizes[props.size].paddingX;
  if (paddingX !== false) {
    return parseInt(paddingX, 10) * 1.25;
  }
  return undefined; 
}

const buttonShape = props => variant({
  prop: 'shape',
  variants: {
    soft: {
      borderRadius: '5px'
    },
    rounded: {
      borderRadius: '999px',
      paddingLeft: props.equilateral ? null : px(getExtraRoundedPaddingX(props)),
      paddingRight: props.equilateral ? null : px(getExtraRoundedPaddingX(props)),
    },
    square: {
      borderRadius: 0
    }
  }
})

export default buttonShape;