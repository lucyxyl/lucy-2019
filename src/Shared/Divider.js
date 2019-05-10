import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return (
    <section className="wrap">
      <SectionDivider>
        <SectionDividerBg>Selected Work</SectionDividerBg>
      </SectionDivider>
    </section>
  );
};

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
  margin: 10px 0 20px;
  color: #222226;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;

export default Divider;