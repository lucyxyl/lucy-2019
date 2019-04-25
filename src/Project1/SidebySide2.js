import React from 'react';
import SidebySideLayout2 from './SidebySideLayout2';

import Archetype1 from '../Image/Project1_Archetype1.png';
import Archetype2 from '../Image/Project1_Archetype2.png';
import Archetype3 from '../Image/Project1_Archetype3.png';

const SidebySide2 = () => {
  return (
    <>
      {sidedata2.map(s => (
        <SidebySideLayout2 image2={s.image} title2={s.title} details2={s.details} />
      ))}
    </>
  );
};

const sidedata2 = [
  {
    image: Archetype1,
    title: 'The C-Leader',
    details: 'The person making money decisions - paying for our service. ROI is their primary concern.',
  },
  {
    image: Archetype2,
    title: 'The Director/Architect',
    details:
      'The designer/overseer of network infrastructure. Overall health of their org network is their primary concern.',
  },
  {
    image: Archetype3,
    title: 'The Network Engineers',
    details:
      'the frontline warriors discovering and resolving IT tickets. Health of their network segment is their primary concern.',
  },
];

export default SidebySide2;
