import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SidebySideLayout = props => (
  <SidebySideContainer>
    <LeftSide>
      <Image src={props.image1} alt="Intro demo" />
    </LeftSide>
    <RightSide>
      <h3>{props.title1}</h3>
      <SideP>{props.details1}</SideP>
    </RightSide>
  </SidebySideContainer>
);

SidebySideLayout.propTypes = {
  image1: PropTypes.object.isRequired,
  title1: PropTypes.string.isRequired,
  details1: PropTypes.string.isRequired,
};

const SidebySideContainer = styled.div`
  position: relative;
  display: flex;
  margin: 4em auto;
`;
const LeftSide = styled.div`
  flex: 1;
  margin-right: 2em;
`;
const RightSide = styled.div`
  align-self: center;
  flex: 1;
  margin-left: 2em;
`;
const Image = styled.img`
  width: 100%;
`;

const SideP = styled.p`
  font-size: 1.3em;
`;

export default SidebySideLayout;
