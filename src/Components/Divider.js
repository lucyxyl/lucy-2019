import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

const Divider = () => {
  return (
    <div>
      <ScrollableAnchor id={'work'}>
        <SectionDivider>
          <SectionDividerBg>Selected Work</SectionDividerBg>
        </SectionDivider>
      </ScrollableAnchor>
    </div>  
   
  );
}

const SectionDivider = styled.h6`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #D0D0D0; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
`;

const SectionDividerBg = styled.span`
    background: #FFFFFF;
    padding: 0 1em;
`;





export default Divider;