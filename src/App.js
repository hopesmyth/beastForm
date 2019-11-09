import React from 'react';
import './App.css'
import statBlocks from "./statBlocks/statBlocks";
import CreatureSelect from "./components/CreatureSelect";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeast: 'brownBear',
      wildShapes: this.getWildShapes(),
    }
  }

  getWildShapes = () => {
    const creatures = Object.keys(statBlocks);
    const creatureNames = creatures.filter(cn => statBlocks[cn].type === 'beast');
    const selection = creatureNames.map(cn => ({
      index: cn,
      name: statBlocks[cn].name,
      cr: statBlocks[cn].cr,
    }));
    return selection.sort((a, b) => (a > b) ? 1 : -1);
  };

  selectWildShape = (index) => {
    this.setState({ selectedBeast: index });
  };

  render() {
    const { selectedBeast, wildShapes } = this.state;

    return (
      <div className="App">
        <h1>beastForm</h1>
        <CreatureSelect creatures={wildShapes} selected={selectedBeast} selectFunc={this.selectWildShape}/>
      </div>
    )
  }
}

export default App;