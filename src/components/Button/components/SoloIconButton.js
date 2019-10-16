import React from 'react';
import styled from '@emotion/styled/macro';
import Button from './Button';
import { IconButtonIconWrap } from './IconButton';
import { soloIconButtonStyleVariant } from '../variants';

const SoloIconButtonInner = React.forwardRef(({children, ...props}, ref) => {
  return (
  <Button equilateral={true} {...props} ref={ref}>
    <IconButtonIconWrap>
      {children}
    </IconButtonIconWrap>
  </Button>
)})

SoloIconButtonInner.displayName = "SoloIconButton";

const SoloIconButton = styled(SoloIconButtonInner)`
  ${soloIconButtonStyleVariant}
`

SoloIconButton.defaultProps = {
  buttonSize: 'medium',
  buttonStyle: 'ghost',
  buttonColor: 'primary',
  shape: 'rounded'
}

export default SoloIconButton;