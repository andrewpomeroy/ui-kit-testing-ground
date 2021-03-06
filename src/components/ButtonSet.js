import React from 'react';
import styled from '@emotion/styled';

const ButtonSetStyle = styled.div`
  display: flex;
  flex-direction: row;
  & > *:active {
    /* Cancel out any "button press" animations that visually disjoint the button from the group */
    transform: none;
  }
`

const ButtonSet = ({children}) => {
  return (
    <ButtonSetStyle>
      {children && children.length 
        ? children.map((child, index) => {
          const isFirst = index === 0;
          const isLast = index === children.length - 1;
          return child && React.cloneElement(child, {
            key: index,
            ...child.props,
            style: {
              ...child.props.style,
              borderTopLeftRadius: isFirst ? undefined : 0,
              borderBottomLeftRadius: isFirst ? undefined : 0,
              borderTopRightRadius: isLast ? undefined : 0,
              borderBottomRightRadius: isLast ? undefined : 0,
              borderRight: isLast ? undefined : 0
            },
          })
        })
        : children
      }
    </ButtonSetStyle>);
}

export default ButtonSet;