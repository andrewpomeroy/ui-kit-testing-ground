import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const iconButtonOffsetX = ".5em";

const IconButtonText = styled.span``

export const IconButtonIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: -.5em;
  margin-bottom: -.5em;
`

const IconButtonIconWrapLeft = styled(IconButtonIconWrap)`
  margin-right: ${props => props.offsetX || iconButtonOffsetX};
  margin-left: calc(-0.5 * ${props => props.offsetX || iconButtonOffsetX});
`

const IconButtonIconWrapRight = styled(IconButtonIconWrap)`
  margin-left: ${props => props.offsetX || iconButtonOffsetX};
  margin-right: calc(-0.5 * ${props => props.offsetX || iconButtonOffsetX});
`

const IconButton = React.forwardRef(({children, iconRight, iconLeft, offsetX, ButtonComponent = Button, ...props}, ref) => {
  [iconLeft, iconRight].forEach((icon, key) => {
    if (!icon) return;
    icon = React.cloneElement(icon, {
      ...icon.props,
      size: "1.25em",
    })
  });

  return (
    <ButtonComponent {...props} ref={ref}>
      {!!iconLeft && 
        <IconButtonIconWrapLeft offsetX={offsetX}>
          {iconLeft}
        </IconButtonIconWrapLeft>
      }
      <IconButtonText>{children}</IconButtonText>
      {!!iconRight && 
        <IconButtonIconWrapRight offsetX={offsetX}>
          {iconRight}
        </IconButtonIconWrapRight>
      }
    </ButtonComponent>
  )
})

IconButton.defaultProps = {
  ButtonComponent: Button
}

IconButton.displayName = "IconButton";

export default IconButton;