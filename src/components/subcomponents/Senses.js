import React from 'react';

const Senses = ({passivePerception, senses}) => (
  <p>
    <strong>Senses </strong>
    {Object.keys(senses).map(sense => <>{sense} {senses[sense]}ft., </>)}
    <>passive Perception {passivePerception}</>
  </p>
);

export default Senses