import React from 'react';

class Features extends React.Component {


  render() {
    const { features } = this.props;

    return (
      <div>
        {features.map( feature =>
          <p key={feature.name}>
            <strong>{feature.name}.</strong> {feature.description}
          </p>
        )}
      </div>
    )
  }
}

export default Features;