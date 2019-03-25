import React from 'react';
import styled from 'styled-components';
import Appneta1 from '.././Image/Appneta1.png';

const Project = () => {
  return (
    <ProjectSection>
      <ProjectImg><ProjectImg1 src={Appneta1} alt="Project Image" /></ProjectImg>
      <ProjectDetails>
        <ProjectDetailsLeft>
          <Title><TitleBg>Scaling the Search Experience</TitleBg></Title>
          <Subtitle>Appneta</Subtitle>
          <FeatureText>
            Scaling the query experience to accommodate the growing size of customers and their deployments.
          </FeatureText>
        </ProjectDetailsLeft>
        <ProjectDetailsRight>
          <EnterButton><WhiteLink href="/">Enter</WhiteLink>
          </EnterButton>  
        </ProjectDetailsRight>

      </ProjectDetails>
    </ProjectSection>

  );
}

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6em 0;

`;

const ProjectImg = styled.div`
  // height: 4em;
`;

const ProjectImg1 = styled.img`
  width: 100%;
`;


const ProjectDetails = styled.div`
  display: flex;
`;

const TitleBg = styled.span`
  background: #FFFFFF;
`;

const Title = styled.h3`
`; 
const Subtitle = styled.h4`
`;
const FeatureText = styled.p`
  background:${props => props.primary ? "#222226" : "#FFFFFF"};
  color: ${props => props.primary ? "#FFFFFF" : "#222226"};
  font-size: 1.6em;
  line-height: 1.6em;
`;
const EnterButton = styled.button`
  background-color: #222226;
  color: white;
  font-size: 1.8em;
  border-radius: 2em;
  padding: 1em 2em;
`; 

const ProjectDetailsLeft = styled.div`
  width: 60%;
`;

const ProjectDetailsRight = styled.div`
  margin-left: auto;
  padding: 2em 0;
  vertical align: middle;
`;

const WhiteLink = styled.a`
  color: white;
`;
export default Project;
