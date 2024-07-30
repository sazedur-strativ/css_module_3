/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from 'styled-components';

const STYLES = {
    small:{
        height:8,
        padding:0,
    },
    medium:{
        height:12,
        padding:0,
    },
    large:{
        height:16,
        padding:4,
    }
}
const ProgressBar = ({ value, size }) => {
    const styles= STYLES[size];
    if(!styles){
        throw new Error(`Unknown size passed:${size}`)
    }
      return (
    <Wrapper role='progressbar' aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{'--padding':styles.padding+'px'}}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{ '--width': value +'%',
      '--height': styles.height +'px',
         }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: var(--padding)
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  margin-top:10px;
  background-color: blue;
  border-radius:4px 0 0 4px;
  
`

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export default ProgressBar
