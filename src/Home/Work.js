import React from 'react';
import styled from 'styled-components';
import Project from './Project';

import Project1Cover from '../Image/Project1_Cover.png';
import Project3Cover from '../Image/Project2_Cover.png';
import Project2Cover from '../Image/Project3_Cover.png';
// import Project4Cover from '../Image/Project4_Cover.png';

const projects = [
  {
    title: 'Scaling The Search Experience',
    image: Project1Cover,
    subtitle: 'Appneta',
    details:
      'A story of how a collaborative effort from product & design looked beyond the search to fix, simplify the query experience as a starting point to improve way-finding in a growing SaaS application.',
    link: '/appneta-search/',
  },
  {
    title: 'Recontextualizing Sales Content',
    image: Project2Cover,
    subtitle: 'Intuitive Surgical',
    details:
      'That time when we dived into the world of sales to re-design a content management tool to accommodate the evolving context of sales representatives.',
    link: '/isi-salescontent/',
  },
  {
    title: 'Shaping a Surgical Ecosystem',
    image: Project3Cover,
    subtitle: 'Intuitive Surgical',
    details:
      'When limitations breed creativity \u2014	a tale of 6 multidisciplinary thinkers with 5 sprints to prove an ambitious vision with the help of storytelling and rapid prototyping.',
    link: '/isi-ecosystem/',
  },
];

const Work = () => (
  <ProjectContainer>
    {projects.map(p => (
      <Project title={p.title} image={p.image} subtitle={p.subtitle} details={p.details} link={p.link} />
    ))}
  </ProjectContainer>
);

const ProjectContainer = styled.div`
  margin: 2em 0;
`;

export default Work;
