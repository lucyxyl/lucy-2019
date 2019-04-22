import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return (
    <div>
      <SectionDivider>
        <SectionDividerBg>Selected Work</SectionDividerBg>
      </SectionDivider>
    </div>
  );
};

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;

export default Divider;
