import React from 'react';

class Speeds extends React.Component{

  render() {
    const { stats: { speed, climbSpeed, swimSpeed, flySpeed, burrowSpeed } } = this.props;

    return (
      <p>
        <strong>Speed</strong> {speed} ft.
        { climbSpeed ? <>, climb {climbSpeed}ft.</> : <></> }
        { swimSpeed ? <>, swim {swimSpeed}ft.</> : <></> }
        { flySpeed ? <>, fly {flySpeed}ft.</> : <></> }
        { burrowSpeed ? <>, burrow {burrowSpeed}ft.</> : <></> }
      </p>
    )
  }

}

export default Speeds;