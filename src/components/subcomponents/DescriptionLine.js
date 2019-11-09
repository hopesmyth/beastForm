import React from 'react';
import {capitalise} from "../../utils/stringUtils";

const sizeChart = {
  tiny: 2.5,
  small: 5,
  medium: 5,
  large: 10,
  huge: 15,
  gargantuan: 20,
};

const DescriptionLine = ({size, type}) => (
  <p>
    <em>
      {capitalise(size)} {type} ({sizeChart[size]} x {sizeChart[size]}ft.)
    </em>
  </p>
);

export default DescriptionLine;