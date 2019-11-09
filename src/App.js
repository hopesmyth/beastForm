import React from 'react';
import './App.css'
import statBlocks from "./statBlocks/statBlocks";
import CreatureSelect from "./components/CreatureSelect";
import defaultCharacter from "./utils/defaultCharacter";
import generateBeastForm from "./utils/generateBeastForm";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedBeast: 'brownBear',
      wildShapes: this.getWildShapes(),
      character: defaultCharacter,
      beastForm: {},
    };
  }

  componentDidMount() {
    this.refreshBeastForm();
    this.setState({ loading: false });
  }

  getWildShapes = () => {
    const creatures = Object.keys(statBlocks);
    const creatureNames = creatures.filter(cn => statBlocks[cn].type === 'beast');
    const selection = creatureNames.map(cn => ({
      index: cn,
      name: statBlocks[cn].name,
      cr: statBlocks[cn].cr,
    }));
    return selection.sort((a, b) => (a.cr > b.cr) ? 1 : -1);
  };

  selectWildShape = (index) => {
    this.setState({ selectedBeast: index });
    this.refreshBeastForm();
  };

  refreshBeastForm = () => {
    const { selectedBeast, character } = this.state;
    const beastForm = generateBeastForm({ beast: statBlocks[selectedBeast], character });
    this.setState({ beastForm });
  };

  render() {
    const { loading, selectedBeast, wildShapes, beastForm } = this.state;

    console.log(beastForm);

    if (loading) return (<></>);

    return (
      <div className="App">
        <h1>beastForm</h1>
        <CreatureSelect creatures={wildShapes} selected={selectedBeast} selectFunc={this.selectWildShape}/>
        <h1>{beastForm.name}</h1>
      </div>
    )
  }
}

export default App;