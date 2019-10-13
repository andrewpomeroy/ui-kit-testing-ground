import { variant } from 'styled-system';
import { px, themeGet } from '@windsor/ui-kit-styled-system';

/**
 * Returns an even-numbered line-height closest to configured value
 * (even-numbered values help appropriately size the button to conform with other controls)
 */
const getButtonLineHeight = lineHeight => {
  if (typeof lineHeight === 'string') return lineHeight; 
  return parseInt(lineHeight) + (parseInt(lineHeight) % 2);
}
/**
 * Returns calculated CSS properties for each button "size" variant
 * There's some tricky stuff to be done here to ensure the button ends up matching the intended height.
 */
const createButtonSize = (size, props) => {
  const lineHeight = getButtonLineHeight(size.lineHeight || (size.fontSize * 1.25));
  const paddingY = ((size.height - lineHeight) / 2) - themeGet("buttons.borderWidth")(props)
  return {
    fontSize: px(size.fontSize),
    lineHeight: px(lineHeight),
    paddingX: props.equilateral ? px(paddingY) : px(size.paddingX),
    paddingY: px(paddingY),
    height: props.equilateral ? size.height : undefined,
    width: props.equilateral ? size.height : undefined
  }
}
/**
 * Constructs buttonSize variant object from recalculated + CSS-ified `buttonSizes` theme property
 */
const create = (props) => Object.keys(props.theme.buttonSizes).reduce((output, key) => {
  return {...output, [key]: createButtonSize(props.theme.buttonSizes[key], props)}
}, {})

const buttonSize = (props) => {
  return variant({
    prop: 'size',
    variants: create(props)
  })
}

export default buttonSize;