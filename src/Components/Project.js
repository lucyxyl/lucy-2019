import React from 'react';
import styled from 'styled-components';
import Appneta1 from '.././Image/Appneta1.png';
import {Link} from 'react-router-dom';


const Project = props => (

  <ProjectSection>
    <ProjectImg>
      <Link to = {props.link}>
       <ProjectImg1 src={Appneta1} alt="Project Image" />
      </Link>
      <Title>{props.title}</Title>
    </ProjectImg>
    <ProjectDetails>
      <ProjectDetailsLeft>
        <Subtitle>{props.subtitle}</Subtitle>
        <FeatureText>{props.details}</FeatureText>
      </ProjectDetailsLeft>
      <ProjectDetailsRight>
        <EnterButton>
          <Link to = {props.link}>
            <WhiteLink>Enter</WhiteLink>
          </Link>
        </EnterButton>
      </ProjectDetailsRight>
    </ProjectDetails>



  </ProjectSection> 

);

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6em 0;

`;

const ProjectImg = styled.div`
  position: relative;
  padding-bottom: 2em;
`;

const ProjectImg1 = styled.img`
  width: 100%;
`;


const ProjectDetails = styled.div`
  display: flex;
`;


const Title = styled.h3`
  position: absolute;
  bottom: 0em;
  left: 0em;
  background: #FFFFFF;
  padding: 0 0.6em 0 0.2em;
`; 

const Subtitle = styled.h4`
`;
const FeatureText = styled.p`
  color: #222226;
  font-size: 1.6em;
  line-height: 1.6em;
`;
const EnterButton = styled.button`
  background-color: #222226;
  font-size: 1.6em;
  border-radius: 2em;
  padding: 1em 2.6em;
`; 

const ProjectDetailsLeft = styled.div`
  width: 60%;
`;

const ProjectDetailsRight = styled.div`
  margin-left: auto;
  padding: 2em 0;
`;

const WhiteLink = styled.a`
  color: white;
`;

export default Project;