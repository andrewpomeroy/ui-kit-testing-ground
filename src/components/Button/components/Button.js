import React from 'react';
import styled from '@emotion/styled';
import { borders, fontWeight } from 'styled-system';
import { color, alignItems, justifyContent } from '@windsor/ui-kit-styled-system';
import { buttonSizeVariant, buttonShapeVariant, buttonStyleVariant } from '../variants';

const transitionDuration = 50;

export const ButtonNormalized = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${alignItems}
  ${justifyContent}
  white-space: nowrap;
  padding: .75em 1.5em;
  border: 1px solid;
  ${borders}
  line-height: 1.25em;
  font-weight: 500;
  ${fontWeight}
  font-family: inherit;
  text-decoration: none;
  text-transform: none;
  background-color: transparent;
  color: inherit;
  user-select: none;
  transition: border-color ${transitionDuration}ms linear,
    background-color ${transitionDuration}ms linear,
    transform ${transitionDuration * 2}ms ease;
  &:focus {
    outline: 0;
  }
  /* "Not-disabled" styles */
  ${({ disabled }) =>
  !disabled && `
    cursor: pointer;
    &:active {
      transform: scale(.98);
    }
  `}
  /* Disabled styles */
  ${({ disabled }) =>
  disabled && `
    cursor: default;
    opacity: .4;
    pointer-events: none;
  `}
`

export const ButtonThemed = styled(ButtonNormalized)`
  ${buttonStyleVariant}
  ${buttonSizeVariant}
  ${buttonShapeVariant}
  ${color}
`

ButtonThemed.defaultProps = {
  buttonColor: 'neutral',
  size: 'medium',
  shape: 'soft',
  buttonStyle: 'solid'
}

const Button = React.forwardRef(({isDisabled, children, ...props}, ref) => {
  let disabledAttr = isDisabled ? {'disabled': 'disabled'} : {};
  return (
    <ButtonThemed
      ref={ref}
      type="button"
      {...disabledAttr}
      {...props}>
      {children}
    </ButtonThemed>)
})

Button.displayName = "Button";

export default Button;
