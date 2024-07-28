/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DynamicDesign = ({ color, onClick, children }) => (
  
          <Wrapper onClick={onClick} style={{ color }}>
            {children}
          </Wrapper>
);

      const Wrapper = styled.button`
        color: ${props=>props.color};
        padding: 16px 24px;
      `;


export default DynamicDesign