import { variant } from 'styled-system';
import { px, themeGet } from '@windsor/ui-kit-styled-system';

/**
 * Returns an even-numbered line-height closest to configured value
 * (even-numbered values help appropriately size the button to conform with other controls)
 */
const getButtonLineHeight = ({fontSize, lineHeight}) => {
  if (typeof lineHeight === 'string') return lineHeight;
  const lineHeightPx = lineHeight * fontSize;
  return parseInt(lineHeightPx) + (parseInt(lineHeightPx) % 2);
}
/**
 * Returns calculated CSS properties for each button "size" variant
 * There's some tricky stuff to be done here to ensure the button ends up matching the intended height.
 */
const createButtonSize = (size, props) => {
  const lineHeight = getButtonLineHeight(size);
  const paddingY = ((size.height - lineHeight) / 2) - size.borderWidth
  return {
    fontSize: px(size.fontSize),
    lineHeight: px(lineHeight),
    paddingX: props.equilateral ? px(paddingY) : px(size.paddingX),
    paddingY: px(paddingY),
    height: props.equilateral ? size.height : undefined,
    width: props.equilateral ? size.height : undefined,
    borderWidth: size.borderWidth
  }
}
/**
 * Constructs buttonSize variant object from recalculated + CSS-ified `buttons.sizes` theme property
 */
const create = (props) => Object.keys(props.theme.buttons.sizes).reduce((output, key) => {
  return {...output, [key]: createButtonSize(props.theme.buttons.sizes[key], props)}
}, {})

const buttonSize = (props) => {
  return variant({
    prop: 'size',
    variants: create(props)
  })
}

export default buttonSize;