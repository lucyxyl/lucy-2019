/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import styled from 'styled-components';
import Appneta1 from '.././Image/Appneta1.png';

export default class ProjectData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Project 
        title = {[
          'Scaling The Search Experience',
          'Visualizing Violation Events',
          'Shaping a Surgical Ecosystem',
          'Rethinking Sales Content',
          'Framing Healthcare Accessibility'
        ]}
        subtitle = {['Appneta', 'Appneta', 'Intuitive Surgical', 'Intuitive Surgical', 'SCAD']}
        details = {[
          'Scaling the query experience to accommodate the growing size of customers and their deployments.',
          'Scaling the query experience to accommodate the growing size of customers and their deployments.', 
          'Scaling the query experience to accommodate the growing size of customers and their deployments.',
          'Scaling the query experience to accommodate the growing size of customers and their deployments.',
          'Scaling the query experience to accommodate the growing size of customers and their deployments.',
          'Scaling the query experience to accommodate the growing size of customers and their deployments.'

        ]}
      />   
    )
  }
}

const Project = (props) => {
  return (
    <ProjectContainer>
      <ProjectSection>
        <ProjectImg>
          <ProjectImg1 src={Appneta1} alt="Project Image" />
          <Title>{props.title[0]}</Title>
        </ProjectImg>
        <ProjectDetails>
          <ProjectDetailsLeft>
            <Subtitle>{props.subtitle[0]}</Subtitle>
            <FeatureText>{props.details[0]}</FeatureText>
          </ProjectDetailsLeft>
          <ProjectDetailsRight>
            <EnterButton><WhiteLink href='/'>Enter</WhiteLink></EnterButton>
          </ProjectDetailsRight>
        </ProjectDetails>
      </ProjectSection> 
      
      <ProjectSection>
        <ProjectImg>
          <ProjectImg1 src={Appneta1} alt="Project Image" />
          <Title>{props.title[1]}</Title>
        </ProjectImg>
        <ProjectDetails>
          <ProjectDetailsLeft>
            <Subtitle>{props.subtitle[1]}</Subtitle>
            <FeatureText>{props.details[1]}</FeatureText>
          </ProjectDetailsLeft>
          <ProjectDetailsRight>
            <EnterButton><WhiteLink href='/'>Enter</WhiteLink></EnterButton>
          </ProjectDetailsRight>
        </ProjectDetails>
      </ProjectSection> 

      <ProjectSection>
        <ProjectImg>
          <ProjectImg1 src={Appneta1} alt="Project Image" />
          <Title>{props.title[2]}</Title>
        </ProjectImg>
        <ProjectDetails>
          <ProjectDetailsLeft>
            <Subtitle>{props.subtitle[2]}</Subtitle>
            <FeatureText>{props.details[2]}</FeatureText>
          </ProjectDetailsLeft>
          <ProjectDetailsRight>
            <EnterButton><WhiteLink href='/'>Enter</WhiteLink></EnterButton>
          </ProjectDetailsRight>
        </ProjectDetails>
      </ProjectSection> 

      <ProjectSection>
        <ProjectImg>
          <ProjectImg1 src={Appneta1} alt="Project Image" />
          <Title>{props.title[3]}</Title>
        </ProjectImg>
        <ProjectDetails>
          <ProjectDetailsLeft>
            <Subtitle>{props.subtitle[3]}</Subtitle>
            <FeatureText>{props.details[3]}</FeatureText>
          </ProjectDetailsLeft>
          <ProjectDetailsRight>
            <EnterButton><WhiteLink href='/'>Enter</WhiteLink></EnterButton>
          </ProjectDetailsRight>
        </ProjectDetails>
      </ProjectSection> 
      
      <ProjectSection>
        <ProjectImg>
          <ProjectImg1 src={Appneta1} alt="Project Image" />
          <Title>{props.title[4]}</Title>
        </ProjectImg>
        <ProjectDetails>
          <ProjectDetailsLeft>
            <Subtitle>{props.subtitle[4]}</Subtitle>
            <FeatureText>{props.details[4]}</FeatureText>
          </ProjectDetailsLeft>
          <ProjectDetailsRight>
            <EnterButton><WhiteLink href='/'>Enter</WhiteLink></EnterButton>
          </ProjectDetailsRight>
        </ProjectDetails>
      </ProjectSection> 

    </ProjectContainer>

  );
};

const ProjectContainer = styled.div`
  margin: 2em 0;
`;

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
