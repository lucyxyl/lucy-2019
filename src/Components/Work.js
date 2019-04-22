import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const projects = [
  {
    title: 'Scaling The Search Experience',
    subtitle: 'Appneta',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/appneta-search/',
  },
  {
    title: 'Visualizing Violation Events',
    subtitle: 'Appneta',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/appneta-visualization/',
  },
  {
    title: 'Shaping a Surgical Ecosystem',
    subtitle: 'Intuitive Surgical',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/intuitive-ecosystem/',
  },
  {
    title: 'Recontextualizing Sales Content',
    subtitle: 'Intuitive Surgical',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/intuitive-sales-content/',
  },
  {
    title: 'Raising Access to Healthcare',
    subtitle: 'SCAD',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/scad-accessibility/',
  },
];

const Work = () => (
  <ProjectContainer>
    {projects.map(p => (
      <Project title={p.title} subtitle={p.subtitle} details={p.details} link={p.link} />
    ))}
  </ProjectContainer>
);

const ProjectContainer = styled.div`
  margin: 2em 0;
`;

export default Work;
