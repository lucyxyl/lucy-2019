import React from 'react';
import styled from 'styled-components';

const Divider = () => {
    return (
        <SectionDivider>
            <SectionDividerBg>Selected Work</SectionDividerBg>
        </SectionDivider>
    );
}

const SectionDivider = styled.h4`
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