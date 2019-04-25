import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Project = props => (
  <ProjectSection>
    <Link to={props.link}>
      <ProjectImg>
        <ProjectImg1 src={props.image} alt="Project Image" />
        <Title>{props.title}</Title>
      </ProjectImg>
    </Link>
    <ProjectDetails>
      <ProjectDetailsLeft>
        <Subtitle>
          {props.subtitle} <ion-icon size="small" name="md-lock" />
        </Subtitle>
        <FeatureText>{props.details}</FeatureText>
      </ProjectDetailsLeft>
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
const ProjectDetailsLeft = styled.div`
  width: 75%;
`;

export default Project;
