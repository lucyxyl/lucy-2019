import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Project = props => (
  <section className="wrap">
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
  </section>
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
`;

const ProjectImg = styled.div`
  position: relative;
  padding-bottom: 0;
`;

const ProjectImg1 = styled.img`
  width: 100%;
`;

const ProjectDetails = styled.div`
  display: flex;
`;

const Title = styled.h3`
  @media (min-width: 769px) {
    position: absolute;
    bottom: 0em;
    left: 0em;
    background: #ffffff;
    padding: 0 0.6em 0 0.2em;
  }
  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

const Subtitle = styled.h6``;

const FeatureText = styled.p`
  color: #48474c;
  font-size: 1.4em;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.2em;
  }
`;
const ProjectDetailsLeft = styled.div`
  @media (min-width: 769px) {
    width: 80%;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export default Project;
