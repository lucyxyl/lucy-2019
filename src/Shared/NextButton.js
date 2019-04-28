import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PFig3 from '../Image/ProjectData_3.png';
import PFig2 from '../Image/ProjectData_2.png';
import PFig1 from '../Image/ProjectData_1.png';
import PFig4 from '../Image/ProjectData_4.png';

const NextButton = () => {
  return (
    <>
      <SectionDivider>
        <SectionDividerBg>other stories</SectionDividerBg>
      </SectionDivider>
      <Link to="/">
        <ButtonContainer>
          <ButtonChild left>
            <Title>Shaping a Surgical Ecosystem</Title>
            <Subtitle>Intuitive Surgical</Subtitle>
          </ButtonChild>
          <ButtonChild>
            <Image src={PFig3} />
          </ButtonChild>
        </ButtonContainer>
      </Link>
      <Link to="/">
        <ButtonContainer>
          <ButtonChild left>
            <Title>Recontextualizing Sales Content</Title>
            <Subtitle>Intuitive Surgical</Subtitle>
          </ButtonChild>
          <ButtonChild>
            <Image src={PFig2} />
          </ButtonChild>
        </ButtonContainer>
      </Link>
      <Link to="/">
        <ButtonContainer>
          <ButtonChild left>
            <Title>Scaling the Search Experience</Title>
            <Subtitle>Appneta</Subtitle>
          </ButtonChild>
          <ButtonChild>
            <Image src={PFig1} />
          </ButtonChild>
        </ButtonContainer>
      </Link>
      <Link to="/">
        <ButtonContainer>
          <ButtonChild left>
            <Title>Raising Access to Health Care</Title>
            <Subtitle>SCAD MA PROJECT</Subtitle>
          </ButtonChild>
          <ButtonChild>
            <Image src={PFig4} />
          </ButtonChild>
        </ButtonContainer>
      </Link>
    </>
  );
};

const Image = styled.img`
  max-width: 100%;
`;

const ButtonChild = styled.div`
  flex: ${props => (props.left ? '2' : '1')};
  padding: ${props => (props.left ? '2em 0 2em 2em' : '0')};
  align-self: flex-end;
`;

const ButtonContainer = styled.div`
  background-color: #222226;
  margin: 4em auto;
  text-align: left;
  display: flex;
  max-width: 100%;
`;

const Title = styled.h3`
  color: #fff;
`;
const Subtitle = styled.h6`
  color: #fff;
`;

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

export default NextButton;
