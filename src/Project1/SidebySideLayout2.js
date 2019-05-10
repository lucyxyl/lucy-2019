import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SidebySideLayout2 = props => (
  <SidebySideContainer>
    <LeftSide>
      <Image src={props.image2} alt="Intro demo" />
    </LeftSide>
    <RightSide>
      <h3>{props.title2}</h3>
      <SideP>{props.details2}</SideP>
    </RightSide>
  </SidebySideContainer>
);

SidebySideLayout2.propTypes = {
  image2: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  details2: PropTypes.string.isRequired,
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

export default SidebySideLayout2;
