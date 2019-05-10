import React from 'react';
import SidebySideLayout from './SidebySideLayout';

import IntroImg1 from '../Image/Project1_IntroImg1.svg';
import IntroImg2 from '../Image/Project1_IntroImg2.svg';
import IntroImg3 from '../Image/Project1_IntroImg3.svg';
import IntroImg4 from '../Image/Project1_IntroImg4.svg';

const sidedata1 = [
  {
    image: IntroImg1,
    title: 'Rising Deployment',
    details:
      'Larger customer deployments meant larger numbers of network traffic a given user is monitoring. This also demands a more robust search model.',
  },
  {
    image: IntroImg2,
    title: 'Emerging Variability',
    details:
      'Diverging network management models meant a need for customization in the way customers organize and classify their data.',
  },
  {
    image: IntroImg3,
    title: 'API Winning UI',
    details:
      'Many are resorting to API instead of UI. Optimizing the query experience is a critical first step to win users back from our API.',
  },
  {
    image: IntroImg4,
    title: 'Legacy Features',
    details:
      'Great features aren’t brought upfront while depracating: architected in legacy database and placed in hidden areas of product.',
  },
];

const SidebySide1 = () => {
  return (
    <>
      {sidedata1.map(s => (
        <SidebySideLayout key={s.title} image1={s.image} title1={s.title} details1={s.details} />
      ))}
    </>
  );
};

export default SidebySide1;
