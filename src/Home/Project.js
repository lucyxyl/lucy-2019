import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Appneta1 from '../Image/Project1_DarkCover.png';

const Project = props => (
  <ProjectSection>
    <ProjectImg>
      <Link to={props.link}>
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
          <Link to={props.link}>
            <WhiteLink>
              <ion-icon size="large" name="md-eye" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <ion-icon size="large" name="ios-arrow-round-forward" />
            </WhiteLink>
          </Link>
        </EnterButton>
      </ProjectDetailsRight>
    </ProjectDetails>
  </ProjectSection>
);

Project.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

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
  background: #ffffff;
  padding: 0 0.6em 0 0.2em;
`;

const Subtitle = styled.h6``;

const FeatureText = styled.p`
  color: #48474c;
  font-size: 1.4em;
`;
const EnterButton = styled.button`
  background-color: #222226;
  border-radius: 8em;
  padding: 2em 2.6em;
  color: ;
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
